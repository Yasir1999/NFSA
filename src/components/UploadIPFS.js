import React, { Component} from 'react';
import Image from '../contracts/Image.json';
import Web3 from "web3";
import './UploadIPFS.css';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: 'ipfs.infura.io', port: '5001', protocol: 'https'})


class UploadIPFS extends Component {

async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // This function loads the IPFS data from the blockchain and sets the total amount into a state variable
  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = Image.networks[networkId]
    if(networkData) {
      const abi = Image.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract: contract})
      const imgHash = await contract.methods.getHash().call()
      this.setState({ imgHash: imgHash })
      const sumImg = await contract.methods.numHashes().call()
      this.setState({ totalImgs: sumImg})
      await this.loadArray()
      await this.updateCount()
    } else {
      window.alert('Smart contract not deployed to the detected network')
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      buffer: null,
      contract: null,
      imgHash: [],
      indexID: null,
      totalImgs: null,
      arrHash: [{
        arrName: [],
        arrHVal: []
      }],
      itemArray: [],
      itemName: [],
      linkArray: [],
      imgName: [],
      arrText: []
    };
  };

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Please use MetaMask!')
    }
  }

  // This function captures the file after the user has selected it from their desktop. It then reads the file and stores it as an array buffer
  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result)})
      console.log('buffer', this.state.buffer)
    }
  }

  // Function to retrieve the name of the file inputted by the user
  captureName = (event) => {
    event.preventDefault()
    const file = event.target.value;
    this.setState({ imgName: file });
    console.log(file);
  }

  // Function to capture the ID inputted by the user for searching IPFS items
  captureID = (event) => {
    event.preventDefault()
    const file = event.target.value;
    if (file === 0){
      console.log("error invalid index number");
    }else {
      this.setState({ indexID: file - 1});
    }
  }

  // Submits the file and the name and adds it to the IPFS service
  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting the form...")
    const imgName = this.state.imgName
    console.log(imgName);
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('ipfs result', result)
      const imgHash = result[0].hash
      if(error) {
        console.error(error)
        return
      }
      // This stores the IPFS hash and name given into the smart contract making it immutable.
      this.state.contract.methods.setImgHash(imgHash, imgName).send({ from: this.state.account }).then((r) => {
        this.setState({ imgHash: imgHash })
        this.setState({ arrName: imgName })
        this.setState({ arrHVal: imgHash })
        this.setState({ imgName: imgName })
        this.setState({ arrText: imgName })
        console.log("img hash: " + this.state.imgHash);
        console.log("arr hash: " + this.state.arrHash);
        console.log("img name: " + this.state.imgName);
        console.log("img arr: " + this.state.arrText);
      })
    })
    this.state.contract.methods.numHashes().call().then((r) => {
      let res = this.setState({totalImgs: r});
      console.log(res);
    })
    this.updateCount();    
}

// Loads the array list of the items from the smart contract
async loadArray() {
  const amt = this.state.totalImgs
    for (var i=0; i < amt; i++){
      this.state.contract.methods.getImgHash(i).call().then((res) => {
      var a = res[0];
      var b = res[1];
        this.setState(prevState => ({
          arrHash: [{
            ...prevState.arrHash[0],
            arrHVal: [...prevState.arrHash[0].arrHVal, b],
            arrName: [...prevState.arrHash[0].arrName, a]
          }],
        }));
      })
  }
}

// Retrieves the Image hash from IPFS by calling the smart contract by using the ID of the IPFS item
getImage = (event) =>  {
  event.preventDefault()
  const indID = this.state.indexID
  const total = this.state.totalImgs
  if (indID < 0){
    console.log("error: " + total + " " + indID);
  }
  else if (indID > total) {
    console.log("error: " + total + " " + indID);
  } else {
    this.state.contract.methods.ImageHashes(indID).call().then((result) => {
      document.getElementById('outputImg').innerText = result;
      this.setState({ linkArray: "https://ipfs.infura.io/ipfs/"+result });
      this.setState({ imgHash: result })
    })
    this.state.contract.methods.ImageName(indID).call().then((r2) => {
      document.getElementById('outputImgName').innerText = r2;
      this.setState({ imgName: r2 })
      console.log(r2);
    })
  }
}

// Updates the local count of the amount of files stored
async updateCount(){
  const amt = this.state.totalImgs
  console.log(amt);
  if (amt === 0){
    document.getElementById('outputAmt').innerText = amt + 1;
  } else if (amt > 0){
    document.getElementById('outputAmt').innerText = amt;
    this.state.contract.methods.numHashes().call().then((result) =>{
      console.log(result);
    })
  }
}

// Button to manually get the count of items
getCount = (event) => {
  event.preventDefault()
  const amt = this.state.totalImgs
  console.log(amt);
  if (amt === 0){
    document.getElementById('outputAmt').innerText = amt + 1;
  } else if (amt > 0){
    document.getElementById('outputAmt').innerText = amt;
    this.state.contract.methods.numHashes().call().then((result) =>{
      document.getElementById('outputAmt').innerText = result;
    })
  }

}

// Retrieves and stores the IPFS hash and ID from the smart contract into States
getArray = (event) => {
  event.preventDefault()
  const amt = this.state.totalImgs
  for (var i=0; i < amt; i++){
    this.state.contract.methods.getImgHash(i).call().then((res) => {
     var a = res[0];
     var b = res[1];
      this.setState(prevState => ({
        arrHash: [{
          ...prevState.arrHash[0],
          arrHVal: [...prevState.arrHash[0].arrHVal, b],
          arrName: [...prevState.arrHash[0].arrName, a]
        }],
      }));
      console.log("Val " + this.state.arrHash[0].arrHVal);
      console.log("Name " + this.state.arrHash[0].arrName);
    })
    console.log(this.state.contract.methods.getImgHash(0).call());
  }

  this.renderOutput();
}
  
  renderOutput = () => {
  
  }



  handleChange(e) {
    console.log(e.target.value)
  }

  // Retrieves name of Image from the smart contract
  getImgNameFromContract = (event) => {
    event.preventDefault()
    const getID = 0;
    this.state.contract.methods.ImageName(getID).call().then((r) => {
      document.getElementById('outputImgName').innerText = r;
    })
  }

  


  render() {
    return (
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <h2>Upload File to IPFS</h2>
              <br></br>
              <br></br>
                <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.captureFile}/>
                  <span>File Name: <input type='text' onChange={this.captureName}/></span>
                  <input type='submit' id='btn'/>
                </form>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>File Name: <span id="outputImgName">##########</span></p>
                <p>File Hash: <span id="outputImg">##########</span></p>
                <a href={this.state.linkArray}>File Link</a>
                <br></br>
                <br></br>
                <br></br>
                <form onSubmit={this.getImage}>
                  <p><strong>Get File By ID</strong></p>
                  <input type='text' onChange={this.captureID}/>
                  <input type='submit' id='btn'/>
                </form>
                <p>&nbsp;</p>
                <p>Total File Count:     <span id="outputAmt"></span></p>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                  <table>
                    <tr>
                      <th>Index</th>
                      <th>Item Name</th>
                      <th>Item Hash</th>
                    </tr>
                    {this.state.arrHash.map((item, index) => (
                        this.state.arrHash[index].arrName.map((el,i) => (
                        <tr key={index}>
                          <td>{i+1}</td>
                          <td>{el}</td>
                          <td>{this.state.arrHash[index].arrHVal[i]}</td>
                        </tr>
                        ))
                        ))}
                  </table>
                </div>                
                <br></br>
                <br></br>
                <br></br>
                </div>
                </main>
          </div>
        </div>
    );
    }


}

export default UploadIPFS;
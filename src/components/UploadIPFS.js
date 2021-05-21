import React, { Component} from 'react';
import Image from '../contracts/Image.json';
import Web3 from "web3";
import { Button, Card, CardGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './UploadIPFS.css';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: 'ipfs.infura.io', port: '5001', protocol: 'https'})


class UploadIPFS extends Component {

async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()

//    await this.getCount()
    
    /*let images = [];
    const addImage = (ev)=> {

    ev.preventDefault();
    let image = {
      id: Date.now,
      hash: document.getElementById('outputItem').value
    }
    images.push(image);
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(images, '\t', 2);

    localStorage.setItem('MyImageList', JSON.stringify(images));
    } 

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addImage);
    });*/
  }

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
    //this.handleChange = this.handleChange.bind(this)
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

  captureName = (event) => {
    event.preventDefault()
    const file = event.target.value;
    this.setState({ imgName: file });
    console.log(file);
  }

  captureID = (event) => {
    event.preventDefault()
    const file = event.target.value;
    if (file === 0){
      console.log("error invalid index number");
    }else {
      this.setState({ indexID: file - 1});
    }
  }

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
      /*
      this.state.contract.methods.setHash(imgHash).send({ from: this.state.account }).then((r) => {
        this.setState({ imgHash: r })
        this.setState({ arrHash: r })
      })*/

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
      //const res = imgHash
      //document.getElementById('outputItem').innerText = res;
      
    })
    this.state.contract.methods.numHashes().call().then((r) => {
      //let a = [];
      let res = this.setState({totalImgs: r});
      document.getElementById('outputTotal').innerText = res;
      console.log(res);
    })
    this.updateCount();
    //this.loadArray();
    
}
/*
getImages = (event) =>  {
  event.preventDefault()
  const indID = this.state.indexID
  this.state.contract.methods.ImageHashes(indID).call().then((r) => {
    document.getElementById('outputImg').innerText = r;
  })
}*/

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

getImage = (event) =>  {
  event.preventDefault()
  const indID = this.state.indexID
  const total = this.state.totalImgs
  if (total <= 0){
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

getArray = (event) => {
  event.preventDefault()
  const amt = this.state.totalImgs
  //const imgs = this.state.imgHash
  //console.log(amt + 1);
  //console.log(this.state.contract.methods.getHash().call());
  //var j;
  //const output = []
  //const output2 = []
  //const output2 = this.state.imgHash
  for (var i=0; i < amt; i++){
    this.state.contract.methods.getImgHash(i).call().then((res) => {
      
      //output[i] = res[0];
     // output2[i] = res[1];
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


    /*this.state.contract.methods.ImageHashes(i).call().then((res) => {
      output[i] = res;
      //console.log(output[i]);
      //this.setState({ arrHash: output})
      //console.log(i + " " + this.state.arrHash[i]);
     // this.setState({ arrHVal: output })
      //console.log(i + " arrHVal: " + this.state.arrHVal[i]);
      //document.getElementById('outputList').innerText = output[i];
      this.setState(prevState => ({
        arrHash: [{
          ...prevState.arrHash[0],
          arrHVal: [...prevState.arrHash[0].arrHVal, output[i]]
        }],
      }));
  })*//*
  for (j=0; j < amt; j++){
    this.state.contract.methods.ImageName(j).call().then((res2) => {
    output2[j] = res2;
    //output2[i].push(res2);
    //this.setState({ arrText: output2 })
    //console.log(i + " " + this.state.arrText[i]);
    //this.setState({ arrName: output2 })
    //console.log(i + " arrName: " + this.state.arrName[i]);
   // console.log(output2[i], " result ");
    //console.log(output2.length);
    //console.log(output2[1]);
    //console.log(this.state.arrName[1]);
    this.setState(prevState => ({
      arrHash: [{
        ...prevState.arrHash[0],
        arrName: [...prevState.arrHash[0].arrName, res2]
      }],
    }));
  })
}*/
  /*
  this.setState(prevState => ({
    arrHash: [{
      ...prevState.arrHash[0],
      arrName: [...prevState.arrHash[0].arrName, "test"],
      arrHVal: [...prevState.arrHash[0].arrHVal, "Test2"]
    }],
  }));*/
  }

  this.renderOutput();
}
  
  renderOutput = () => {
    /*return this.state.arrHash.map((index => {
      return (
            <tr>
              <td key={index.arrName}>

              </td>
              <td key={index.arrHVal}>

              </td>
              
            </tr>
      )
    }))*/
    
  }
/*
  renderOutput = () => {
    return this.state.arrHash.map((arrHash, index) => (
      <>
        <td key={index}>{arrHash.itemName}</td>
        <td key={index}>{arrHash.index}</td>
      </>
  ))
  }*/


  handleChange(e) {
    console.log(e.target.value)
  }

  getImgNameFromContract = (event) => {
    event.preventDefault()
    const getID = 0;
    this.state.contract.methods.ImageName(getID).call().then((r) => {
      document.getElementById('outputImgName').innerText = r;
    })
  }

  


  render() {
    const arrHash = [{
      arrName: [],
      arrHVal: []
    }];
    return (
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.imgHash}`} className="img-resize" />
                  <p>&nbsp;</p>
                  <p>File Name: <span id='outputImgName'></span></p>
                <p>&nbsp;</p>
                <h2>Change image</h2>
                <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.captureFile}/>
                  <input type='text' onChange={this.captureName}/>
                  <input type='submit' id='btn'/>
                </form>
                <p>&nbsp;</p>
                <p>Total number of files saved:</p><span id="outputTotal"></span>
                <p>Image hash: <span id="outputImg">##########</span></p>
                <p>Count: <span id="outputAmt"></span></p>
                <Button onClick={this.getCount} variant='dark'>get count</Button>
                <br></br>
                <br></br>
                <form onSubmit={this.getImage}>
                  <input type='text' onChange={this.captureID}/>
                  <input type='submit' id='btn'/>
                </form>
                <br></br>
                <Button onClick={this.getImgNameFromContract}>get name</Button>
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

                

             {/*
                    {this.state.arrHash.map(eachItem => (
                      <div>
                        name: {eachItem.arrName}
                        <br />
                        hash: {eachItem.arrHVal}
                      </div>
                    ))}
                    */}
                
                <br></br>
                <br></br>
                <Button onClick={()=> {

                }}>Test</Button>
                <br></br>

                {/*
                <table>
                  <tr>
                    <th>Index</th>
                    <th>IPFS Hash Value</th>
                    <th>Name</th>
                  </tr>
                  {this.state.arrHash.map((item =>
                    <tr key={item.arrName}>{Object.values(item).map((val) => (
                      {item.arrHVal}</tr>
                    ))}
                    </table> 
              
                <React.Fragment>
                  {this.state.arrHash.map(eachItem => (
                    <div>
                      name: {eachItem.arrName}
                      <br />
                      hash: {eachItem.arrHVal}
                    </div>
                  ))
                }
                </React.Fragment>
              */}{/*
                <select onChange={this.handleChange}>
                  {this.state.arrHash.map(item => {
                    return (
                      <option value={item.arrName}>{item.arrName}</option>
                    )
                  })}
                </select>*/}
                <br></br>
                </div>
                </main>
                
                <div className="container">
                  {/*<CardGroup>
                    {this.state.arrHash.map((item, index) => (
                        this.state.arrHash[index].arrName.map((el,i) => (
                          <Card key={index} style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={`https://ipfs.infura.io/ipfs/${this.state.arrHash[index].arrHVal[i]}`} className="img-resize"></Card.Img>
                            <Card.Body>
                              <Card.Title>Item Name: {el}</Card.Title>
                              <Card.Text>
                                IPFS Hash: {this.state.arrHash[index].arrHVal[i]} <br></br>
                                <a href={`https://ipfs.infura.io/ipfs/${this.state.arrHash[index].arrHVal[i]}`}>Link To Item</a>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                      ))
                      ))}
                        </CardGroup>*/}
                </div>
          </div>
        </div>
    );
    }


}

export default UploadIPFS;
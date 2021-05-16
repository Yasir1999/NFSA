import React, { Component} from 'react';
import Image from '../contracts/Image.json';
import Web3 from "web3";
import { Button } from 'react-bootstrap';
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
      this.setState({ totalImgs: sumImg-1})
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
      arrHash: []
    };
    this.handleChange = this.handleChange.bind(this)
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

  captureID = (event) => {
    event.preventDefault()
    const file = event.target.value;
    this.setState({ indexID: file});
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting the form...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('ipfs result', result)
      const imgHash = result[0].hash
      if(error) {
        console.error(error)
        return
      }
      this.state.contract.methods.setHash(imgHash).send({ from: this.state.account }).then((_r) => {
        this.setState({ imgHash: imgHash })
        this.setState({ arrHash: imgHash })
      })
      //const res = imgHash
      //document.getElementById('outputItem').innerText = res;
      this.state.contract.methods.numHashes().call().then((r) => {
        let a = [];
        let sS = this.setState.totalImgs;
        a.push(document.getElementById('outputTotal').innerText = r);
        sS = r;
        console.log(sS);
      })
    })
}
/*
getImages = (event) =>  {
  event.preventDefault()
  const indID = this.state.indexID
  this.state.contract.methods.ImageHashes(indID).call().then((r) => {
    document.getElementById('outputImg').innerText = r;
  })
}*/

getImage = (event) =>  {
  event.preventDefault()
  const indID = this.state.indexID
  const total = this.state.totalImgs
  if (indID > total) {
    console.log("error: " + total + " " + indID)
  } else {
    this.state.contract.methods.ImageHashes(indID).call().then((result) => {
      document.getElementById('outputImg').innerText = result;
      this.setState({ imgHash: result })
    })
  }
}

getCount = (event) => {
  event.preventDefault()
  const amt = this.state.totalImgs
  console.log(amt);
  document.getElementById('outputAmt').innerText = amt;
}

getArray = (event) => {
  event.preventDefault()
  const amt = this.state.totalImgs
  const imgs = this.state.imgHash
  console.log(amt + 1);
  console.log(this.state.contract.methods.getHash().call());
  var i;
  const output = []
  const output2 = this.state.imgHash
  for (i=0; i <= amt; i++){
    this.state.contract.methods.ImageHashes(i).call().then((res) => {
      output[i] = res;
      //console.log(output[i]);
      this.setState({ arrHash: output})
      console.log("testign " + this.state.arrHash[i]);
      //document.getElementById('outputList').innerText = output[i];
  })
    //this.setState({ arrHash: output})
    //console.log(i);
  }
  
  
}
  
  renderOutput = () => {
    return this.state.arrHash.map((image, index) => {
      return (
            <tr>
              <td>{index}</td>
              <td>{image}</td>
            </tr>
      )
    })
  }

  handleChange(e) {
    console.log(e.target.value)
  }



  render() {
    
    return (
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.imgHash}`} className="img-resize" />
                  <p>&nbsp;</p>
                  {/*<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://ipfs.infura.io/ipfs/${this.state.imgHash}`} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>*/}
                <p>&nbsp;</p>
                <h2>Change image</h2>
                <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.captureFile}/>
                  <input type='submit' id='btn'/>
                </form>
                {/*<a href={`https://ipfs.infura.io/ipfs/${this.state.imgHash}`} download="userfile">download file</a><br></br>*/}
                <p>&nbsp;</p>
                <p>Total number of files saved:</p><span id="outputTotal"></span>
                <p>Image hash: <span id="outputImg">##########</span></p>
                <p>Count: <span id="outputAmt"></span></p>
                <Button onClick={this.getCount} variant='dark'>get count</Button>
                <br></br>
                <Button onClick={this.getArray} variant='dark'>get array</Button>
                <br></br>
                <form onSubmit={this.getImage}>
                  <input type='text' onChange={this.captureID}/>
                  <input type='submit' id='btn'/>
                </form>
                <br></br>
                <table>
                  <tr>
                    <th>Index</th>
                    <th>IPFS Hash Value</th>
                  </tr>
                    {this.renderOutput()}
                </table> 

                {/*<select onChange={this.handleChange}>
                  {this.state.arrHash.map(index => {
                    return (
                      <option value={index}>{index}</option>
                    )
                  })}
                </select>*/}
                <br></br>
                </div>
                </main>
          </div>
        </div>
    );
    }


}

export default UploadIPFS;
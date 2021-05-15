import React, { Component, useState } from 'react';
import Image from '../contracts/Image.json';
import Web3 from "web3";

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host: 'ipfs.infura.io', port: '5001', protocol: 'https'})


class UploadIPFS extends Component {

async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    
    
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
      indexID: null
    };
  }

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

  loadImgs() {
    const [img, setImg] = this.state.useState();

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
      this.state.contract.methods.setHash(imgHash).send({ from: this.state.account }).then((r) => {
        this.setState({ imgHash: imgHash })
      })
      const res = imgHash
      //imgHash.push(res);
      document.getElementById('outputItem').innerText = res;
      this.state.contract.methods.numHashes().call().then((r) => {
        let a = [];
        a.push(document.getElementById('outputTotal').innerText = r);
      })
      /*this.state.contract.methods.ImageHashes(0).call().then((r) => {
        document.getElementById('outputImg').innerText = r;
      })*/
    })
}

getImages = (event) =>  {
  event.preventDefault()
  const indID = this.state.indexID
  this.state.contract.methods.ImageHashes(indID).call().then((r) => {
    document.getElementById('outputImg').innerText = r;
  })
}


 

  render() {
    
    return (
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.imgHash}`} />
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
                <p>Image Link: https://ipfs.infura.io/ipfs/</p><span id="outputItem"></span>
                <p>&nbsp;</p>
                <p>Total number of files saved:</p><span id="outputTotal"></span>
                <p>Image output:</p><span id="outputImg"></span>
                <form onSubmit={this.getImages}>
                  <input type='query' onChange={this.captureID}/>
                  <input type='submit' id='btn'/>
                </form>
                <button onClick={this.getImages}>Get Image</button>
                </div>
                </main>
          </div>
        </div>
    );
    }


}

export default UploadIPFS;
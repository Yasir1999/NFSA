import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemManager.css'
import ItemManagerContract from "../contracts/ItemManager.json";
import ItemContract from "../contracts/Item.json";
import getWeb3 from "../getWeb3";
import Web3 from "web3";
import { Container, Button, Table } from 'react-bootstrap'
import Image from '../contracts/Image.json';


class ItemManager extends Component {
    state = { loaded: false, cost: 0, itemName: "test"  };

    constructor(props) {
      super(props);
      this.state = {
        itemArray: [],
        //itemName: [],
        itemAddress: [],
        itemCost: [],
        totalCount: null,
        imageContract: null,
        itemManagerContract: null,
        itemContract: null,
        indexID: null,
        arrayOfItems: [],
        totalImgs: null,
        imgName: [],
        imgHash: [],
        arrHash: [{
          arrName: [],
          arrHVal: []
        }],
        arrCon: [{
          arrConName: [],
          arrConAdd: [],
          arrConCost: []
        }],
        sendAddress: null,
        sendCost: null
      }
      this.handleChange = this.handleChange.bind(this)
    };

    async componentWillMount() {
      await this.loadWeb3()
      await this.loadBlockchainData()
      await this.componentDidMount()
      await this.getCount()
    }
    
    /*array = Array();

    add_element_to_array() {
      
      array[x] = document.getElementById('outputItem').value;
      alert("Element: " + array[x] + " Added at index " + x);
      x++;
    }
*/
/*
    componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      this.ItemManagerContract = new this.web3.eth.Contract(
        ItemManagerContract.abi,
        ItemManagerContract.networks[this.networkId] && ItemManagerContract.networks[this.networkId].address,
      );

      this.item = new this.web3.eth.Contract(
        ItemContract.abi,
        ItemContract.networks[this.networkId] && ItemContract.networks[this.networkId].address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.listenToPaymentEvent();
      this.setState({ loaded:true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };*/

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


  async loadBlockchainData() {
    
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkDataImage = Image.networks[networkId]
    const networkDataIM = ItemManagerContract.networks[networkId]
    //const networkDataItem = ItemContract.networks[networkId]

    if(networkDataImage) {
      const abi = Image.abi
      const address = networkDataImage.address
      const contract2 = new web3.eth.Contract(abi, address)
      this.setState({ imageContract: contract2})
      const imgHash = await contract2.methods.getHash().call()
      this.setState({ imgHash: imgHash })
      const sumImg = await contract2.methods.numHashes().call()
      this.setState({ totalImgs: sumImg})
      await this.loadArray();
    } else {
      window.alert('networkDataImage Smart contract not deployed to the detected network')
    }

    if(networkDataIM) {
      const abi = ItemManagerContract.abi
      const address = networkDataIM.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ itemManagerContract: contract})
      //const imgHash = await contract.methods.getHash().call()
      //this.setState({ imgHash: imgHash })
      //const sumImg = await contract.methods.numHashes().call()
      //this.setState({ totalImgs: sumImg-1})
    } else {
      window.alert('networkDataIM Smart contract not deployed to the detected network')
    }


    

    /*if(networkDataItem) {
      const abi = ItemContract.abi
      const address = networkDataItem.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ itemContract: contract})
      //const imgHash = await contract.methods.getHash().call()
      //this.setState({ imgHash: imgHash })
      //const sumImg = await contract.methods.numHashes().call()
      //this.setState({ totalImgs: sumImg-1})
    } else {
      window.alert('networkDataItem Smart contract not deployed to the detected network')
    }*/
    this.listenToPaymentEvent();
    await this.renderOutput();
    await this.getItemsArray();
    this.setState({ loaded:true });
  }

  async loadArray() {
    const amt = this.state.totalImgs
      for (var i=0; i < amt; i++){
        this.state.imageContract.methods.getImgHash(i).call().then((res) => {
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


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      this.ItemManagerContract = new this.web3.eth.Contract(
        ItemManagerContract.abi,
        ItemManagerContract.networks[this.networkId] && ItemManagerContract.networks[this.networkId].address,
      );

      this.item = new this.web3.eth.Contract(
        ItemContract.abi,
        ItemContract.networks[this.networkId] && ItemContract.networks[this.networkId].address,
      );

      this.state.imageContract = new this.web3.eth.Contract(
        Image.abi,
        Image.networks[this.networkId] && Image.networks[this.networkId].address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      //this.listenToPaymentEvent();
      this.setState({ loaded:true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
    this.renderOutput();
  };

  


  listenToPaymentEvent = () => {
    let self = this.state;
    //this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
    this.state.itemManagerContract.events.SupplyChainStep().on("data", async function(evt) {      
      console.log(evt);
      let itemObj = await self.itemManagerContract.methods.items(evt.returnValues._itemIndex).call();
      //let itemObj3 = await self.ItemManagerContract.methods.items(evt.returnValues._itemAddress).call();
      //let itemObj2 = await self.ItemManagerContract.methods.items(evt.returnValues._step).call();
      //alert("Item " + itemObj._identifier + " was paid, deliver it now!");
      console.log(itemObj._step);
      console.log(self.itemManagerContract.methods.items(evt.returnValues._step).call());
      if(itemObj._state === "1"){
        alert("Item " + itemObj._identifier + " was paid, deliver it now!");
        document.getElementById('outputItem').innerText = "";
        document.getElementById('outputCost').innerText = "";
        document.getElementById('outputAddress').innerText = "";
      }
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async() => {
    //const { cost } = this.state;
    const { cost, itemName } = this.state;
    //const iM = this.state.itemName;
    console.log(itemName, cost, this.state.itemManagerContract);
    let result = await this.state.itemManagerContract.methods.createItem(itemName, cost).send({from: this.accounts[0]});
    console.log(result);
    alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._itemAddress);
    console.log(result.events.SupplyChainStep.returnValues._step);
    if (result.events.SupplyChainStep.returnValues._step !== 1){
      //this.setState({ itemArray: result })
      let a = [];
      let Iname = [];
      let Iadd = [];
      let Icost = [];
      let awaitCost = cost;
      let awaitAddress = result.events.SupplyChainStep.returnValues._itemAddress;
      let awaitItem = itemName;
      a.push({awaitItem, awaitCost, awaitAddress});
      //a.push(awaitCost);
      //a.push(awaitAddress);
      this.setState({ itemArray: a});
      console.log(this.state.itemArray);
      Iname.push(awaitItem);
      Iadd.push(awaitAddress);
      Icost.push(awaitCost);
      this.setState({itemName: Iname});
      this.setState({itemAddress: Iadd});
      this.setState({itemCost: Icost});
      console.log(this.Iname[0]);
      console.log(this.Iadd[0]);
      console.log(this.Icost[0]);
      console.log(this.state.itemName);
      console.log(this.state.itemAddress);
      console.log(this.state.itemCost);
      this.setState({})

      
      document.getElementById('outputItem').innerText = awaitItem;
      document.getElementById('outputCost').innerText = awaitCost;
      document.getElementById('outputAddress').innerText = awaitAddress;
      this.renderOutput();
    } 
  };

  handleDelivery = async() => {
    let self = this;
    this.state.itemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
      console.log(evt);
      let itemDeliver = await self.ItemManagerContract.methods.triggerDelivery(evt.returnValues._itemIndex).call();
      console.log("item delivered: " + itemDeliver);
      document.getElementById('deliverItem').innerText = itemDeliver;
    }
  )};
/*
  getCount = (event) => {
    event.preventDefault()
    const amt = this.state.totalCount
    this.state.itemManagerContract.methods.getItems().call().then((total) => {
      this.setState({ totalCount: total})
      document.getElementById('outputAmt').innerText = total;
      console.log(total);
    })
    //console.log(amt);
    //document.getElementById('outputAmt').innerText = amt;
  }*/

  getCount = async() => {
    //event.preventDefault()
    //const amt = this.state.totalCount
    this.state.itemManagerContract.methods.getItems().call().then((total) => {
      this.setState({ totalCount: total})
      document.getElementById('outputAmt').innerText = total;
      console.log(total);
    })
    //console.log(amt);
    //document.getElementById('outputAmt').innerText = amt;
  }

  getAddress = (event) => {
    event.preventDefault()
    const sendAdd = event.target.value;
    this.setState({ sendAddress: sendAdd })
    /*if (sendAdd.length < 42 || sendAdd.length > 42){
      alert("error: invalid address: " + sendAdd);
    } else if (sendAdd.length = 42) {
    this.setState({ sendAddress: sendAdd })
    }*/
  }

  getPrice = (event) => {
    event.preventDefault()
    const sendValue = event.target.value;
    this.setState({ sendCost: sendValue })
  }

  
  sendRoyalty = () => {
    const payeeAdd = this.state.accounts[0];
    const sendAdd = this.state.sendAdd;
    const sendCost = this.state.sendCost;
    const web3_utils = require('web3-utils');
    if (sendAdd.length < 42 || sendAdd.length > 42){
      alert("error: invalid address: " + sendAdd);
    } else if (sendCost === "") {
      alert("error: invalid price to pay: " + sendCost);
    } else if (sendAdd.length = 42 && sendCost !== "") {
      window.web3 = new Web3(window.ethereum)
      this.web3.eth.sendTransaction({from: payeeAdd,
      to: sendAdd,
      value: web3_utils.fromWei(sendCost)})
    }
  }

  getArray = (event) => {
    event.preventDefault()
    //const myList = JSON.stringify(list.nestable('serialize').map(i => i.id));
    //const amt = this.state.totalCount
    const amt = 1;
    console.log(amt);
    var i;
    const output = []
    for (i=0; i <= amt; i++){
      //let result = this.state.itemArray[i];
      //console.log(result);
      let r1 = this.state.itemName[i];
      let r2 = this.state.itemAddress[i];
      let r3 = this.state.itemCost[i];
      console.log("r1: " + r1 + "\n r2: " + r2 + "\n r3: " + r3);
      this.setState({ itemArray: output })
      console.log("output: " + output[i]);
    }
    /*for (i=0; i <= amt; i++){
      this.state.itemManagerContract.methods.getValueAtMapping(i).call().then((res) => {
        output[i] = res;
        this.setState({ itemArray: output})
        console.log(output[i]);
        console.log("testign " + this.state.itemArray[i]);
      })
    }*/
  }

  renderOutput = () => {
    //return this.state.itemArray.map((item, address, cost, index) => {
    //return this.state.itemArray.map(item => <h1>{item.toString()}</h1>)
      /*return (
            <tr>
              <td>{item}</td>
              <td>{address}</td>
              <td>{cost}</td>
              <td>{index}</td>
            </tr>
      )
    })*/
    return this.state.itemArray.map((itemArray, index) => (
      <>
        <td key={index}>{itemArray.awaitItem}</td>
        <td key={index}>{itemArray.awaitAddress}</td>
        <td key={index}>{itemArray.awaitCost}</td>
      </>
  ))
  }

  captureID = (event) => {
    event.preventDefault()
    const file = event.target.value;
    this.setState({ indexID: file});
  }

  getItemAt = (event) =>  {
    event.preventDefault()
    const indID = this.state.indexID
    const total = this.state.totalCount
    if (indID > total) {
      console.log("error: " + total + " " + indID)
    } else {
      this.state.itemManagerContract.methods.getValueAtMapping(indID).call().then((result) => {
        //document.getElementById('outputArr').innerText = result;
        this.setState({ arrayOfItems: result })
        document.getElementById('outputArr').innerText = this.state.arrayOfItems;
      })
    }
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  getItemSelect = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ itemName: value })
    document.getElementById('outputtesting').innerText = this.state.itemName;
    console.log(this.state.itemName);
  }

  renderObjects = (event) => {
    event.preventDefault()
    this.componentWillMount();
  }
  
  async getItemsArray() {
    this.state.itemManagerContract.methods.getItems().call().then((total) => {
      this.setState({ totalCount: total})
      document.getElementById('outputAmt').innerText = total;
      console.log(total);
      console.log("State: " + this.state.totalCount);
      const amt = this.state.totalCount;
      console.log("amoutn working: " + amt);
      for (var i=0; i < amt; i++){
        this.state.itemManagerContract.methods.getValueAtMapping(i).call().then((res) => {
        var a = res[0];
        var b = res[1];
        var c = res[2];
          this.setState(prevState => ({
            arrCon: [{
              ...prevState.arrCon[0],
              arrConName: [...prevState.arrCon[0].arrConName, a],
              arrConCost: [...prevState.arrCon[0].arrConCost, b],
              arrConAdd: [...prevState.arrCon[0].arrConAdd, c]
            }],
          }));
          console.log("Name " + this.state.arrCon[0].arrConName);
          console.log("Cost " + this.state.arrCon[0].arrConCost);
          console.log("Address " + this.state.arrCon[0].arrConAdd);
        })
        //console.log(this.state.itemManagerContract.methods.getImgHash(0).call());
    }
  })
}

    render() {
      return (
        <Container>
          <div className="App">
              <h2>Items Awaiting Payment</h2>
              <Table striped bordered hover size="sm" variant="light">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Payment Address</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span id="outputItem"/></td>
                    <td><span id="outputAddress"/></td>
                    <td><span id="outputCost"/></td>
                  </tr>
                </tbody>
              </Table>
              
              <br></br>
              <h2>Add Items</h2>
              <br></br>
              <div className="row justify-content-center wrapper">
                <div className="col-2">
                  <row>
                    <p>Cost in Wei:</p>
                  </row>
                  <row>
                    <p>Item Name:</p>
                  </row>
                </div>
                <div className="col-2">
                  <div className="row div-space">
                    <input type="text" name="cost" value={this.state.cost} onChange={this.handleInputChange} />
                  </div>
                  <div className="row div-space">
                      <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleInputChange} />
                      {/*<select onChange={this.getItemSelect}>
                        {this.state.arrHash.map((item, index) => (
                                  this.state.arrHash[index].arrName.map((el,i) => (
                                  <option value={el}>{el}</option>
                                  ))
                                ))}
                      </select>

                      <span id="outputtesting"></span>*/}

                  </div>
                </div>
              </div>
              <div className="row justify-content-center wrapper">
                  <Button variant="dark" type="button" onClick={this.handleSubmit}>Create new Item</Button>
                  <Button variant="dark" type="button" onClick={this.handleDelivery}>Deliver Item</Button>
                  {/*<span id="deliverItem"/>*/}
              </div>
              <Button onClick={this.getCount} variant='dark'>get count</Button>
              <p>Count: <span id="outputAmt"></span></p>
              {/*<Button onClick={this.getItemsArray} variant='dark'>get array</Button>*/}
              <form onSubmit={this.getItemAt}>
                  <input type='text' onChange={this.captureID}/>
                  <input type='submit' id='btn'/>
                </form>
                <span id="outputArr"></span>
              <table>
                  <tr>
                    <th>Index</th>
                    <th>Item</th>
                    <th>Payment Address</th>
                    <th>Cost</th>
                  </tr>
                  {this.state.arrCon.map((item, index) => (
                        this.state.arrCon[index].arrConName.map((el,i) => (
                        <tr key={index}>
                          <td>{i+1}</td>
                          <td>{el}</td>
                          <td>{this.state.arrCon[index].arrConAdd[i]}</td>
                          <td>{this.state.arrCon[index].arrConCost[i]}</td>
                        </tr>
                        ))
                        ))}
              </table> 
              <br></br>
              <select onChange={this.getItemSelect}>
                {this.state.imgHash.map(index => {
                  return (
                    <option value={index}>{index}</option>
                  )
                })}
              </select>



              
              <form onSubmit={this.sendRoyalty}>
                <p>Address To:</p>
                <input type='text' onChange={this.getAddress}></input>
                <p>Price to send: </p>
                <input type='text' onChange={this.getPrice}></input>
                <input type='submit' id='btn2'/>
              </form>

              <Button onClick={this.renderObjects}>Load Data</Button>
          </div>
        </Container>
      );
    }
}

export default ItemManager;
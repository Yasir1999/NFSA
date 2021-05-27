import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemManager.css'
import ItemManagerContract from "../contracts/ItemManager.json";
import ItemContract from "../contracts/Item.json";
import getWeb3 from "../getWeb3";
import { Container, Button, Table } from 'react-bootstrap'

class ItemManager extends Component {
    state = { loaded:false, cost:0, itemName:"test-name" };
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
        paymentContract: null,
        indexID: null,
        arrayOfItems: [],
        totalImgs: null,
        imgName: [],
        imgHash: [],
        arrCon: [{
          arrConName: [],
          arrConAdd: [],
          arrConCost: []
        }],
        sendAddress: null,
        sendCost: null
      }
    };
/*
    async componentWillMount() {
      await this.componentDidMount()
      await this.getItemsArray()
      await this.getWaitingPaymentArray()
    }
*/
    componentDidMount = async () => {
    try {
      this.web3 = await getWeb3();

      this.accounts = await this.web3.eth.getAccounts();

      this.networkId = await this.web3.eth.net.getId();
      this.ItemManagerContract = new this.web3.eth.Contract(
        ItemManagerContract.abi,
        ItemManagerContract.networks[this.networkId] && ItemManagerContract.networks[this.networkId].address,
      );

      this.item = new this.web3.eth.Contract(
        ItemContract.abi,
        ItemContract.networks[this.networkId] && ItemContract.networks[this.networkId].address,
      );
      this.listenToPaymentEvent();
      this.setState({ loaded:true });
      await this.getWaitingPaymentArray()
      await this.getItemsArray()
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  listenToPaymentEvent = async() => {
    let self = this;
    //this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
    this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {      
      console.log(evt);
      let itemObj = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
      //let itemObj3 = await self.ItemManagerContract.methods.items(evt.returnValues._itemAddress).call();
      //let itemObj2 = await self.ItemManagerContract.methods.items(evt.returnValues._step).call();
      //alert("Item " + itemObj._identifier + " was paid, deliver it now!");
      console.log(itemObj._step + evt.returnValues._step);
      console.log(self.ItemManagerContract.methods.items(evt.returnValues._step).call());
      if(evt.returnValues._step === "1"){
        alert("Item " + itemObj._identifier + " was paid, deliver it now!");
        document.getElementById('outputItem').innerText = "";
        document.getElementById('outputCost').innerText = "";
        document.getElementById('outputAddress').innerText = "";
        //document.getElementById('outputIndex').innerText = "";
      }
    });
  }
/*
  listenToPaymentEventAfter = () => {
    let self = this;
    this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {      
      console.log(evt);
      let itemObj = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
      //let itemObj3 = await self.ItemManagerContract.methods.items(evt.returnValues._itemAddress).call();
      //let itemObj2 = await self.ItemManagerContract.methods.items(evt.returnValues._step).call();
      //alert("Item " + itemObj._identifier + " was paid, deliver it now!");
      console.log(itemObj._step + evt.returnValues._step);
      console.log(self.ItemManagerContract.methods.items(evt.returnValues._step).call());
      if(itemObj._state === "1"){
        alert("Item " + itemObj._identifier + " was paid, deliver it now!");
        document.getElementById('outputItem').innerText = "";
        document.getElementById('outputCost').innerText = "";
        document.getElementById('outputAddress').innerText = "";
      }
    });
  }
*/
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async() => {
    const { cost, itemName } = this.state;
    console.log(itemName, cost, this.ItemManagerContract);
    let result = await this.ItemManagerContract.methods.createItem(itemName, cost).send({from: this.accounts[0]});
    console.log(result);
    alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._itemAddress);
    console.log(result.events.SupplyChainStep.returnValues._step);
    if (result.events.SupplyChainStep.returnValues._step !== 1){
      let awaitCost = cost;
      let awaitAddress = result.events.SupplyChainStep.returnValues._itemAddress;
      let awaitItem = itemName;
      //let awaitIndex = result.events.SupplyChainStep.returnValues._itemIndex;
      this.setState(prevState => ({
        arrCon: [{
          ...prevState.arrCon[0],
          arrConName: [...prevState.arrCon[0].arrConName, awaitItem],
          arrConCost: [...prevState.arrCon[0].arrConCost, awaitCost],
          arrConAdd: [...prevState.arrCon[0].arrConAdd, awaitAddress]
        }],
      }));
      document.getElementById('outputItem').innerText = awaitItem;
      document.getElementById('outputCost').innerText = awaitCost;
      document.getElementById('outputAddress').innerText = awaitAddress;
      //document.getElementById('outputIndex').innerText = awaitIndex;
    } 
  };

  handleDelivery = async() => {
    let self = this;
    this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
      console.log(evt);
      let itemDeliver = await self.ItemManagerContract.methods.triggerDelivery(evt.returnValues._itemIndex).call();
      alert("item delivered");
      console.log("item delivered: " + itemDeliver);
      document.getElementById('deliverItem').innerText = itemDeliver;
    }
  )};

/*
  handleIndex = async() => {
    let self = this;
    this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
      console.log(evt);
      let getIndex = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
      let awaitAddress = getIndex.events.SupplyChainStep.returnValues._itemAddress;
      let awaitItem = getIndex.events.SupplyChainStep.returnValues._identifier;;
      let awaitIndex = getIndex.events.SupplyChainStep.returnValues._itemIndex;
      document.getElementById('outputItem').innerText = awaitItem;
      document.getElementById('outputAddress').innerText = awaitAddress;
      document.getElementById('outputIndex').innerText = awaitIndex;
    }
    )};*/

    async getItemsArray() {
      this.ItemManagerContract.methods.getItems().call().then((total) => {
        this.setState({ totalCount: total})
        //document.getElementById('outputAmt').innerText = total;
        console.log(total);
        console.log("State: " + this.state.totalCount);
        const amt = this.state.totalCount;
        console.log("amoutn working: " + amt);
        for (var i=0; i < amt; i++){
          this.ItemManagerContract.methods.getValueAtMapping(i).call().then((res) => {
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
            /*console.log("Name " + this.state.arrCon[0].arrConName);
            console.log("Cost " + this.state.arrCon[0].arrConCost);
            console.log("Address " + this.state.arrCon[0].arrConAdd);*/
          })
          //console.log(this.state.itemManagerContract.methods.getImgHash(0).call());
      }
    })
  }

  getWaitingPaymentArray= async() =>  {
    let self = this;
    const amt = this.state.totalCount;
    for (var i=0; i < amt; i++){
      this.ItemManagerContract.methods.getValueAtMapping(i).call().then((res) => {
        this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {      
          console.log(evt);
          let itemObj = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
          console.log(itemObj._step + evt.returnValues._step);
          console.log(self.ItemManagerContract.methods.items(evt.returnValues._step).call());
          if(evt.returnValues._step === "1"){
            alert("Item " + itemObj._identifier + " was paid, deliver it now!");
            document.getElementById('outputItem').innerText = "";
            document.getElementById('outputCost').innerText = "";
            document.getElementById('outputAddress').innerText = "";
            document.getElementById('outputIndex').innerText = "";
          }
        });
        console.log(res);
      }
    )}
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
              <div className="border">
              <h2>Create Contract</h2>
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
                  </div>
                </div>
              </div>
              <div className="row justify-content-center wrapper">
                <div>
                  <Button variant="dark" type="button" onClick={this.handleSubmit}>Create new Item</Button>
                  <br></br>
                  <br></br>
                  <Button variant="dark" type="button" onClick={this.handleDelivery}>Deliver Item</Button>
                </div>
                  {/*<Button variant="dark" type="button" onClick={this.getWaitingPaymentArray}>Array Test</Button>
                  <Button variant="dark" type="button" onClick={this.handleIndex}>Get by Index</Button>*/}
                  <span id="deliverItem"/>
                  {/*<p>Count: <span id="outputAmt"></span></p>*/}
              </div>
              <br></br>
              </div>
              <br></br>
              <div>
                <h2>Items In The Blockchain</h2>
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
              </div>
          </div>
          <br></br>
        </Container>
      );
    }
}

export default ItemManager;
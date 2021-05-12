import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemManager.css'
import ItemManagerContract from "../contracts/ItemManager.json";
import ItemContract from "../contracts/Item.json";
import getWeb3 from "../getWeb3";
import { Container, Button, Table } from 'react-bootstrap'

class ItemManager extends Component {
    state = { loaded:false, cost:0, itemName:"test-name" };

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
  };


  listenToPaymentEvent = () => {
    let self = this;
    this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
      console.log(evt);
      let itemObj = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
      //let itemObj3 = await self.ItemManagerContract.methods.items(evt.returnValues._itemAddress).call();
      //let itemObj2 = await self.ItemManagerContract.methods.items(evt.returnValues._step).call();
      console.log(itemObj._step);
      console.log(self.ItemManagerContract.methods.items(evt.returnValues._step).call());
      if(itemObj._state === "2"){
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
      document.getElementById('outputItem').innerText = awaitItem;
      document.getElementById('outputCost').innerText = awaitCost;
      document.getElementById('outputAddress').innerText = awaitAddress;
    } 
  };

  handleDelivery = async() => {
    let self = this;
    this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
      console.log(evt);
      let itemDeliver = await self.ItemManagerContract.methods.triggerDelivery(evt.returnValues._itemIndex).call();
      console.log("item delivered: " + itemDeliver);
      document.getElementById('deliverItem').innerText = itemDeliver;
    }
  )};


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
                  </div>
                </div>
              </div>
              <div className="row justify-content-center wrapper">
                  <Button variant="dark" type="button" onClick={this.handleSubmit}>Create new Item</Button>
                  <Button variant="dark" type="button" onClick={this.handleDelivery}>Deliver Item</Button>
                  {/*<span id="deliverItem"/>*/}
              </div>
          </div>
        </Container>
      );
    }
}

export default ItemManager;
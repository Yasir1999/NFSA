import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemManager.css'
import ItemManagerContract from "../contracts/ItemManager.json";
import ItemContract from "../contracts/Item.json";
import getWeb3 from "../getWeb3";
import { Container, Button } from 'react-bootstrap'


class ItemPayment extends Component {
    state = { loaded:false, cost:0, toAddress:"0x00" };


    

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
          //this.listenToPaymentEvent();
          //this.handleSubmit();
          this.setState({ loaded:true });
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
    };

    /*listenToPaymentEvent = () => {
        let self = this;
        this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {
          console.log(evt);
          let itemObj = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
          //let itemObj3 = await self.ItemManagerContract.methods.items(evt.returnValues._itemAddress).call();
          let itemObj2 = await self.ItemManagerContract.methods.items(evt.returnValues._step).call();
          console.log(itemObj._step);
          console.log(self.ItemManagerContract.methods.items(evt.returnValues._step).call());
          if(itemObj._state === "2"){
            alert("Item " + itemObj._identifier + " was paid, deliver it now!");
            document.getElementById('outputItem').innerText = "";
            document.getElementById('outputCost').innerText = "";
            document.getElementById('outputAddress').innerText = "";
          }
        });
    }*/

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = async() => {
        const Web3 = require("web3");
        const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + 7545));
        const web3_utils = require('web3-utils');
        const accounts = await web3.eth.getAccounts();
        const { cost, toAddress } = this.state;
        console.log(toAddress, cost, this.ItemManagerContract);
        //let account = this.web3.eth.getAccounts();
        //let weiValue = web3_utils.fromWei(cost, "ether");
        //let payNow = await this.web3.eth.sendTransaction({from: account, to: toAddress, value: cost});0x740a9222503F6382694FD8E0f5e2916fCb394F5F
        /*console.log(weiValue);
        console.log(payNow);*/    
        //web3.eth.sendTransaction({from: accounts[0],to: toAddress, value: web3_utils.hexToNumberString(web3_utils.asciiToHex(web3_utils.fromWei(cost, 'ether')))})
        
        web3.eth.sendTransaction({from: accounts[0],to: toAddress, value: web3_utils.numberToHex(cost)})
    };


/*
    handleSubmit = async() => {
        const { cost, toAddress } = this.state;
        console.log(toAddress, cost, this.ItemManagerContract);
        alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._itemAddress);
        console.log(result.events.SupplyChainStep.returnValues._step);
        if (result.events.SupplyChainStep.returnValues._step !== 1){
          let awaitCost = cost;
          let awaitAddress = result.events.SupplyChainStep.returnValues._itemAddress;
          let awaitItem = toAddress;
          document.getElementById('outputItem').innerText = awaitItem;
          document.getElementById('outputCost').innerText = awaitCost;0xD567b8f9553057c62ae3134dC53b65ff9312227c
          document.getElementById('outputAddress').innerText = awaitAddress;
        } 
    };*/

    render() {
        return (
          <Container>
            <div className="App">
                <h2>Send Payment</h2>
                <br></br>
                <div className="row justify-content-center wrapper">
                  <div className="col-2">
                    <row>
                      <p>Amount to pay in Wei:</p>
                    </row>
                    <row>
                      <p>Address to send to:</p>
                    </row>
                  </div>
                  <div className="col-2">
                    <div className="row div-space">
                      <input type="text" name="cost" value={this.state.cost} onChange={this.handleInputChange} />
                    </div>
                    <div className="row div-space">
                        <input type="text" name="toAddress" value={this.state.toAddress} onChange={this.handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center wrapper">
                    <Button variant="dark" type="button" onClick={this.handleSubmit}>Submit Payment</Button>
                </div>
            </div>
        </Container>

    );
  }
}
  
export default ItemPayment;
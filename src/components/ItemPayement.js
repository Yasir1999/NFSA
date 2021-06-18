import React, { Component } from 'react';
import getWeb3 from "../getWeb3";
import Web3 from "web3";
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemManager.css'
import ItemManagerContract from "../contracts/ItemManager.json";

import ItemContract from "../contracts/Item.json";
import { Container, Button } from 'react-bootstrap';


class ItemPayment extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        loaded:false, 
        cost: "0", 
        toAddress: ""
      }
    }

    async componentWillMount() {
      await this.loadWeb3()
      await this.componentDidMount()
      this.setState({ loaded:true });
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


    componentDidMount = async () => {
      try {
        // Get network provider and web3 instance.
        this.web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        this.accounts = await this.web3.eth.getAccounts();
  
        // Get the contract instance.
        //this.networkId = await this.web3.eth.net.getId();
  
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.networkId = await this.web3.eth.net.getId();
        
        
        this.ItemManagerContract = new this.web3.eth.Contract(
            ItemManagerContract.abi,
            ItemManagerContract.networks[this.networkId] && ItemManagerContract.networks[this.networkId].address,
          );
    
          this.item = new this.web3.eth.Contract(
            ItemContract.abi,
            ItemContract.networks[this.networkId] && ItemContract.networks[this.networkId].address,
          );

        await this.listenToPaymentEvent();
        this.setState({ loaded:true });
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    };

    /* This paymentEvent will wait and listen until the item in the contract has moved further on in the chain */
    listenToPaymentEvent = async() => {
      let self = this;
      this.ItemManagerContract.events.SupplyChainStep().on("data", async function(evt) {      
        console.log(evt);
        let itemObj = await self.ItemManagerContract.methods.items(evt.returnValues._itemIndex).call();
        console.log(itemObj._step + evt.returnValues._step);
        console.log(self.ItemManagerContract.methods.items(evt.returnValues._step).call());
        if(evt.returnValues._step === "1"){
          alert("Item " + itemObj._identifier + " has been paid successfully");
        }
      });
    }

    /* Handles the input from the input boxes on the page */
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    // This function will submit the payment and convert the Wei to Ether and send the transaction to the desired payment address
    handleSubmit = async () => {
        const web3_utils = require('web3-utils');
        const nfsaAccount = 0x66489F88F94775bb1116D52A21B2E3d2905EbdAc;
        /* Cost being divided up as part of royalties */
        const b_cost = (this.state.cost * 70 / 100)
        console.log("b_cost: " + b_cost);
        const cost = web3_utils.fromWei(b_cost.toString(), 'ether');
        console.log("cost: " + cost);
        const toAdd = this.state.toAddress;
        const fromAdd = this.accounts[0];

        var tokens = web3_utils.toWei(b_cost.toString(), 'ether')
        var bntokens = web3_utils.toBN(tokens)
        console.log("tokens: " + tokens);
        console.log("bntokens: " + bntokens);

        window.web3.eth.sendTransaction({
          from: fromAdd,  
          to: toAdd,
          value: (bntokens / 1000000000000000000),
          gas: 90000});
    };

    // Gets the price details from the user input
    getPrice = (event) => {
      event.preventDefault()
      const sendValue = event.target.value;
      this.setState({ cost: sendValue })
      console.log("Price: " + this.state.cost);
    }

    // Gets the payment address from the user input
    getAddress = (event) => {
      event.preventDefault()
      const sendAdd = event.target.value;
      this.setState({ toAddress: sendAdd })
      console.log("Address: " + this.state.toAddress);
    }


    render() {
        return (
          <Container>
            <div className="App">
                <h2>Send Payment</h2>
                <br></br>
                <div className="row justify-content-center wrapper">
                  <div className="col">
                    <row>
                      <p>Amount to pay in Wei:</p>
                      <input type="text" name="cost" onChange={this.getPrice} />
                    </row>
                    <br></br>
                    <br></br>
                    <row>
                      <p>Address to send to:</p>
                      <input type="text" name="toAddress" onChange={this.getAddress} />
                    </row>
                  </div>
                </div>
                <br></br>
                <div className="row justify-content-center wrapper">
                    <Button variant="dark" type="button" onClick={this.handleSubmit}>Submit Payment</Button>
                </div>
            </div>
        </Container>

    );
  }
}
  
export default ItemPayment;
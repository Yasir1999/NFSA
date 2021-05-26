import React, { Component } from 'react';
import getWeb3 from "../getWeb3";
import Web3 from "web3";
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemManager.css'
import ItemManagerContract from "../contracts/ItemManager.json";
//import PaymentSplitter2 from "@openzeppelin/contracts/payment/PaymentSplitter.sol"
//import PaymentSplitter from "../contracts/PaymentSplitter.json";
import ItemContract from "../contracts/Item.json";
import { Container, Button } from 'react-bootstrap';
import SplitFunds from "../contracts/SplitFunds.json";
import fs from 'fs';

//let Web3 = require('web3');
/*let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));


let source = fs.readFileSync("../contracts/SplitFunds.json");
let contracts = JSON.parse(source)["contracts"];
let abi = JSON.parse(contracts.SplitFunds.abi);

let code = '0x' + contracts.SplitFunds.bin;

let SplitFunds = web3.eth.contract(abi);*/



class ItemPayment extends Component {
    //state = { loaded:false, cost: 0, toAddress: 0, account: null };

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
      //await this.loadBlockchainData()
      await this.componentDidMount()
      //await this.handleSubmit()
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

    
   /* componentDidMount = async () => {


      /*
      let fs = require("fs");
      let Web3 = require('web3');
      let web3 = new Web3();
      web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));

      let source = fs.readFileSync("../contracts/SplitFunds.json");
      let contracts = JSON.parse(source)["contracts"];
      let abi = JSON.parse(contracts.SplitFunds.abi);

      let code = '0x' + contracts.SplitFunds.bin;

      let SplitFunds = web3.eth.contract(abi);

      let contract = SplitFunds.new({from: web3.eth.coinbase, gas: 1000000, data: code});

    }*/
    

   

   


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
        
        /*
        this.ItemManagerContract = new this.web3.eth.Contract(
            ItemManagerContract.abi,
            ItemManagerContract.networks[this.networkId] && ItemManagerContract.networks[this.networkId].address,
          );
    
          this.item = new this.web3.eth.Contract(
            ItemContract.abi,
            ItemContract.networks[this.networkId] && ItemContract.networks[this.networkId].address,
          );*/
/*
          this.SplitFunds = new this.web3.eth.Contract(
            SplitFunds.abi,
            //SplitFunds.networks[this.networkId] && SplitFunds.networks[this.networkId].address,
          );*/

            //var SplitPayment = web3.eth.Contract(5260043610610075577c010000000000000000000000000000000000000000000000000000000060003504631916558781146100c15780633a98ef39146100e35780638b83209b1461010e5780639852595c1461013b578063ce7c2ac21461015b578063e33b7de31461017b576100bc565b366100bc577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7706100a3610190565b346040516100b2929190610549565b60405180910390a1005b600080fd5b3480156100cd57600080fd5b506100e16100dc366004610501565b610194565b005b3480156100ef57600080fd5b506100f861033a565b6040516101059190610703565b60405180910390f35b34801561011a57600080fd5b5061012e61012936600461051d565b610340565b6040516101059190610535565b34801561014757600080fd5b506100f8610156366004610501565b61036a565b34801561016757600080fd5b506100f8610176366004610501565b610385565b34801561018757600080fd5b506100f86103a0565b3390565b600160a060020a0381166000908152600260205260409020546101d55760405160e560020a62461bcd0281526004016101cc906105ec565b60405180910390fd5b6001546000906101ed9030319063ffffffff6103a616565b600160a060020a0383166000908152600360209081526040808320548354600290935290832054939450919261024b929161023f9161023390879063ffffffff6103d716565b9063ffffffff61041416565b9063ffffffff61045616565b90508061026d5760405160e560020a62461bcd0281526004016101cc90610649565b600160a060020a038316600090815260036020526040902054610296908263ffffffff6103a616565b600160a060020a0384166000908152600360205260409020556001546102c2908263ffffffff6103a616565b600155604051600160a060020a0384169082156108fc029083906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056838260405161032d929190610549565b60405180910390a1505050565b60005490565b60006004828154811061034f57fe5b600091825260209091200154600160a060020a031692915050565b600160a060020a031660009081526003602052604090205490565b600160a060020a031660009081526002602052604090205490565b60015490565b6000828201838110156103ce5760405160e560020a62461bcd0281526004016101cc906105b5565b90505b92915050565b6000826103e6575060006103d1565b828202828482816103f357fe5b04146103ce5760405160e560020a62461bcd0281526004016101cc906106a6565b60006103ce83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610498565b60006103ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506104d2565b600081836104bc5760405160e560020a62461bcd0281526004016101cc9190610562565b5060008385816104c857fe5b0495945050505050565b600081848411156104f95760405160e560020a62461bcd0281526004016101cc9190610562565b505050900390565b600060208284031215610512578081fd5b81356103ce8161070c565b60006020828403121561052e578081fd5b5035919050565b600160a060020a0391909116815260200190565b600160a060020a03929092168252602082015260400190565b6000602082528251806020840152815b8181101561058f5760208186018101516040868401015201610572565b818111156105a05782604083860101525b50601f01601f19169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526026908201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060408201527f7368617265730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060408201527f647565207061796d656e74000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b600160a060020a038116811461072157600080fd5b5056fea2646970667358221220549f91bc71f4a691a1899f2be98b73dc20d0fb459bbdc1fcf41594d8cc78d39364736f6c63430006010033);

        this.setState({ loaded:true });
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    };


    /*
    componentDidMount = async () => {    
        
        try {
          // Get network provider and web3 instance.
          this.web3 = await getWeb3();
    
          // Use web3 to get the user's accounts.
          this.accounts = await this.web3.eth.getAccounts();
          const uaccount = this.accounts;
          this.setState({account: uaccount[0]})
          const accounts = await this.web3.eth.getAccounts()
          this.setState({account: accounts[0]})
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
  */

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

    handleSubmit = async () => {
    //let fs = require('fs');
     
/*
      const nfsaAccount = 0x66489F88F94775bb1116D52A21B2E3d2905EbdAc;
      const web3_utils = require('web3-utils');
      const b_cost = (this.state.cost * 70 / 100)
      const cost = web3_utils.fromWei(b_cost.toString(), 'ether');
      const toAdd = this.state.toAddress;
      const fromAdd = this.state.account;

      let contract = SplitFunds({from: fromAdd, gas: 1000000, cost: cost, data: 0x608060405260043610610075577c010000000000000000000000000000000000000000000000000000000060003504631916558781146100c15780633a98ef39146100e35780638b83209b1461010e5780639852595c1461013b578063ce7c2ac21461015b578063e33b7de31461017b576100bc565b366100bc577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7706100a3610190565b346040516100b2929190610549565b60405180910390a1005b600080fd5b3480156100cd57600080fd5b506100e16100dc366004610501565b610194565b005b3480156100ef57600080fd5b506100f861033a565b6040516101059190610703565b60405180910390f35b34801561011a57600080fd5b5061012e61012936600461051d565b610340565b6040516101059190610535565b34801561014757600080fd5b506100f8610156366004610501565b61036a565b34801561016757600080fd5b506100f8610176366004610501565b610385565b34801561018757600080fd5b506100f86103a0565b3390565b600160a060020a0381166000908152600260205260409020546101d55760405160e560020a62461bcd0281526004016101cc906105ec565b60405180910390fd5b6001546000906101ed9030319063ffffffff6103a616565b600160a060020a0383166000908152600360209081526040808320548354600290935290832054939450919261024b929161023f9161023390879063ffffffff6103d716565b9063ffffffff61041416565b9063ffffffff61045616565b90508061026d5760405160e560020a62461bcd0281526004016101cc90610649565b600160a060020a038316600090815260036020526040902054610296908263ffffffff6103a616565b600160a060020a0384166000908152600360205260409020556001546102c2908263ffffffff6103a616565b600155604051600160a060020a0384169082156108fc029083906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056838260405161032d929190610549565b60405180910390a1505050565b60005490565b60006004828154811061034f57fe5b600091825260209091200154600160a060020a031692915050565b600160a060020a031660009081526003602052604090205490565b600160a060020a031660009081526002602052604090205490565b60015490565b6000828201838110156103ce5760405160e560020a62461bcd0281526004016101cc906105b5565b90505b92915050565b6000826103e6575060006103d1565b828202828482816103f357fe5b04146103ce5760405160e560020a62461bcd0281526004016101cc906106a6565b60006103ce83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610498565b60006103ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506104d2565b600081836104bc5760405160e560020a62461bcd0281526004016101cc9190610562565b5060008385816104c857fe5b0495945050505050565b600081848411156104f95760405160e560020a62461bcd0281526004016101cc9190610562565b505050900390565b600060208284031215610512578081fd5b81356103ce8161070c565b60006020828403121561052e578081fd5b5035919050565b600160a060020a0391909116815260200190565b600160a060020a03929092168252602082015260400190565b6000602082528251806020840152815b8181101561058f5760208186018101516040868401015201610572565b818111156105a05782604083860101525b50601f01601f19169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526026908201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060408201527f7368617265730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060408201527f647565207061796d656e74000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b600160a060020a038116811461072157600080fd5b5056fea2646970667358221220549f91bc71f4a691a1899f2be98b73dc20d0fb459bbdc1fcf41594d8cc78d39364736f6c63430006010033, arguments:[[toAdd,nfsaAccount],[7,3]]});
      
      contract.deploy();*/



    //handleSubmit = (event) => {
        //event.preventDefault()
        //const Web3 = require("web3");
        //const Web3 = getWeb3();
        //const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + 7545));
        // Get network provider and web3 instance.
        
        
        //this.web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        //this.accounts = await this.web3.eth.getAccounts();
  
        // Get the contract instance.
        //this.networkId = await this.web3.eth.net.getId();
  
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        //this.networkId = await this.web3.eth.net.getId();
        //this.web3 = await getWeb3();
        //const web3 = new Web3;
        //const accounts = await this.web3.eth.getAccounts();
        //const networkId = await this.web3.eth.net.getId();
        //const myContract = new this.web3.eth.Contract(
         // SplitFunds.abi,
          //SplitFunds.networks[networkId].address
       // );

        const web3_utils = require('web3-utils');
        //const accounts = await web3.eth.getAccounts();
        const nfsaAccount = 0x66489F88F94775bb1116D52A21B2E3d2905EbdAc;
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

        //const data = SplitFunds.abi;
        
       // const tx = myContract.deploy({data: data, 
       // arguments: [[toAdd,nfsaAccount],[7,3]]
      //  }).send({
      //    from: fromAdd, 
       //   cost: cost,
       //   gas: 300000,
       //   gasprice: 20
       // });
      //  const gas = await tx.estimateGas({from: fromAdd});
      //  const gasPrice = await this.web3.eth.getGasPrice();
        
      //  const nonce = await this.web3.eth.getTransactionCount(fromAdd);


      //console.log(tx);
/*
        const txData = {
          from: fromAdd,
          to: myContract.options.address,
          data,
          gas,
          gasPrice,
          nonce,
          chainId: networkId
        };

        console.log(`Old data: ${await myContract.methods.totalShares().call()}`);
        const receipt = await web3.eth.sendTransaction(txData);
        console.log(`Transaction hash: ${receipt.transactionHash}`);
        console.log.apply(`New data value: ${await myContract.methods.release()}`)
        *//*
        console.log("To address: " + toAdd, cost, window.web3.eth.sendTransaction({
          from: fromAdd,  
          to: toAdd,
          value: cost}));

          window.web3.eth.sendTransaction({
            from: fromAdd,  
            to: toAdd,
            value: cost});
/*
        SplitFunds.deploy({data: '0x608060405260043610610075577c010000000000000000000000000000000000000000000000000000000060003504631916558781146100c15780633a98ef39146100e35780638b83209b1461010e5780639852595c1461013b578063ce7c2ac21461015b578063e33b7de31461017b576100bc565b366100bc577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7706100a3610190565b346040516100b2929190610549565b60405180910390a1005b600080fd5b3480156100cd57600080fd5b506100e16100dc366004610501565b610194565b005b3480156100ef57600080fd5b506100f861033a565b6040516101059190610703565b60405180910390f35b34801561011a57600080fd5b5061012e61012936600461051d565b610340565b6040516101059190610535565b34801561014757600080fd5b506100f8610156366004610501565b61036a565b34801561016757600080fd5b506100f8610176366004610501565b610385565b34801561018757600080fd5b506100f86103a0565b3390565b600160a060020a0381166000908152600260205260409020546101d55760405160e560020a62461bcd0281526004016101cc906105ec565b60405180910390fd5b6001546000906101ed9030319063ffffffff6103a616565b600160a060020a0383166000908152600360209081526040808320548354600290935290832054939450919261024b929161023f9161023390879063ffffffff6103d716565b9063ffffffff61041416565b9063ffffffff61045616565b90508061026d5760405160e560020a62461bcd0281526004016101cc90610649565b600160a060020a038316600090815260036020526040902054610296908263ffffffff6103a616565b600160a060020a0384166000908152600360205260409020556001546102c2908263ffffffff6103a616565b600155604051600160a060020a0384169082156108fc029083906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056838260405161032d929190610549565b60405180910390a1505050565b60005490565b60006004828154811061034f57fe5b600091825260209091200154600160a060020a031692915050565b600160a060020a031660009081526003602052604090205490565b600160a060020a031660009081526002602052604090205490565b60015490565b6000828201838110156103ce5760405160e560020a62461bcd0281526004016101cc906105b5565b90505b92915050565b6000826103e6575060006103d1565b828202828482816103f357fe5b04146103ce5760405160e560020a62461bcd0281526004016101cc906106a6565b60006103ce83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610498565b60006103ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506104d2565b600081836104bc5760405160e560020a62461bcd0281526004016101cc9190610562565b5060008385816104c857fe5b0495945050505050565b600081848411156104f95760405160e560020a62461bcd0281526004016101cc9190610562565b505050900390565b600060208284031215610512578081fd5b81356103ce8161070c565b60006020828403121561052e578081fd5b5035919050565b600160a060020a0391909116815260200190565b600160a060020a03929092168252602082015260400190565b6000602082528251806020840152815b8181101561058f5760208186018101516040868401015201610572565b818111156105a05782604083860101525b50601f01601f19169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526026908201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060408201527f7368617265730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060408201527f647565207061796d656e74000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b600160a060020a038116811461072157600080fd5b5056fea2646970667358221220549f91bc71f4a691a1899f2be98b73dc20d0fb459bbdc1fcf41594d8cc78d39364736f6c63430006010033', 
        arguments: [[toAdd,nfsaAccount],[7,3]]
        }).send({
          from: this.accounts[0], 
          cost: cost,
          gas: 300000,
          gasprice: 20
        });
        SplitFunds.methods.release(toAdd).send();
        SplitFunds.methods.release(nfsaAccount).send();
        console.log(SplitFunds.methods.release(toAdd).send());
        console.log(SplitFunds.methods.release(nfsaAccount).send());
        //let account = this.web3.eth.getAccounts();
        //let weiValue = web3_utils.fromWei(cost, "ether");
        //let payNow = await this.web3.eth.sendTransaction({from: account, to: toAddress, value: cost});0x740a9222503F6382694FD8E0f5e2916fCb394F5F
        /*console.log(weiValue);
        console.log(payNow);*/    
        //web3.eth.sendTransaction({from: accounts[0],to: toAddress, value: web3_utils.hexToNumberString(web3_utils.asciiToHex(web3_utils.fromWei(cost, 'ether')))})
        /*
        //this.web3.eth.sendTransaction({from: this.accounts,to: toAdd, value: cost })
        //let web3js = new Web3(window.web3.currentProvider); 
        PaymentSplitter([nfsaAccount, toAdd],[3,7]).send({from: fromAdd, value:cost, gas:90000});
        //console.log(PaymentSplitter.constructor([nfsaAccount, toAdd],[3,7] ,{from: fromAdd, value:cost, gas:90000}).call() + " Payment Splitter");
        PaymentSplitter.release(nfsaAccount).call();
        //console.log(PaymentSplitter.release(nfsaAccount).call() + " relase to NFSA");
        PaymentSplitter.release(toAdd).call();
        //console.log(PaymentSplitter.release(toAdd).call() + " release to address");
        */

        /*
        this.window.web3.eth.sendTransaction({
          from: fromAdd,  
          to: toAdd,
          value: cost,
          gas: 90000,
          gasprice: 20
        });
        console.log(this.web3.eth.sendTransaction({
          from: fromAdd,  
          to: toAdd,
          value: cost ,}));*/
       /*try {
        this.web3 = await getWeb3();
        this.accounts = await this.web3.eth.getAccounts();
        this.networkId = await this.web3.eth.net.getId();
        this.SplitFunds = new this.web3.eth.Contract(
          SplitFunds.abi,
          //SplitFunds.networks[this.networkId] && SplitFunds.networks[this.networkId].address,
        );
        SplitFunds.deploy({data: '0x608060405260043610610075577c010000000000000000000000000000000000000000000000000000000060003504631916558781146100c15780633a98ef39146100e35780638b83209b1461010e5780639852595c1461013b578063ce7c2ac21461015b578063e33b7de31461017b576100bc565b366100bc577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7706100a3610190565b346040516100b2929190610549565b60405180910390a1005b600080fd5b3480156100cd57600080fd5b506100e16100dc366004610501565b610194565b005b3480156100ef57600080fd5b506100f861033a565b6040516101059190610703565b60405180910390f35b34801561011a57600080fd5b5061012e61012936600461051d565b610340565b6040516101059190610535565b34801561014757600080fd5b506100f8610156366004610501565b61036a565b34801561016757600080fd5b506100f8610176366004610501565b610385565b34801561018757600080fd5b506100f86103a0565b3390565b600160a060020a0381166000908152600260205260409020546101d55760405160e560020a62461bcd0281526004016101cc906105ec565b60405180910390fd5b6001546000906101ed9030319063ffffffff6103a616565b600160a060020a0383166000908152600360209081526040808320548354600290935290832054939450919261024b929161023f9161023390879063ffffffff6103d716565b9063ffffffff61041416565b9063ffffffff61045616565b90508061026d5760405160e560020a62461bcd0281526004016101cc90610649565b600160a060020a038316600090815260036020526040902054610296908263ffffffff6103a616565b600160a060020a0384166000908152600360205260409020556001546102c2908263ffffffff6103a616565b600155604051600160a060020a0384169082156108fc029083906000818181858888f193505050501580156102fb573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056838260405161032d929190610549565b60405180910390a1505050565b60005490565b60006004828154811061034f57fe5b600091825260209091200154600160a060020a031692915050565b600160a060020a031660009081526003602052604090205490565b600160a060020a031660009081526002602052604090205490565b60015490565b6000828201838110156103ce5760405160e560020a62461bcd0281526004016101cc906105b5565b90505b92915050565b6000826103e6575060006103d1565b828202828482816103f357fe5b04146103ce5760405160e560020a62461bcd0281526004016101cc906106a6565b60006103ce83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610498565b60006103ce83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506104d2565b600081836104bc5760405160e560020a62461bcd0281526004016101cc9190610562565b5060008385816104c857fe5b0495945050505050565b600081848411156104f95760405160e560020a62461bcd0281526004016101cc9190610562565b505050900390565b600060208284031215610512578081fd5b81356103ce8161070c565b60006020828403121561052e578081fd5b5035919050565b600160a060020a0391909116815260200190565b600160a060020a03929092168252602082015260400190565b6000602082528251806020840152815b8181101561058f5760208186018101516040868401015201610572565b818111156105a05782604083860101525b50601f01601f19169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526026908201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060408201527f7368617265730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060408201527f647565207061796d656e74000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b90815260200190565b600160a060020a038116811461072157600080fd5b5056fea2646970667358221220549f91bc71f4a691a1899f2be98b73dc20d0fb459bbdc1fcf41594d8cc78d39364736f6c63430006010033', 
        arguments: [[toAdd,nfsaAccount],[7,3]]
        }).send({
          from: this.accounts[0], 
          cost: cost,
          gas: 300000,
          gasprice: 20
        });
        SplitFunds.methods.release(toAdd).send();
        SplitFunds.methods.release(nfsaAccount).send();
        console.log(SplitFunds.methods.release(toAdd).send());
        console.log(SplitFunds.methods.release(nfsaAccount).send());
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Line 207.`,
        );
        console.error(error);
      }*/
    };

        
        //this.SplitFunds.new([toAdd,fromAdd],[7,3]).send({from: this.accounts[0], cost: cost});
        //console.log(this.SplitFunds.new([toAdd,fromAdd],[7,3]).send({from: this.accounts[0], cost: cost}));
        

        /*
       this.web3.eth.sendTransaction({
          from: fromAdd,  
          to: toAdd,
          value: cost , 
       })*/
       /*
        this.web3.sendTransaction({
            from: fromAdd,  
            to: toAdd,
            value: web3_utils.fromWei(cost * 70 / 100) , 
        })   */
  

    getPrice = (event) => {
      event.preventDefault()
      const sendValue = event.target.value;
      this.setState({ cost: sendValue })
      console.log("Price: " + this.state.cost);
    }

    getAddress = (event) => {
      event.preventDefault()
      const sendAdd = event.target.value;
      this.setState({ toAddress: sendAdd })
      console.log("Address: " + this.state.toAddress);
    }


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
                  <form onSubmit={this.handleSubmit}>
                  <div className="col-2">
                    <div className="row div-space">
                      <input type="text" name="cost" onChange={this.getPrice} />
                    </div>
                    <div className="row div-space">
                        <input type="text" name="toAddress" onChange={this.getAddress} />
                    </div>
                    <input type='submit' id='btn'/>
                  </div>
                  </form>
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
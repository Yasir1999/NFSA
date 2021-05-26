//var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var ItemManager = artifacts.require("./ItemManager.sol")
var Image = artifacts.require("./Image.sol")
var Counter = artifacts.require("./Counter.sol")
//const Payment = artifacts.require("./payment/PaymentSplitter.sol")

module.exports = function(deployer) {
  deployer.deploy(ItemManager);
  deployer.deploy(Image);
  deployer.deploy(Counter);
  //deployer.deploy(Payment);
};

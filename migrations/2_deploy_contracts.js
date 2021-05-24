//var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var ItemManager = artifacts.require("./ItemManager.sol")
var Image = artifacts.require("./Image.sol")
var PaymentSplitter = artifacts.require("./payment/PaymentSplitter.sol")

module.exports = function(deployer) {
  deployer.deploy(ItemManager);
  deployer.deploy(Image);
  deployer.deploy(PaymentSplitter);
};

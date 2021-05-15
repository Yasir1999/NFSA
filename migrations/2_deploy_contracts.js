//var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var ItemManager = artifacts.require("./ItemManager.sol")
var Image = artifacts.require("./Image.sol")

module.exports = function(deployer) {
  deployer.deploy(ItemManager);
  deployer.deploy(Image);
};

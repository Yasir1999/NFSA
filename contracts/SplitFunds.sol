pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/payment/PaymentSplitter.sol";

contract SplitFunds is PaymentSplitter {
    constructor (address[] memory payees, uint256[] memory shares)
    PaymentSplitter(payees, shares)
    public payable{}
}
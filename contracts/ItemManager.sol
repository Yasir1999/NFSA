pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/payment/PaymentSplitter.sol";
import "./Ownable.sol";
import "./Item.sol";

contract ItemManager is Ownable {
    
    enum SupplyChainState{Created, Paid, Delivered}
    
    struct S_Item {
        Item _item;
        address payable NFSA2;
        string _identifier;
        uint _itemPrice;
        ItemManager.SupplyChainState _state;
    }
    
    mapping(uint => S_Item) public items;
    uint itemIndex;
    uint256 fee = 70;

    address payable NFSA = 0x66489F88F94775bb1116D52A21B2E3d2905EbdAc;

    event SupplyChainStep(uint _itemIndex, uint _step, address _itemAddress);
    
    function createItem(string memory _identifier, uint _itemPrice) public onlyOwner {
        uint256 _updatedPrice = (_itemPrice * fee / 100);
        Item item = new Item(this, _updatedPrice, itemIndex);
        items[itemIndex]._item = item;
        //items[itemIndex].NFSA2 = NFSA;
        items[itemIndex]._identifier = _identifier;
        items[itemIndex]._itemPrice = _updatedPrice;
        items[itemIndex]._state = SupplyChainState.Created;
        emit SupplyChainStep(itemIndex, uint(items[itemIndex]._state), address(item));
        itemIndex++;
    }
    
    function triggerPayment(uint _itemIndex) public payable {
        require(items[_itemIndex]._itemPrice == msg.value, "Only full payments accepted");
        require(items[_itemIndex]._state == SupplyChainState.Created, "Item is further in the chain");
        items[_itemIndex]._state = SupplyChainState.Paid;
        emit SupplyChainStep(itemIndex, uint(items[_itemIndex]._state), address(items[_itemIndex]._item));
    }
    
    function triggerDelivery(uint _itemIndex) public onlyOwner {
        require(items[_itemIndex]._state == SupplyChainState.Paid, "Item is further in the chain");
        items[_itemIndex]._state = SupplyChainState.Delivered;
        emit SupplyChainStep(itemIndex, uint(items[_itemIndex]._state), address(items[_itemIndex]._item));
    }

    function getItems() public view returns(uint total){
        return itemIndex;
    }

    function returnMapValue(uint _key) public view returns(S_Item memory) {
        return items[_key];
    }

    function getValueAtMapping(uint _key)  public  view  returns(string memory, uint, Item) {
      return (items[_key]._identifier, items[_key]._itemPrice, items[_key]._item);
    }
}
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Image {
    string imgHash;

    uint public numHashes;
    string [] public ImageHashes;

    function setHash(string memory _imgHash) public {
        ImageHashes.push(_imgHash);
        numHashes = ImageHashes.length;
    }

    function getHash() public view returns(string[] memory){
        return ImageHashes;
    }

    function set(string memory _imgHash) public {
        imgHash =  _imgHash;
    }

    function get() public view returns(string memory){
        return imgHash;
    }
}




/*
pragma solidity ^0.6.0;

contract Image {
    string ipfsHash;

    function set(string memory x) public {
        ipfsHash = x;
    }

    function get() public view returns (string memory) {
        return ipfsHash;
    }
}

*/
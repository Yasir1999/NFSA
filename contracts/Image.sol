pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Image {
    string imgHash;

    /*uint public numHashes;
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
    }*/
    uint public numHashes;
    string [] public ImageHashes;
    string [] public ImageName;

    function setHash(string memory _imgHash) public {
        ImageHashes.push(_imgHash);
        numHashes = ImageHashes.length;
    }
    
    function setName(string memory _imgName) public {
        ImageName.push(_imgName);
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
    
    function setImgHash(string memory _imgHash, string memory _imgName) public {
        ImageHashes.push(_imgHash);
        ImageName.push(_imgName);
        numHashes = ImageHashes.length;
    }

    function getImgHash(uint _index) public view returns(string memory, string memory) {
        return (ImageName[_index], ImageHashes[_index]); 
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
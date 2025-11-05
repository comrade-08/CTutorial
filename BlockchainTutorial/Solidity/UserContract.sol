// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;

contract UserContract {
    string public name;
    uint public age;

    function setUserInfo(string memory _name, uint _age) public {
        name = _name;
        age = _age;
    }

    function getUserInfo() public view returns (string memory, uint) {
        return (name, age);
    }
}
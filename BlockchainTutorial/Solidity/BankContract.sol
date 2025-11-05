// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Sample {
    string private name;
    address private e_addr;
    int private balance;

    constructor() {
        name = "Jeeva";
        e_addr = msg.sender;
    }

    modifier OnlyOwner() {
        require(e_addr == msg.sender, "UnAuthorized");
        _;
    }

    function deposit(int _amount) public OnlyOwner {
       require(_amount > 0, "Amount must be positive!");
       balance = balance + _amount;
    }

    function withdraw(int _amount) public OnlyOwner {
        require(_amount > 0, "Amount must be positive!");
        if (_amount > balance) {
            revert("Insufficient balance!");
        }
        balance = balance - _amount;
    }

    function showBalance() public view OnlyOwner returns(int) {
        return balance;
    }
}
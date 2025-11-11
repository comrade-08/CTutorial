// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Token {
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    uint256 public totalSupply = 1000000;

    mapping(address => uint256) public balances;

    address public owner;

    event Transfer(address indexed from, address indexed to, uint256 value);


    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;

        console.log(
            "Transferring %s tokens from %s to %s",
            amount,
            msg.sender,
            to
        );

        emit Transfer(msg.sender, to, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
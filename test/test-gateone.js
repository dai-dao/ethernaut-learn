const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");



describe("Unlock", function () {
  it("Unlock", async function () {
    const [owner] = await ethers.getSigners();

    const HackGateOne = await ethers.getContractFactory("HackGateOne");
    const hackgateone = await HackGateOne.attach("0x523E8FD937c2Ba61D3D4fd1683c0276Ec63955E4");

    // 1940 gas spent between gate one and gate two
    // some gas spent to call external contract

    console.log(owner.address)

    const res16add = await hackgateone.get16add(owner.address)
    console.log(res16add)

    

    // const key = ethers.utils.formatBytes32String("key");
    // await hackgateone.hack(key);


  }
)});

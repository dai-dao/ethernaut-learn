const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Delegate pawn", function () {
  it("Delegate", async function () {
    const [owner] = await ethers.getSigners();

    const HackShop = await ethers.getContractFactory("HackShop");
    const hackforce = await HackShop.attach("0xB84461014B23F79C2a92bf5Fc511870F7aC7E554");

    await hackforce.hack()
  }
)});

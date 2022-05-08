// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// const address = "0x743eC1c4620c58715e1F7e5A47E72E1aa1b0D5A4";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.attach(address);
//     // const greeter = await Greeter.deploy("Hello, world!");
//     // await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, Hardhat!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

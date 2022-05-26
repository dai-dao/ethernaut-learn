// const { expect } = require("chai");
// const { ethers } = require("hardhat");


// describe("Delegate pawn", function () {
//   it("Delegate", async function () {
//     const [owner] = await ethers.getSigners();

//     const HackForce = await ethers.getContractFactory("HackForce");
//     const hackforce = await HackForce.attach("0x9d198702870fA4287FBc9c08eB1fc8bF89deFe45");

//     // this does not trigger receive payable
//     // const tx = await owner.sendTransaction({
//     //     to: "0x0d79AeE29CD0DD85b4bEE2Fa70DD41ceaa11E9A6",
//     //     value: ethers.utils.parseEther("0.0011"), 
//         // gasPrice: 2100000,
//         // gasLimit : 8000000
//     // });

//     // const tx = await hackforce.sendTransaction( 
//     // {
//     //     value : ethers.utils.parseEther("0.0013")
//     // })
//     // const res = await tx.wait()
//     // console.log(res)

//     await hackforce.become_king( 
//     {
//         value: ethers.utils.parseEther("0.0011")
//     });
//   }
// )});

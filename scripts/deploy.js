const hre = require("hardhat");
const { ethers } = require("hardhat");


async function main() {
  // const GateKeeperTwo = await hre.ethers.getContractFactory("GateKeeperTwo");
  // const gatekeepertwo = await GateKeeperTwo.deploy();
  // await gatekeepertwo.deployed();
  // console.log("GateKeeperTwo deployed to:", gatekeepertwo.address);

  // const HackGateTwo = await hre.ethers.getContractFactory("HackGateTwo");
  // const hackgatetwo = await HackGateTwo.deploy("0x7cD1E2d875ff249265D2DC61523e5dF3A8B9671D");
  // await hackgatetwo.deployed();
  // console.log("HackGateTwo deployed to:", hackgatetwo.address);

  const data = [
    ethers.utils.formatBytes32String("dai1111111111111111111111111111"),
    ethers.utils.formatBytes32String("dai2222222222222222222222222222"),
    ethers.utils.formatBytes32String("dai3333333333333333333333333333")
  ]
  console.log(data)

  // const HackGateTwo = await hre.ethers.getContractFactory("Solver");
  // const hackgatetwo = await HackGateTwo.deploy();
  // await hackgatetwo.deployed();
  // console.log("HackPreservation deployed to:", hackgatetwo.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

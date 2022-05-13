const hre = require("hardhat");
const { ethers } = require("hardhat");


async function main() {
  const GateKeeperOne = await hre.ethers.getContractFactory("GateKeeperOne");
  const gatekeeperone = await GateKeeperOne.deploy();
  await gatekeeperone.deployed();
  console.log("GateKeeperOne deployed to:", gatekeeperone.address);

  const HackGateOne = await hre.ethers.getContractFactory("HackGateOne");
  const hackgateone = await HackGateOne.deploy(gatekeeperone.address);
  await hackgateone.deployed();
  console.log("HackGateOne deployed to:", hackgateone.address);

  // const data = [
  //   ethers.utils.formatBytes32String("dai1111111111111111111111111111"),
  //   ethers.utils.formatBytes32String("dai2222222222222222222222222222"),
  //   ethers.utils.formatBytes32String("dai3333333333333333333333333333")
  // ]


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

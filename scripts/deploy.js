const hre = require("hardhat");
const { ethers } = require("hardhat");


async function main() {
  const CoinFlip = await hre.ethers.getContractFactory("HackGateOne");

  // const data = [
  //   ethers.utils.formatBytes32String("dai1111111111111111111111111111"),
  //   ethers.utils.formatBytes32String("dai2222222222222222222222222222"),
  //   ethers.utils.formatBytes32String("dai3333333333333333333333333333")
  // ]

  const coinflip = await CoinFlip.deploy();

  await coinflip.deployed();

  console.log("GateKeeperOne deployed to:", coinflip.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

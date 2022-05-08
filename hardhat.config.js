require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const ROPSTEN_PRIVATE_KEY = "0x69df34603d8b33bb6442c8ab8784e048eb76e8eb5881849966e1fe70ea17bf58";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.0",

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/edc296453d9a463083ec5a7979963fbe`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000
    }
  }
};

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 * @notice set compile file to in src directory
 * @notice using local hardhat network or testnet
 */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
    // ropsten: {
    //   url: process.env.INFURA_URL,
    //   accounts: [`0x${process.env.ACCOUNT_KEY}`]
    // },
};

const hre = require("hardhat");

// Defining the main function
async function main() {

  // Passing in the Greeter contract using ether's getConrtactFactory method
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  // Set the string argument for the contructor function in the contract using ether's deploy method
  const greeter = await Greeter.deploy("Have a Nice Day!");
  // Deploying the contract
  await greeter.deployed();

  // Logging the address of the deployed contract using the address method
  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// Invoking the main function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

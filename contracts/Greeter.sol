//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

/// @dev Allows for console.log in Solidity
import "hardhat/console.sol";

/// @notice Create a contract and initialize a state variable
contract Greeter {
    string greeting;

    /// @dev Get the state variable and pass in as argument when contract is first called
    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    /// @dev Returns state vaiable getting, can only view and allows external access
    function greet() public view returns (string memory) {
        return greeting;
    }

    /// @dev Allows external access to change the greeting variable
    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}

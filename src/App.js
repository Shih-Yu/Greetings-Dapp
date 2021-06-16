import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import './App.css';

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  // Setting initial state
  const [greeting, setMessage] = useState("");

  // Connect to Metamask wallet
  async function requestAccount() {
    // Request account from Metamask wallet and prompt user to connect if not connect
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  // Get message from contract
  async function getMessage() {
    // Check Metamask extension is open in window object
    if (typeof window.ethereum !== "undefined") {
      // Create new instance of provider using ethers.js
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Creating a new instance of contract passing contract address (contractAddress),contract ABI (Greeter.abi) and the provider (provider)
      const contract = new ethers.Contract(contractAddress, Greeter.abi, provider);
      try {
        // Get value of greet() function from the contract
        // Initial value -> "Have A Nice Day!", what the contructor is set to
        const data = await contract.greet();
        console.log("Data: ", data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Setting the message
  async function setNewMessage() {
    // Check message exists in input box
    if (!greeting) return;
    // Check Metamask extension is open in window object
    if (typeof window.ethereum !== "undefined") {
      // Getting account information from Metamask
      await requestAccount();
      // Get new instance of provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Get signer confirmation from transaction
      const signer = provider.getSigner();
      // Creating a new instance of contract passing contract address (contractAddress),contract ABI (Greeter.abi) and the signer (signer)
      const contract = new ethers.Contract(contractAddress, Greeter.abi, signer);
      // Pass in value of setGreeting() function in smart contract from form as update state variable in smart contract
      const transaction = await contract.setGreeting(greeting);
       // Clear input box after sending message by updating state
       setMessage("");
      // Wait for transaction to be confirmed on blockchain using wait() method
      await transaction.wait();
      // Get update message by calling the function
      getMessage();
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>{ greeting }</h1>
        <input
          onChange={ (e) => setMessage(e.target.value) }
          value={greeting}
          placeholder="Enter Your Message"
        />
        <button onClick={getMessage}>Get Message</button>
        <button onClick={setNewMessage}>Send Message</button>
      </header>
    </div>
  );
}

export default App;

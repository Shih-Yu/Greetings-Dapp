# Greetings - Dapp

This is a project to learn about writing a simple smart contract using [Solidity](https://docs.soliditylang.org/en/latest/) and using [Hardhat's](https://hardhat.org/) sample project template, deploying it on local and testnet as well as  testing with it

## Table of contents

* [Technologies](#technologies)

* [Setup](#setup)

* [Instructions](#instructions)

## Technologies

* [Solidity](https://docs.soliditylang.org/en/latest/)

* [React](https://reactjs.org/)

* [Hardhat](https://hardhat.org/)

* [Ethers](https://docs.ethers.io/v5/)

* [Hardhat-Waffle](https://hardhat.org/plugins/nomiclabs-hardhat-waffle.html)

* [Hardhat-ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html)

* [Chai](https://www.chaijs.com/)

* [dotenv](https://www.npmjs.com/package/dotenv)


## Setup

1. Create a directory

2. `cd` into that directory and run `npx create-react-app [project name]`

3. Install project dependencies

```sh
$ npm i -D hardhat ethers chai dotenv @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle
```

4. Create a hardhat project by running

```sh
 $ npx hardhat
```

 5. Select ```> Create simple project``` option

 ## Instructions

### Config

* Go to `hardhat.config.js` 

* Updade Solidity to proper version

* Set artifacts path in `src` when project is compiled

```js
paths: {
    artifacts: "./src/artifacts",
  },
```

* Configure local network for local testing

```js
networks: {
    hardhat: {
      chainId: 1337,
    },
```

* Create `.env` file in root directory and add `dotenv` dependency in config file


### Compile Contract

```sh
npx hardhat compile
```

### Deploy (localhost)

* Generate hardhat local testing enviroment

```sh
npx hardhat node

npx hardhat run scripts/deploy.js --network localhost
```

### Deploy (testnet)

* Generate hardhat local testing enviroment

```sh
npx hardhat node

npx hardhat run scripts/deploy.js --network [testnet name]
```

### Connect Metamask

* Import local testing accounts to metamask using private key or get currency from testnet facuet and connect to testnet

### React

* Connect to react

```sh npm start```
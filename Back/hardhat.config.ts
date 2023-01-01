import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import "dotenv/config";
import "hardhat-deploy";
import "solidity-coverage";

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "";
const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEYS = PRIVATE_KEY ? [PRIVATE_KEY] : [];
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "QP-RQmL6_bJIhUsPvwjHhAiWSkxoM7Jv";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "c0c7d76bd612020ce42fa2fee4ed84cb863b7e472b2567e41ed6cab463fd841b";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: MNEMONIC ? { mnemonic: MNEMONIC } : PRIVATE_KEYS,
      saveDeployments: true,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer.
    },
    feeCollector: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
};

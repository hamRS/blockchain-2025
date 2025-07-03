import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: "ipfs" }
    }
  },
  networks: {
    ephemery: {
      url: process.env.EPHEMERY_RPC || "https://rpc.ephemery.dev",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      timeout: 120_000,
      gas: "auto",
      gasPrice: "auto"
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC || "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      timeout: 120_000
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ""
  }
};

export default config;

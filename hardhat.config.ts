import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/idM4xOknFyTV_OX2mVt93WJN0Gk5GBdv",
      accounts: [
        `0xeb8a2bf168105cb5b95a848b37fe3455f835dcd76bf2eaebb2d9f85f9ee0c67e`,
      ],
    },
  },
  etherscan: {
    apiKey: "YD7PAXR5TGQCVBSEMJRQ7S66Z9CGUR3KT1",
  },
};

export default config;

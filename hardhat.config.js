require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia:{
      url:"https://late-delicate-daylight.ethereum-sepolia.quiknode.pro/860bd528f73dab58990bdf83b622f334019ac18c/",
      accounts:["2c307920209d1676b232db8d345a92fece10d30ea7a729a3a893b91ed10ba50c"],
    },
  }
};

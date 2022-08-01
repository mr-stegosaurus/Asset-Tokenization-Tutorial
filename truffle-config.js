const path = require("path");
require('dotenv').config({path: './.env'})
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "192.168.146.216",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/61d08e6e62714429bd619aab5061a7e2", MetaMaskAccountIndex)
      },
      network_id: 3
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};

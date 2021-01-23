require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note shift promote give produce bottom gesture'; 
let testAccounts = [
"0xaa98d374086c0536d546c92c0eec395817a621ab1df7904067adf85e3e90f79e",
"0xa29fdc3009ccc95fe26d1a065f90d253ee336bdbf7b94138d376b3b9a641e113",
"0xdd0b67d64cfd59b58d2a4949b492b78c44412f173085727956580c397b512fd7",
"0x54df0389dffefcd27deab8fa30046d645d6dda86e2bfe477a97ae5608f325126",
"0x0aae61fbe8e20e517db0b5a6c4cdf60472dbc7f3f5de7b54613ee48cc0bb5e91",
"0x0620dc8e7a576ed83f293e1b238cdb00aef5e040d5106857a82a0cada5422854",
"0x6cb990486c68ba493bb63a28275123fe6eaa6ce19711185d86b8e1b431f1905f",
"0x4897741d78e0db4d9d229f8c7573a5c6339e5cae8b04c82f78d106fdcf4f5bec",
"0x29289b4104549bda1cc5e786c93e5b9e4f18008a7a416b7cd143427f6cc93c54",
"0x6ef9aaa95a2aff34a622b29cd90ea30cf4ea979df69acccd005a0ab877fa3ed4"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

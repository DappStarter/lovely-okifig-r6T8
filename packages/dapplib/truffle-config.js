require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name response pumpkin coast harvest define army gasp'; 
let testAccounts = [
"0x55095921259e2f8609c84496e5256456014f3e7439a860d76e88e63a3c7cd271",
"0x144601ecd987188b4bf344c71841d619ceb0ea33a4bab682a2455f79f1630e71",
"0x2451f574e5e25c20762f7e070aee7fcd33e1fa469eb41cf156e3a6b74487a24f",
"0x3e15559d7a2e6fa230f1662276f18398411e8cdc701a52a80d01dc91520ca4a3",
"0xb3b242782a9f956bc0a3f30c8f065b2dff39e300daf2793c541dffcae27612f5",
"0x85ffa186e5fa6107a556dbacdabaee39ffcd73aeec2d4c77889066aeb8989aed",
"0x955acb2e9e491ee33d671c9070b73b50de248d93a83b97408144c34b5bcf55b4",
"0xa8539c3b439196eadf4cffd56582d741e9d75e7205ace986ed80e6bd68b09422",
"0xa77f80fc367b50c2b55c5c3e2120a2b1005e82942d47a68c7d8d3f2fccf11a59",
"0x4d654e47935cf321df05beaeeead94e45bf3dfd4c9a428699b6a460486b877e8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



# 🧪 Create IPFS 🧪

Create an Interplanetary File System storage object, which can be used to launch your own token. Store an image, description and more metadata.

---

## Prerequisites

- Get your free API key from https://pumpvial.com

---

## Install Dependencies

`npm i axios`

---

## Request

##### [required] [string]

`image`: Base64-encoded Data URL.

##### [required] [string]

`name`: Name of the token.

##### [required] [string]

`symbol`: Symbol of the token.

##### [required] [string]

`description`: Token description.

##### [optional] [string]

`twitter`: Twitter URL associated with the token.

##### [optional] [string]

`telegram`: Telegram URL associated with the token.

##### [optional] [string]

`website`: Website URL associated with the token.

---

## Response

`object: metadata`: Object containing metadata.
`string: createdOn`: Source of token creation.  
`string: description`: Token description.
`string: image`: IPFS image URL.
`string: uri`: IPFS metadata URI.
`string: name`: Token name.
`boolean: showName`: Indicating whether name is shown.
`string: symbol`: Token symbol.
`string: telegram`: Token associated Telegram URL.
`string: twitter`: Token associated Twitter URL.
`string: website`: Token associated website URL.

---

Need help? Hop in our Discord: https://discord.gg/WBmZss3jQq  
Official Docs: https://pumpvial.com/https/fund-wallets

---

**Tags:** solana, solana-wallet, solana-wallet-funding, solana-tokens, solana-sdk, solana-web3, solana-transactions, solana-api, pumpfun, pumpvial, crypto-wallet, crypto-funding, blockchain, blockchain-wallet, crypto, cryptocurrency, defi, decentralized-finance, solana-developer, solana-devtools, solana-nft, solana-program, solana-sdk-js, solana-dapp, solana-smart-contracts, solana-bots, solana-automation, solana-trading, solana-token-transfer, solana-sol, web3, web3js, crypto-development, crypto-api, solana-tools, solana-sol-transfer, solana-multisig, solana-transaction-builder, solana-wallet-security, solana-payer, solana-base64, bs58, solana-sdk-tools, solana-transaction-signing, solana-pumpfun, solana-funding-tool

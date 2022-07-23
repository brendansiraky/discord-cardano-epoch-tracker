# discord-cardano-epoch-tracker

A discord bot that displays the current cardano epoch, as well as a live countdown untill the next epoch.

## Requirements

Node v16.6.0 or higher
## Installation

```bash
cp .env.example .env
```

```bash
npm install -g typescript ts-node
```

```bash
npm install
```

## Instructions

1. Create a Bot through the discord developer portal, give it relevant permissions and invite it to your discord server.

2. Create a blockfrost mainnet API_KEY.

#### Add to the .env File:

- The TOKEN for the discord bot.

- The API_KEY from the blockfrost project.

## Running

```bash
npm run start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
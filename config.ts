import dotenv from 'dotenv'

dotenv.config()

export const config = {
    TOKEN: process.env.TOKEN,
    BLOCKFROST_API_KEY_MAINNET: process.env.BLOCKFROST_API_KEY_MAINNET,
}
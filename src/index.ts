import DiscordJs from 'discord.js'
import Cron from 'cron'

import { getEpochInfo } from '../utility/getEpochInfo'
import { config } from '../config'

export const client = new DiscordJs.Client({
    intents: []
})

client.on('ready', async () => {
    console.log('Epoch Tracker Bot Connected!')

    // Run every 60 seconds
    new Cron.CronJob(
        '*/60 * * * * *',
        async function () {
            const epochInfo = await getEpochInfo()
            if (epochInfo) {
                const { days, hours, minutes } = epochInfo
                client.user?.setPresence({ activities: [{ name: `- ${days}d ${hours}h ${Number(minutes).toFixed()}m`, type: 'WATCHING' }], status: 'online' })
            }
        },
        null,
        true,
    )
 
    // Set the username every 60 minutes
    new Cron.CronJob(
        '*/60 * * * *',
        async function () {
            const epochInfo = await getEpochInfo()
            if (epochInfo?.epoch) {
                client.user?.setUsername(`Epoch - ${epochInfo.epoch}`)
            }
        },
        null,
        true,
    )
})

client.login(config.TOKEN)
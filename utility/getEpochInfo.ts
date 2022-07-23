import { DateTime } from 'luxon'
import { BlockFrostAPI } from '@blockfrost/blockfrost-js'

import { config } from '../config'

const API = new BlockFrostAPI({
    projectId: config.BLOCKFROST_API_KEY_MAINNET || '',
})

export const getEpochInfo = async () => {
    try {
        // Fetch the latest epoch.
        const latestEpoch = await API.epochsLatest()
        const endTimeInUnix = latestEpoch.end_time
        const epoch = latestEpoch.epoch

        // Convert the end time
        const end = DateTime.fromISO(DateTime.fromSeconds(endTimeInUnix).toUTC().toString())

        // Get the difference
        const timeUntillEnd = end.diffNow(['days', 'hours', 'minutes'])

        return {
            ...timeUntillEnd.toObject(),
            epoch
        }
    } catch (error) {
        console.log(error)
    }
}
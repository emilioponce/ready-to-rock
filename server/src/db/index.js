import fs from 'fs'
import logger from '../utils/logger'
import { PATH_TO_BANDS, ENCODING } from '../constants'

export const getBands = () => {
  try {
    const jsonFile = JSON.parse(fs.readFileSync(PATH_TO_BANDS, ENCODING))
    return jsonFile.bands
  } catch (error) {
    logger.error(`Error accessing to bands json file: ${PATH_TO_BANDS}`)
  }
}

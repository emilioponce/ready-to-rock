import { transports, createLogger, format } from 'winston'

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.Console()
  ]
})

export default logger

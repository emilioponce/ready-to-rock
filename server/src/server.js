import app from './app'
import http from 'http'
import { HOSTNAME, PORT } from './constants'

const server = http.createServer(app)

server.listen(PORT, HOSTNAME, () => {
  console.log(`Listening on http://${HOSTNAME}:${PORT}/`)
})

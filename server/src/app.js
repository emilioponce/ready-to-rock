import express from 'express'
import requestLogger from 'morgan'
import cors from 'cors'
import api from './api'

const app = express()

// enabling cors
app.use(cors())

// log http get requests to the console
app.use(requestLogger('dev'))

// routes
app.use('/', api)

export default app

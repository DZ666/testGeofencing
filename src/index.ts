import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import geofencesRouter from './routes/geofences'

const initServer = () => {
  config()
  const app = express(),
    { MONGODB_URL, PORT = 3000 } = process.env

  const connect = () =>
    MONGODB_URL !== undefined &&
    mongoose.connect(MONGODB_URL).then(() => {
      console.log('Connected to mongodb geofencing')
    })

  connect()

  app.use(cors())
  app.use(bodyParser.json())
  app.use('/geofences', geofencesRouter)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

initServer()

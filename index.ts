import express from 'express'
import dbConnect from './startup/dbConnect'
import 'dotenv/config'
import cors from 'cors'
import setupRouters from './startup/setupRouters'

dbConnect()

const app = express()

app.use(cors())
app.use(express.json())

dbConnect()
setupRouters(app)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

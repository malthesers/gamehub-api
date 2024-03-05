import express from 'express'
import Platform, { IPlatform } from '../models/platform'

const platformRouter = express.Router()

interface Response {
  count: number
  results: IPlatform[]
}

platformRouter.get('/', async (req, res) => {
  try {
    const platforms = await Platform.find({})

    const response: Response = {
      count: platforms.length,
      results: [...platforms],
    }

    res.send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

platformRouter.get('/:id', async (req, res) => {
  try {
    const platform = Platform.findById(req.params.id)

    if (!platform) {
      return res.status(404).send()
    }

    res.send(platform)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default platformRouter

import express from 'express'
import Platform, { IPlatform } from '../models/platform'

const router = express.Router()

interface Response {
  count: number
  results: IPlatform[]
}

router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
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

import express from 'express'
import Genre, { IGenre } from '../models/genre'

const router = express.Router()

interface Response {
  count: number
  results: IGenre[]
}

router.get('/', async (req, res) => {
  try {
    const genres = await Genre.find({})

    const response: Response = {
      count: genres.length,
      results: [...genres],
    }

    res.send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const genre = Genre.findById(req.params.id)

    if (!genre) {
      return res.status(404).send()
    }

    res.send(genre)
  } catch (err) {
    res.status(500).send(err)
  }
})

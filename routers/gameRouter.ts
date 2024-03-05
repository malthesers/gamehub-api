import express from 'express'
import Game, { IGame } from '../models/game'

const gameRouter = express.Router()

interface Response {
  count: number
  results: IGame[]
}

interface Query {
  'genres._id'?: string
  'parent_platforms.platform._id'?: string
}

gameRouter.get('/', async (req, res) => {
  try {
    let query: Query = {}
    const genreID = req.query['genres']
    const platformID = req.query['parent_platforms']

    if (genreID) {
      query['genres._id'] = genreID as string
    }

    if (platformID) {
      query['parent_platforms.platform._id'] = platformID as string
    }

    const games = await Game.find(query)
    const response: Response = {
      count: games.length,
      results: [...games],
    }

    res.send(response)
  } catch (err) {
    res.status(500).send(err)
  }
})

gameRouter.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id)

    if (!game) {
      return res.status(404).send()
    }

    res.send(game)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default gameRouter

import express from 'express'
import platformRouter from '../routers/platformRouter'
import genreRouter from '../routers/genreRouter'
import gameRouter from '../routers/gameRouter'

export default function setupRouters(app: express.Application) {
  app.use('/platforms', platformRouter)
  app.use('/genres', genreRouter)
  app.use('/games', gameRouter)
}

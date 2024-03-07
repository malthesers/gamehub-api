import mongoose, { Document, Schema } from 'mongoose'
import { IPlatform, platformSchema } from './platform'
import { IGenre, genreSchema } from './genre'

export interface IGame extends Document {
  _id: string
  name: string
  background_image?: string
  platforms: IPlatform[]
  metacritic?: number
  genres?: IGenre[]
}

const gameSchema: Schema = new Schema({
  name: { type: String, required: true },
  background_image: { type: String },
  metacritic: { type: Number },
  platforms: [platformSchema],
  genres: [genreSchema],
})

export default mongoose.model<IGame>('Game', gameSchema)

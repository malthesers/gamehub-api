import mongoose, { Document, Schema } from 'mongoose'

export interface IGenre extends Document {
  name: string
  slug: string
}

export const genreSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
})

export default mongoose.model<IGenre>('Genre', genreSchema)

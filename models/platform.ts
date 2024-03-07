import mongoose, { Document, Schema } from 'mongoose'

export interface IPlatform extends Document {
  _id: string
  name: string
  slug: string
  platforms?: IPlatform[]
}

export const platformSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
})

export default mongoose.model<IPlatform>('Platform', platformSchema)

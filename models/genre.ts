import mongoose, { Document, Schema } from 'mongoose';

export interface Genre extends Document {
  name: string;
  slug?: string;
}

export const genreSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String },
});

export default mongoose.model<Genre>('Genre', genreSchema);

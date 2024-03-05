import mongoose, { Document, Schema } from 'mongoose';
import { Platform, platformSchema } from './platform';
import { Genre, genreSchema } from './genre';

export interface Game extends Document {
  name: string;
  background_image?: string;
  parent_platforms?: { platform: Platform }[];
  metacritic?: number;
  genres?: Genre[];
}

const gameSchema: Schema = new Schema({
  name: { type: String, required: true },
  background_image: { type: String },
  metacritic: { type: Number },
  parent_platform: [{ platform: platformSchema }],
  genres: [genreSchema],
});

export default mongoose.model('Game', gameSchema);

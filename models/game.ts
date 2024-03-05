import mongoose, { Document, Schema } from 'mongoose';
import { IPlatform, platformSchema } from './platform';
import { IGenre, genreSchema } from './genre';

export interface IGame extends Document {
  name: string;
  background_image?: string;
  parent_platforms?: { platform: IPlatform }[];
  metacritic?: number;
  genres?: IGenre[];
}

const gameSchema: Schema = new Schema({
  name: { type: String, required: true },
  background_image: { type: String },
  metacritic: { type: Number },
  parent_platform: [{ platform: platformSchema }],
  genres: [genreSchema],
});

export default mongoose.model<IGame>('Game', gameSchema);

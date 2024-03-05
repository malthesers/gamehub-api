import mongoose from "mongoose";
import { genreSchema } from "./genre";

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  background_image: {
    type: String,
    required: true,
  },
  metacritic: {
    type: Number,
    required: true,
  },
  parent_platform: {
    type: Array,
  },
  genres: [genreSchema],
});

export default mongoose.model("Game", gameSchema);

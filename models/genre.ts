import mongoose from "mongoose";

export const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image_background: {
    type: String,
  },
});

export default mongoose.model("Genre", genreSchema);

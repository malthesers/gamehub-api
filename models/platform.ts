import mongoose from "mongoose";

export const platformSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  platforms: {},
});

export default mongoose.model("Platform", platformSchema);

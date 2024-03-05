import mongoose, { Document, Schema } from 'mongoose';

export interface Platform extends Document {
  name: string;
  slug: string;
  platforms?: Platform[];
}

export const platformSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
});

export default mongoose.model<Platform>('Platform', platformSchema);

import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  createdDate: { type: Date, default: Date.now },
  blogID: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  imgUrl: { type: String, required: true }
});

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);

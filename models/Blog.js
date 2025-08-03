import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String },
  createdDate: { type: Date, default: Date.now },
  like: { type: Number, default: 0 },
  accountID: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

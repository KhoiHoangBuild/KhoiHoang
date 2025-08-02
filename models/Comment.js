import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  description: { type: String },
  createdDate: { type: Date, default: Date.now },
  commentID: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }, // For replies
  blogID: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
  accountID: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);

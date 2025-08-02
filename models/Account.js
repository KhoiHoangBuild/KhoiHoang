import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdDate: { type: Date, default: Date.now },
  password: { type: String, required: true },
  imgUrl: { type: String },
  phoneNumber: { type: String },
  address: { type: String }
});

export default mongoose.models.Account || mongoose.model('Account', AccountSchema);

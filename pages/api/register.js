import dbConnect from '../../lib/mongodb';
import Account from '../../models/Account';
import bcrypt from 'bcryptjs';
import { IncomingForm } from 'formidable';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Error parsing form data' });

    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const rawPassword = Array.isArray(fields.password) ? fields.password[0] : fields.password;
    const phoneNumber = Array.isArray(fields.phoneNumber) ? fields.phoneNumber[0] : fields.phoneNumber;
    const address = Array.isArray(fields.address) ? fields.address[0] : fields.address;

    await dbConnect();
    console.log("Email kiểm tra:", email, typeof email);
    console.log("MONGODB_URI:", process.env.MONGODB_URI);

    const existing = await Account.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email đã tồn tại!' });
    }

    const hashed = await bcrypt.hash(String(rawPassword), 10);

    // Sử dụng trực tiếp link ảnh cho trường imgUrl
    const imgUrl = "https://res.cloudinary.com/daowdjuug/image/upload/v1754130556/avatars/images_s8qmxp";

    const newAccount = await Account.create({
      email: String(email),
      password: hashed,
      phoneNumber: String(phoneNumber),
      address: String(address),
      imgUrl
    });

    return res.status(201).json({
      message: 'Đăng ký thành công!',
      account: {
        email: newAccount.email,
        imgUrl
      }
    });
  });
}

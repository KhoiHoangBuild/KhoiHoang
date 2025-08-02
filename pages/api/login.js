import dbConnect from '../../lib/mongodb';
import Account from '../../models/Account';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập đầy đủ email và mật khẩu' });
  }

  try {
    await dbConnect();

    // Tìm user theo email
    const user = await Account.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    // So sánh mật khẩu với hash trong DB
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    // Nếu đúng, trả về thông tin user (bạn có thể bỏ password ra)
    return res.status(200).json({
      message: 'Đăng nhập thành công',
      account: {
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        imgUrl: user.imgUrl,
      },
    });
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    return res.status(500).json({ message: 'Lỗi server, vui lòng thử lại sau' });
  }
}

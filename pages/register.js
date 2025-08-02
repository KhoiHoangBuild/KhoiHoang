import { useState } from 'react';
import Image from 'next/image';

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', password: '', phoneNumber: '', address: '' });
  const [imgAvatar, setImgAvatar] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = e => setImgAvatar(e.target.files[0]);
  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    const formData = new FormData();
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('phoneNumber', form.phoneNumber);
    formData.append('address', form.address);
    if (imgAvatar) formData.append('imgAvatar', imgAvatar);

    const res = await fetch('/api/register', { method: 'POST', body: formData });
    const data = await res.json();
    setMessage(data.message || (res.ok ? 'Đăng ký thành công!' : 'Lỗi không rõ!'));
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <div style={styles.greetingWrapper}>
          <h1 style={styles.greetingLine1}>Chào mừng đến</h1>
          <h2 style={styles.greetingLine2}>
            CÔNG TY TNHH MỘT THÀNH VIÊN XÂY DỰNG <br/>
            THƯƠNG MẠI DỊCH VỤ KHÔI HOÀNG
          </h2>
        </div>
        <div style={styles.imgWrapper}>
          <Image
            src="https://res.cloudinary.com/daowdjuug/image/upload/v1754131277/Modern-house-with-pool_p0e307.jpg"
            alt="Xây dựng đẹp"
            width={800}
            height={600}
            style={styles.image}
            priority
          />
        </div>
      </div>

      <div style={styles.rightPanel}>
        <div style={styles.formWrapper}>
          <h2 style={styles.title}>Đăng ký tài khoản</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Email <span style={{ color: '#e53935' }}>*</span>
              <input
                name="email"
                type="email"
                placeholder="example@company.com"
                required
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Mật khẩu <span style={{ color: '#e53935' }}>*</span>
              <input
                name="password"
                type="password"
                placeholder="Nhập mật khẩu"
                required
                value={form.password}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Số điện thoại
              <input
                name="phoneNumber"
                placeholder="VD: 0912345678"
                value={form.phoneNumber}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Địa chỉ
              <input
                name="address"
                placeholder="Địa chỉ liên hệ"
                value={form.address}
                onChange={handleChange}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Ảnh đại diện (Avatar)
              <input type="file" accept="image/*" onChange={handleFileChange} style={styles.fileInput} />
            </label>
            <button type="submit" style={styles.submitButton}>Đăng ký</button>
          </form>
          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
    </div>
  );
}

const gold = '#ad9110';
const darkBlue = '#253146';
const borderGray = '#e0dfdc';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    background: 'linear-gradient(120deg, #f3f2ef 0%, #ececf3 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  leftPanel: {
    position: 'relative',
    flex: '1.18',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: '#f8f6f2',
    borderRight: `3px solid ${darkBlue}`,
    minWidth: 0,
    paddingTop: '38px',
    paddingBottom: 0,
    overflow: 'hidden'
  },
  greetingWrapper: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '22px',
    zIndex: 10,
  },
  greetingLine1: {
    margin: 0,
    color: darkBlue,
    fontWeight: '700',
    fontSize: '1.45rem',
    letterSpacing: '0.03em',
    textShadow: '0 1px 6px rgba(180,183,194,0.21)'
  },
  greetingLine2: {
    margin: '8px 0 0 0',
    color: gold,
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: '1.17rem',
    letterSpacing: '0.04em',
    lineHeight: '1.45',
    textShadow: '0 2.5px 8px rgba(180,183,194,0.07)'
  },
  imgWrapper: {
    width: '92%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    borderRadius: '16px',
    width: '100%',
    maxHeight: '70vh',
    objectFit: 'cover',
    boxShadow: '0 8px 25px 0 rgba(173,145,16,0.06)',
    border: `2.5px solid ${gold}`,
    background: '#fffbe8',
    marginTop: 0,
  },
  rightPanel: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0',
    background: '#f7f6f4',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '455px',
    background: '#fff',
    padding: '36px 36px 32px 36px',
    borderRadius: '14px',
    boxShadow: '0 8px 36px rgba(43,65,98,0.13)',
  },
  title: {
    color: darkBlue,
    fontWeight: '800',
    fontSize: '2.09rem',
    marginBottom: '28px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.3px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '18px',
    color: darkBlue,
    fontWeight: '600',
    fontSize: '1.02rem',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginTop: '7px',
    padding: '13px 17px',
    borderRadius: '8px',
    border: `1.6px solid ${gold}`,
    outline: 'none',
    fontSize: '1rem',
    background: '#f7f5ecee',
    transition: 'border-color 0.3s',
  },
  fileInput: {
    marginTop: '8px',
  },
  submitButton: {
    marginTop: '32px',
    background: gold,
    fontWeight: '800',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    padding: '16px',
    fontSize: '1.18rem',
    cursor: 'pointer',
    boxShadow: `0 5px 18px ${gold}33`,
    letterSpacing: '0.03em',
    transition: 'background 0.3s, transform 0.1s',
  },
  message: {
    marginTop: '18px',
    color: '#e53935',
    fontWeight: '500',
    fontSize: '1.07rem',
    textAlign: 'center',
  },
};

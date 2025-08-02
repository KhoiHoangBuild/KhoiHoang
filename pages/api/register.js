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
        <Image
          src="https://res.cloudinary.com/daowdjuug/image/upload/v1754130858/images_idim6g.jpg"
          alt="Xây dựng đẹp"
          style={styles.image}
        />
      </div>

      <div style={styles.rightPanel}>
        <div style={styles.formWrapper}>
          <h2 style={styles.title}>Đăng ký tài khoản</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Email <span style={{ color: 'red' }}>*</span>
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
              Mật khẩu <span style={{ color: 'red' }}>*</span>
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

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    background: 'linear-gradient(120deg, #f0f5ff 0%, #d2e3fc 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  leftPanel: {
    flex: '1.3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e9f0ff',
    borderRight: '3px solid #1e88e5',
    padding: '20px',
  },
  image: {
    borderRadius: '15px',
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'cover',
    boxShadow: '0 12px 24px rgba(30, 136, 229, 0.3)',
  },
  rightPanel: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '450px',
    background: '#fff',
    padding: '30px 35px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(30, 136, 229, 0.2)',
  },
  title: {
    color: '#1e88e5',
    fontWeight: '700',
    fontSize: '2rem',
    marginBottom: '28px',
    textAlign: 'center',
    letterSpacing: '1.2px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '18px',
    color: '#1769aa',
    fontWeight: '600',
    fontSize: '0.95rem',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginTop: '6px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #c8d8fa',
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  fileInput: {
    marginTop: '6px',
  },
  submitButton: {
    marginTop: '25px',
    backgroundColor: '#1976d2',
    fontWeight: '700',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    padding: '14px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 5px 18px rgba(25, 118, 210, 0.4)',
    transition: 'background-color 0.3s ease',
  },
  message: {
    marginTop: '20px',
    color: '#d32f2f',
    fontWeight: '600',
    fontSize: '1.1rem',
    textAlign: 'center',
  },
};

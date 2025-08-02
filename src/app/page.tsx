'use client';

import Link from 'next/link';

const bgImage =
  'https://res.cloudinary.com/daowdjuug/image/upload/v1754133360/481801367_122133317990592234_2635574733279367831_n_zvpjnp.jpg';

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 11,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 55px 0 55px',
    color: '#fff',
  },
  left: {
    fontSize: '2.0rem',
    fontWeight: 800,
    letterSpacing: '1.4px',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
    flex: 1,
    userSelect: 'none',
  },
  center: {
    display: 'flex',
    gap: 32,
    fontWeight: 600,
    fontSize: '1.14rem',
    flex: 2,
    justifyContent: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '2px 6px',
    transition: 'opacity 0.2s, border 0.18s',
    opacity: 0.94,
    borderBottom: '3px solid transparent'
  },
  navLinkActive: {
    borderBottom: '3px solid #ffd761',
    opacity: 1,
  },
  right: {
    display: 'flex',
    gap: 16,
    flex: 1,
    justifyContent: 'flex-end'
  },
  loginButton: {
    border: '2px solid #ffd761',
    color: '#ffd761',
    background: 'transparent',
    borderRadius: 24,
    fontWeight: 700,
    fontSize: '1rem',
    padding: '7px 22px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background .18s,color .18s',
  },
  registerButton: {
    border: 'none',
    color: '#222',
    background: '#ffd761',
    borderRadius: 24,
    fontWeight: 700,
    fontSize: '1rem',
    padding: '7px 22px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: 2,
    transition: 'background .18s,color .18s',
  },
  hero: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: `url(${bgImage}) center center/cover no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(24,34,54,0.56)',
    zIndex: 1
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    maxWidth: 900,
    padding: '0 16px',
    marginTop: '40px'
  },
  heroTopText: {
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontWeight: 700,
    color: '#ffd761',
    fontSize: '1.04rem',
    marginBottom: 16,
    opacity: 0.94,
    display: 'inline-block',
  },
  heroTitle: {
    fontWeight: 900,
    fontSize: '3.1rem',
    margin: '10px 0 32px 0',
    lineHeight: 1.16,
    textShadow: '0 4px 24px rgba(0,0,0,0.24)',
  },
  heroText: {
    color: '#ffe7ad',
    opacity: 0.98,
    fontSize: '1.22rem',
    fontWeight: 500,
    marginBottom: 28,
    lineHeight: 1.7,
    textShadow: '0 2px 12px rgba(0,0,0,0.12)'
  },
  heroBtns: {
    marginTop: 24,
    display: 'flex',
    gap: 18,
    justifyContent: 'center'
  },
  heroBtn: {
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: '1.07rem',
    padding: '12px 28px',
    border: 'none',
    borderRadius: 26,
    cursor: 'pointer',
    background: '#ffd761',
    color: '#222',
    transition: 'background .19s,color .19s'
  },
  heroBtnOutline: {
    background: 'transparent',
    color: '#ffd761',
    border: '2px solid #ffd761',
  }
};

export default function HomePage() {
  // Optional: highlight menu theo route nếu muốn (ở đây menu chỉ là ví dụ)
  return (
    <>
      <header style={styles.header}>
        <div style={styles.left}>Khôi hoàng</div>
        <nav style={styles.center}>
          <Link href="/" style={{ ...styles.navLink, ...styles.navLinkActive }}>Trang chủ</Link>
          <Link href="/blogs" style={styles.navLink}>Bài viết</Link>
          <Link href="/contact" style={styles.navLink}>Liên hệ</Link>
        </nav>
        <div style={styles.right}>
          <Link href="/login" style={styles.loginButton}>Đăng nhập</Link>
          <Link href="/register" style={styles.registerButton}>Đăng ký</Link>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <span style={styles.heroTopText}>FRESH &amp; QUALITY BUILDING</span>
          <h1 style={styles.heroTitle}>Chào mừng bạn đến với công ty xây dựng Khôi Hoàng!</h1>
          <div style={styles.heroText}>
            Chúng tôi cung cấp các dịch vụ xây dựng, thương mại và dịch vụ chất lượng hàng đầu.<br />
            Khám phá các bài viết và liên hệ với chúng tôi để biết thêm chi tiết.
          </div>
          <div style={styles.heroBtns}>
            <Link href="/blogs" style={styles.heroBtn}>Dịch vụ</Link>
            <Link href="/contact" style={{ ...styles.heroBtn, ...styles.heroBtnOutline }}>Liên hệ</Link>
          </div>
        </div>
      </section>
    </>
  );
}

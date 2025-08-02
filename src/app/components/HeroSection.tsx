// app/components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

const bgImage =
  'https://res.cloudinary.com/daowdjuug/image/upload/v1754133360/481801367_122133317990592234_2635574733279367831_n_zvpjnp.jpg';

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    width: '100vw',
    height: '100vh',
    minHeight: 640,
    position: 'relative',
    background: `url(${bgImage}) center center/cover no-repeat`,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 1,
    background: 'rgba(24,34,54,0.56)',
  },
  heroContent: {
    zIndex: 2,
    position: 'relative',
    width: '100%',
    maxWidth: 820,
    padding: '0 24px',
    textAlign: 'center',
    color: '#fff',
  },
  heroTop: {
    textTransform: 'uppercase',
    letterSpacing: '4px',
    color: '#3a84fd',
    fontWeight: 700,
    marginBottom: 14,
    fontSize: '1.07rem',
    opacity: 0.95,
  },
  heroTitle: {
    fontWeight: 900,
    fontSize: '2.8rem',
    margin: '10px 0 34px 0',
    lineHeight: 1.13,
    textShadow: '0 4px 24px rgba(0,0,0,0.21)'
  },
  heroText: {
    color: '#ffffffff',
    fontSize: '1.18rem',
    fontWeight: 500,
    lineHeight: 1.7,
    textShadow: '0 2px 14px rgba(0,0,0,0.12)',
    marginBottom: 30
  },
  heroBtns: {
    marginTop: 16,
    display: 'flex',
    gap: 18,
    justifyContent: 'center'
  },
  heroBtn: {
    fontWeight: 700,
    fontSize: '1.12rem',
    padding: '12px 34px',
    border: 'none',
    borderRadius: 26,
    cursor: 'pointer',
    background: '#3a84fd',
    color: '#222',
    marginRight: 8,
    transition: 'background .17s,color .17s'
  },
  heroBtnOutline: {
    background: 'transparent',
    color: '#3a84fd',
    border: '2px solid #3a84fd'
  }
};

const HeroSection: React.FC = () => (
  <section style={styles.hero}>
    <div style={styles.heroOverlay}></div>
    <div style={styles.heroContent}>
      <div style={styles.heroTop}>FRESH &amp; QUALITY BUILDING</div>
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
);

export default HeroSection;

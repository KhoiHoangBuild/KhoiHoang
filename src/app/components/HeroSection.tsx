// app/components/HeroSection.tsx (hoặc thư mục tương ứng)

import React from 'react';

const bgImage =
  'https://res.cloudinary.com/daowdjuug/image/upload/v1754133360/481801367_122133317990592234_2635574733279367831_n_zvpjnp.jpg';

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: `url(${bgImage}) center center / cover no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(24,34,54,0.56)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 900,
    width: '100%',
    padding: '0 20px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: 16,
    textShadow: '0 4px 26px rgba(0,0,0,0.5)',
  },
  subtitle: {
    fontSize: '1.25rem',
    lineHeight: 1.7,
    color: '#ffe39d',
    textShadow: '0 2px 12px rgba(0,0,0,0.4)',
  },
};

const HeroSection: React.FC = () => (
  <section style={styles.hero}>
    <div style={styles.overlay}></div>
    <div style={styles.content}>
      <h1 style={styles.title}>Chào mừng bạn đến với công ty xây dựng Khôi Hoàng!</h1>
      <p style={styles.subtitle}>
        Chúng tôi cung cấp các dịch vụ xây dựng, thương mại và dịch vụ chất lượng hàng đầu.
        <br />
        Khám phá các bài viết và liên hệ với chúng tôi để biết thêm chi tiết.
      </p>
    </div>
  </section>
);

export default HeroSection;

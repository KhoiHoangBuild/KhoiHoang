// app/components/FeaturesSection.tsx
import React from 'react';

// Bạn có thể dùng SVG inline cho đẹp, hoặc dùng icon font nếu có
const featureList = [
  {
    icon: (
      <svg width="38" height="38" fill="none" stroke="#3a84fd" strokeWidth="2.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" strokeDasharray="2 3" />
        <path strokeLinecap="round" d="M4 17h12.5a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2H9.7M6 13V8a2 2 0 0 1 2-2h4" />
        <rect x="2" y="13" width="4.5" height="3.5" rx="1" fill="#3a84fd" />
      </svg>
    ),
    title: 'Tư vấn miễn phí',
    desc: 'Giải pháp xây dựng tối ưu & tiết kiệm.',
  },
  {
    icon: (
      <svg width="38" height="38" fill="none" stroke="#3a84fd" strokeWidth="2.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" strokeDasharray="2 3" />
        <path d="M7 10.7V7.3A1.3 1.3 0 0 1 8.3 6h7.4A1.3 1.3 0 0 1 17 7.3v7.4A1.3 1.3 0 0 1 15.7 16H8.3A1.3 1.3 0 0 1 7 14.7v-4z" />
        <path strokeLinecap="round" d="M9 12h2m2 0h.01" />
      </svg>
    ),
    title: 'Chất lượng đảm bảo',
    desc: 'Thi công đúng chuẩn, bảo hành lâu dài.',
  },
  {
    icon: (
      <svg width="38" height="38" fill="none" stroke="#3a84fd" strokeWidth="2.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" strokeDasharray="2 3" />
        <path
          strokeLinecap="round"
          d="M15.47 15.47A6 6 0 1 1 12 6v4.59l2.3 2.3"
        />
      </svg>
    ),
    title: 'Tiến độ linh hoạt',
    desc: 'Đảm bảo tiến độ, hỗ trợ thay đổi hợp đồng.',
  },
];

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    width: '100vw',
    background: '#f7f7f7',
    padding: '38px 0 34px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  inner: {
  width: '100%',
  maxWidth: 1020,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  gap: 80,
  flexWrap: 'wrap',
  },
  item: {
    background: '#fff',
    borderRadius: 20,
    flex: 1,
    minWidth: 265,
    margin: '0 8px',
    display: 'flex',
    flexDirection: 'column' ,
    alignItems: 'center',
    padding: '30px 14px 20px 14px',
    boxShadow: '0 2px 18px 0 rgba(60,60,60,0.06)',
    textAlign: 'center'
  },
  icon: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },
  title: {
    fontWeight: 700,
    fontSize: '1.14rem',
    marginBottom: 6,
    color: '#222',
  },
  desc: {
    fontWeight: 400,
    fontSize: '1rem',
    color: '#444',
    opacity: 0.92,
  }
};

const FeaturesSection: React.FC = () => (
  <section style={styles.wrapper}>
    <div style={styles.inner}>
      {featureList.map((ft, idx) => (
        <div style={styles.item} key={idx}>
          <div style={styles.icon}>{ft.icon}</div>
          <div style={styles.title}>{ft.title}</div>
          <div style={styles.desc}>{ft.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;

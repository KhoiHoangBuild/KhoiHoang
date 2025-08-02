'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroSection from './components/HeroSection'; 

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Header chồng lên Hero */}
      <header style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 80px 0 80px',
        background: scrolled ? 'rgba(173,145,16,0.98)' : 'rgba(0,0,0,0)',
        color: '#fff',
        boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.16)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>
        <span style={{
          fontWeight: 800, fontSize: '2rem', textTransform: 'uppercase', letterSpacing: 1.2, userSelect: 'none'
        }}>KHÔI HOÀNG</span>
        <nav style={{
          display: 'flex', gap: 36, fontSize: '1.19rem', fontWeight: 700,
        }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', opacity: 0.96, padding: '2px 6px', borderBottom: '2.5px solid #ffd761' }}>Trang chủ</Link>
          <Link href="/blogs" style={{ color: '#fff', textDecoration: 'none', opacity: 0.96, padding: '2px 6px' }}>Bài viết</Link>
          <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', opacity: 0.96, padding: '2px 6px' }}>Liên hệ</Link>
        </nav>
        <div style={{ display: 'flex', gap: 14, }}>
          <Link href="/login" style={{
            border: '2px solid #ffd761', color: '#ffd761', background: 'transparent', borderRadius: 24,
            fontWeight: 600, fontSize: '1.06rem', padding: '8px 24px', cursor: 'pointer', textDecoration: 'none',
            transition: 'background 0.18s,color 0.18s',
          }}>Đăng nhập</Link>
          <Link href="/register" style={{
            border: 'none', color: '#222', background: '#ffd761', borderRadius: 24, fontWeight: 700,
            fontSize: '1.06rem', padding: '8px 24px', cursor: 'pointer', textDecoration: 'none', marginLeft: 2,
            transition: 'background 0.18s,color 0.18s',
          }}>Đăng ký</Link>
        </div>
      </header>

      <main>
        <HeroSection />
        {/* Các component khác của trang chủ đặt tiếp bên dưới */}
      </main>
    </>
  );
}

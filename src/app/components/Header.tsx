'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Thanh liên hệ phía trên cố định */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#3a84fd',
        padding: '2px 0',
        fontSize: 15,
        color: '#f1eaea',
        zIndex: 110,  // cần cao hơn header dưới
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: 1290,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 20,
          padding: '0 12px'
        }}>
          <FaPhoneAlt style={{ marginRight: 5 }} size={14} /> 0901 184 500
          <FaEnvelope style={{ margin: '0 6px 0 16px' }} size={14} />
          khoihoangxaydung@gmail.com
          <span style={{ marginLeft: 22, opacity: 0.9 }}>
            239/8, Võ Văn Hát, KP. Phước Hiệp, P. Long Trường, Q9, HCM
          </span>
        </div>
      </div>

      {/* Header nav chính phía dưới thanh liên hệ */}
      <header style={{
        position: 'fixed',
        top: 30,  // Để ngay dưới thanh trên cùng (cao 30px)
        left: 0,
        width: '100%',
        zIndex: 100,
        background: '#fff',
        color: '#222',
        boxShadow: scrolled ? '0 3px 20px rgba(0,0,0,0.11)' : 'none',
        borderBottom: '1.5px solid #dadada',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>
        <div style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 58,
        }}>
          {/* Logo và brand */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <Image
              src="https://res.cloudinary.com/daowdjuug/image/upload/v1754139352/BetterImage_1754136011275_qwyphw.jpg"
              alt="Logo"
              width={110}
              height={38}
              style={{ height: 38, marginRight: 7, width: "auto" }}
            />
            <span style={{
              fontWeight: 900,
              letterSpacing: 1,
              fontSize: '1.28rem',
              textTransform: 'uppercase'
            }}>
              KHÔI HOÀNG
            </span>
          </div>

          {/* Menu */}
          <nav style={{
            display: 'flex', gap: 28,
            fontWeight: 600, fontSize: '1.09rem'
          }}>
            <Link href="/" style={{
              color: '#3a84fd',
              textDecoration: 'none',
              borderRadius: 4,
              fontWeight: 700,
              background: '#d7e2f4ff',
              padding: '4.5px 18px',
              border: '1.5px solid #3a84fd'
            }}>Trang chủ</Link>
            <Link href="/news" style={{ color: '#3e3232', textDecoration: 'none', padding: '4.5px 12px' }}>Bài viết</Link>
            <Link href="/contact" style={{ color: '#3e3232', textDecoration: 'none', padding: '4.5px 12px' }}>Liên hệ</Link>
          </nav>

          {/* 2 nút đăng nhập, đăng ký */}
          <div style={{ display: 'flex', gap: 12 }}>
            <Link
              href="/login"
              style={{
                background: '#3a84fd',
                color: '#fff',
                fontWeight: 700,
                borderRadius: 4,
                padding: '8px 18px',
                textDecoration: 'none',
                fontSize: '1.05rem',
                letterSpacing: 1.05,
                border: '1.5px solid #2461ad'
              }}
            >
              Đăng nhập
            </Link>
            <Link
              href="/register"
              style={{
                background: '#fff',
                color: '#3a84fd',
                fontWeight: 700,
                borderRadius: 4,
                padding: '8px 18px',
                textDecoration: 'none',
                fontSize: '1.05rem',
                letterSpacing: 1.05,
                border: '1.5px solid #3a84fd'
              }}
            >
              Đăng ký
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}

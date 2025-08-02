// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
const heroImg =
  'https://res.cloudinary.com/daowdjuug/image/upload/v1754145747/Untitled_uam6rp.png';

export default function HeroSection() {
  return (
    <div style={{
      height: '75vh',
      width: '100vw',
      alignItems: 'center',     // căn giữa dọc
      justifyContent: 'center', // căn giữa ngang
      background: '#fff',        // hoặc màu bạn thích,
      paddingTop: '102px'
    }}>
      <Image
      src={heroImg}
      alt="Hero"
      width={800}  // Set a base width
      height={600} // Set a base height
      style={{
        height: 'auto',
        width: '100%',
        maxWidth: '100%',
        boxShadow: '4px 0 24px 0 rgba(120,120,120,0.16)',
        objectFit: 'cover',
      }}
      priority
    />
    </div>
  );
}

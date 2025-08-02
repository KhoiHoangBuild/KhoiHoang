// app/page.tsx
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 'calc(100vh - 94px)', // trừ header spacer
        background: '#fff',              // hoặc màu nền nhạt giống hình mẫu
        paddingTop: '25px',
        height: '500px'
      }}>
        {/* Cột HeroSection bên trái */}
        <HeroSection />

        {/* Cột phải: các thành phần/ảnh còn lại hoặc để trống */}
        <div style={{
          flex: 1,
          background: '#fff',           // nền trắng hoặc chỉnh cho giống bản mẫu
        }}>
        </div>
      </div>
              <FeaturesSection/>

    </>
  );
}

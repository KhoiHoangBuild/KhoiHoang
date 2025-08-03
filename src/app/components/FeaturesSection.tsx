"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { FaRegHandshake, FaUserTie, FaTools, FaClock, FaTags, FaHeart, FaLaptopCode, FaHardHat, FaClipboardList, FaShieldAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
// Cam kết: có thể gán thêm icon từng cái tuỳ ý
const commitments = [
  {
    text: "Uy tín hàng đầu trong ngành xây dựng.",
    icon: <FaRegHandshake className="text-2xl" />,
  },
  {
    text: "Đội ngũ kỹ sư dày dạn kinh nghiệm.",
    icon: <FaUserTie className="text-2xl" />,
  },
  {
    text: "Chất lượng công trình đảm bảo.",
    icon: <FaTools className="text-2xl" />,
  },
  {
    text: "Tiến độ thi công nhanh chóng.",
    icon: <FaClock className="text-2xl" />,
  },
  {
    text: "Giá cả cạnh tranh minh bạch.",
    icon: <FaTags className="text-2xl" />,
  },
  {
    text: "Dịch vụ khách hàng tận tâm.",
    icon: <FaHeart className="text-2xl" />,
  },
  {
    text: "Công nghệ xây dựng tiên tiến.",
    icon: <FaLaptopCode className="text-2xl" />,
  },
  {
    text: "An toàn lao động tuyệt đối.",
    icon: <FaHardHat className="text-2xl" />,
  },
  {
    text: "Quy trình quản lý chuyên nghiệp.",
    icon: <FaClipboardList className="text-2xl" />,
  },
  {
    text: "Bảo hành dài hạn cho mọi dự án.",
    icon: <FaShieldAlt className="text-2xl" />,
  },
];

const images = [
  "https://res.cloudinary.com/daowdjuug/image/upload/v1754150031/Screenshot_2025-08-02_225109_oclxt8.png",
  "https://res.cloudinary.com/daowdjuug/image/upload/v1754149948/Screenshot_2025-08-02_225046_pbbcjk.png",
  "https://res.cloudinary.com/daowdjuug/image/upload/v1754149815/500018675_122146281968592234_590589945726049239_n_tbkjtq.jpg",
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-8 px-2">
      {/* Slider cam kết */}
      <div className="max-w-[1200px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={24}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {commitments.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`flex items-center gap-3 rounded-lg px-5 py-4 h-[76px] font-medium shadow-lg text-base 
                  border transition-colors duration-300
                  ${idx % 2 === 0
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-blue-600 border-blue-600"
                  }`}
                style={{ minHeight: 76, maxHeight: 76 }}
              >
                {/* Icon riêng từng card */}
                <span className={`${idx % 2 === 0 ? "text-white" : "text-blue-600"} min-w-[28px]`}>
                  {item.icon}
                </span>
                <span className="flex-1 font-bold">{item.text}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Phần chính: slider ảnh + giới thiệu */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-xl p-8 mt-8">
        {/* Ảnh bên trái là slider */}
        <div className="w-full md:w-1/2 flex items-center">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            loop
            className="rounded-xl shadow-lg w-full"
          >
            {images.map((url, idx) => (
              <SwiperSlide key={idx}>
                <div className="aspect-[4/3] w-full h-auto rounded-xl overflow-hidden flex items-center bg-gray-100">
                  <Image
                    src={url}
                    alt={`Hình Khôi Hoàng ${idx + 1}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover rounded-xl transition-all duration-700 mx-auto"
                    quality={80}
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          600px"
                    priority={idx === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Giới thiệu bên phải */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            Khôi Hoàng – Kiến tạo giá trị bền vững
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Công ty Xây dựng Thương mại Dịch vụ Khôi Hoàng tự hào là đơn vị đồng hành cùng hàng trăm dự án lớn nhỏ trên khắp cả nước. Chúng tôi lấy <span className="text-blue-700 font-semibold">Uy tín, Chất lượng, Chuyên nghiệp</span> làm giá trị cốt lõi cho mọi hoạt động, cam kết mang lại giải pháp xây dựng tối ưu, an toàn và hiệu quả nhất cho khách hàng.
          </p>
          <ul className="pl-0 mt-4 space-y-3">
            {[
              "Đội ngũ kỹ sư, công nhân giỏi chuyên môn, tâm huyết.",
              "Áp dụng công nghệ hiện đại, quy trình quản lý chuyên nghiệp.",
              "Đảm bảo tiến độ, nghiệm thu đúng tiêu chuẩn chất lượng.",
              "Luôn đặt lợi ích, sự hài lòng của khách hàng lên trên hết.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                {/* Tick màu vàng nổi bật */}
                <FaCheckCircle className="text-yellow-400 mt-0.5 text-lg flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

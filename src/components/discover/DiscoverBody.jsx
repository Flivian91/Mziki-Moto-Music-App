"use client"
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import DiscoverItem from "./DiscoverItem";

function DiscoverBody() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        480: { slidesPerView: 2, spaceBetween: 10 }, // Small screens
        768: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
        1024: { slidesPerView: 4, spaceBetween: 20 }, // Small desktops
        1440: { slidesPerView: 5, spaceBetween: 25 }, // Large desktops
        1920: { slidesPerView: 6, spaceBetween: 30 }, // Ultra-wide screens
      }}
    >
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
      <SwiperSlide>
        <DiscoverItem />
      </SwiperSlide>
    </Swiper>
  );
}

export default DiscoverBody;

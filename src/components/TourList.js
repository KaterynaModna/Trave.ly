import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import TourCard from './TourCard';

export default function TourList({ data }) {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={5}
      loop={true}
      breakpoints={{
        330: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        968: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          <TourCard
            photo={data.photo}
            name={data.name}
            lokal={data.lokal}
            category={data.category}
            address={data.address}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
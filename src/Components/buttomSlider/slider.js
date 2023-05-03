import "./slider.scss";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
//import { buttomData } from "./sliderData";
import { useRef } from "react";

import { useGetAllproductsQuery } from "../../features/productsApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper";
import Slide from "../slide/slide";

function Slider() {
  const { data, error, isLoading } = useGetAllproductsQuery();

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <>
      <div className="middle">
        <div className="sl_header">Games On Sale</div>

        <div className="Navgroup">
          <div className="swiperNavNext" ref={swiperNavNextRef}>
            <IoIosArrowDropright />
          </div>
          <div className="swiperNavPrev" ref={swiperNavPrevRef}>
            <IoIosArrowDropleft />
          </div>
        </div>
      </div>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: swiperNavNextRef.current,
          prevEl: swiperNavPrevRef.current,
        }}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {isLoading ? (
          <p>Loading..</p>
        ) : error ? (
          <p>An error occured..</p>
        ) : (
          <>
            {data.results?.slice(0, 7).map((val, key) => {
              return (
                <SwiperSlide key={key}>
                  <Slide {...val} />
                </SwiperSlide>
              );
            })}
          </>
        )}
      </Swiper>
    </>
  );
}

export default Slider;

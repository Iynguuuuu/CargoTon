// src/components/Slider.jsx
import React from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const ImageSlides = () => {

    const images = ['/images/harbour.jpg', '/images/shipx.jpg', '/images/plane.jpg']

    return (
      
            <div className='ml-[30rem]'>
                <Swiper
                    modules={[Autoplay, A11y]}
                    spaceBetween={30} // Adjust the spacing as needed
                    slidesPerView={1} // Show only one slide by default
                    autoplay
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <a href='/#'>
                                <img
                                    src={img}
                                    alt={`slide-${index + 1}`}
                                    className='w-[880px] h-[600px]  select-none'
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


      
    );
};

export default ImageSlides

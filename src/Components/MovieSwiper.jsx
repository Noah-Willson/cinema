import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import './movieSwiper.css'

export default function MovieSwiper({ slides, slideChange  }) {
    const handleSlideClick = (id) => {
        slideChange(id);
    };


    return (
        <Swiper
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}

            loop={true}
            modules={{ Autoplay, EffectCoverflow, Pagination }}
            className='movieSwiper'
        >
            {
                slides.map(slide => (
                    <SwiperSlide key={slide._id}>
                        <img src={slide.previewImg}  alt="Preview Image" onClick={() => handleSlideClick(slide._id)} />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

import React from 'react'
import './proficiency.css'
import { data } from './proficiency.data'

/*====== SLIDER =====*/
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
/*==================*/




export default function Proficiency() {
  return (
    <section id='proficiency'>
      <h5>Néhány munkám</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio__container mySwiper"
      modules={[Navigation]}
      navigation={true}
      spaceBetween={100}
      slidesPerView={1}>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={(image)} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </SwiperSlide>

            )
          })
        }



      </Swiper>
    </section>
  )
}

import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aliquid aut architecto totam nulla est incidunt ipsum repudiandae obcaecati praesentium? Ea ex ut cum a suscipit accusantium possimus officia corporis.'
  },
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aliquid aut architecto totam nulla est incidunt ipsum repudiandae obcaecati praesentium? Ea ex ut cum a suscipit accusantium possimus officia corporis.'
  },
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aliquid aut architecto totam nulla est incidunt ipsum repudiandae obcaecati praesentium? Ea ex ut cum a suscipit accusantium possimus officia corporis.'
  },
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aliquid aut architecto totam nulla est incidunt ipsum repudiandae obcaecati praesentium? Ea ex ut cum a suscipit accusantium possimus officia corporis.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
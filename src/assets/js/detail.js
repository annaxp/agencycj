import Swiper, { Navigation, Pagination } from 'swiper'
import { deviceType as getDeviceType } from './deviceType.js'
import { mobileApp } from './mobile'

Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {
  const deviceType = getDeviceType()

  if (deviceType === 'desktop') {
    document.body.classList.add('desktop-app')
  } else {
    mobileApp(blocks)
  }

  const swipers = []
  document
    .querySelectorAll('.detail-slider-wrapper.is-slider')
    .forEach((sliderWrapper) => {
      const slider = ((element) => ({
        element,
        props: {
          slidesPerView: 1,
          slideClass: 'detail-slider__slide',
          wrapperClass: 'detail-slider',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          },
          speed: 400,
        },
      }))(sliderWrapper)
      swipers.push(slider)
    })
  swipers.forEach((swiper) => {
    const { element, props } = swiper
    element && new Swiper(element, props)
  })
})

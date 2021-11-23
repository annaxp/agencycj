import Swiper, { Navigation, Pagination } from 'swiper'
import { deviceType as getDeviceType } from './common/deviceType.js'
import { detailMobileApp } from './detailMobile'
import { mobileScrollTo } from './common/mobileScrollTo'

Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {
  const deviceType = getDeviceType()

  if (deviceType === 'desktop') {
    document.body.classList.add('desktop-app')
    const form = document.querySelector('.detail-form')

    document.querySelector('.header .call-button').onclick = (e) => {
      e.preventDefault()
      form && mobileScrollTo(form)
    }
  } else {
    detailMobileApp()
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

import Swiper from 'swiper'
import { deviceType as getDeviceType } from './deviceType.js'
import { desktopApp } from './desktop'
import { mobileApp } from './mobile'

const setSliderButtons = (container, value) => {
  const sliderButtons = `
  <div class="slider-controls"> 
    <div class="arrow arrow--left"></div>
      <div class="slider-controls__info"> <span class="slider-controls__current">1</span><span class="slider-controls__count">4</span></div>
    <div class="arrow arrow--right"></div>
  </div>`

  if (value) {
    container.innerHTML = sliderButtons
  } else {
    container.innerHTML = ''
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const deviceType = getDeviceType()

  if (deviceType === 'desktop') {
    document.body.classList.add('desktop-app')
  } else {
    mobileApp(blocks)
  }

  const slideChange = (swiper) => {
    if (deviceType !== 'desktop') return
    swiper.el.querySelector('.slider-controls__current').innerText =
      swiper.activeIndex + 1
  }

  const swiperDefaultProps = (element) => ({
    speed: 400,
    on: {
      slideChange,
      afterInit: (swiper) => {
        if (deviceType === 'desktop') {
          const sliderControlsWrapper = element.querySelector(
            '.slider-controls-wrapper',
          )
          setSliderButtons(sliderControlsWrapper, true)
          element.querySelector('.slider-controls__count').innerText =
            swiper.slides.length - swiper.params.slidesPerView + 1
          slideChange(swiper)
          element.querySelector('.arrow--left').onclick = () =>
            swiper.slidePrev()
          element.querySelector('.arrow--right').onclick = () =>
            swiper.slideNext()
        }
      },
    },
  })

  //   const projects = ((element) => ({
  //     element,
  //     props: {
  //       slidesPerView: 3,
  //       slideClass: 'project-slide',
  //       wrapperClass: 'projects-list',
  //       ...swiperDefaultProps(element),
  //     },
  //   }))(document.querySelector('.projects-list-wrapper'))

  //   const team = ((element) => ({
  //     element,
  //     props: {
  //       slidesPerView: 1,
  //       slideClass: 'team-slide',
  //       wrapperClass: 'team-list',
  //       ...swiperDefaultProps(element),
  //       breakpoints: {
  //         600: {
  //           slidesPerView: 2,
  //         },
  //         1100: {
  //           slidesPerView: 4,
  //           spaceBetween: deviceType === 'desktop' ? 94 : 0,
  //         },
  //       },
  //     },
  //   }))(document.querySelector('.team-list-wrapper'))

  //   const process = ((element) => ({
  //     element,
  //     props: {
  //       slidesPerView: 1,
  //       freeMode: true,
  //       slideClass: 'process-item',
  //       wrapperClass: 'process-list',
  //       ...swiperDefaultProps(element),
  //       breakpoints: {
  //         600: {
  //           slidesPerView: 2,
  //         },
  //       },
  //     },
  //   }))(document.querySelector('.process-list-wrapper'))

  //   const swipers = [team]
  //   if (deviceType === 'desktop') {
  //     swipers.push(projects)
  //   } else {
  //     process.element
  //       ?.querySelectorAll('.process-item')
  //       .forEach((element) => element.classList.add('active'))
  //     swipers.push(process)
  //   }
  //   swipers.forEach((swiper) => {
  //     const { element, props } = swiper
  //     element.classList.add('is-slider')
  //     element && new Swiper(element, props)
  //   })
})

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

const blocks = (function () {
  const blocks = {
    preview: {
      index: 0,
      name: 'preview',
      theme: 'dark',
    },
    about: {
      index: 1,
      name: 'about',
      theme: 'light',
    },
    services: {
      index: 2,
      name: 'services',
      theme: 'dark',
    },
    projects: {
      index: 3,
      name: 'projects',
      theme: 'light',
    },
    process: {
      index: 4,
      name: 'process',
      theme: 'dark',
    },
    team: {
      index: 5,
      name: 'team',
      theme: 'dark',
    },
    contacts: {
      index: 6,
      name: 'contacts',
      theme: 'light',
    },
  }
  Object.keys(blocks).forEach(
    (key) => (blocks[blocks[key].index] = blocks[key]),
  )
  return blocks
})()

window.addEventListener('load', () => {
  const deviceType = getDeviceType(document)

  if (deviceType === 'desktop') {
    desktopApp(blocks)
  } else {
    mobileApp()
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

  const swipers = {
    projects: ((element) => ({
      element,
      props: {
        slidesPerView: 3,
        slideClass: 'project-slide',
        wrapperClass: 'projects-list',
        ...swiperDefaultProps(element),
      },
    }))(document.querySelector('.projects-list-wrapper')),
    team: ((element) => ({
      element,
      props: {
        slidesPerView: 3,
        spaceBetween: 84,
        slideClass: 'team-slide',
        wrapperClass: 'team-list',
        ...swiperDefaultProps(element),
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 94,
          },
        },
      },
    }))(document.querySelector('.team-list-wrapper')),
  }

  Object.keys(swipers).forEach((key) => {
    const { element, props } = swipers[key]
    new Swiper(element, props)
  })
})

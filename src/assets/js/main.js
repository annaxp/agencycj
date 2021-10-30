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

const blocks = {
  preview: {
    name: 'preview',
    theme: 'dark',
  },
  about: {
    name: 'about',
    theme: 'light',
  },
  services: {
    name: 'services',
    theme: 'dark',
  },
  projects: {
    name: 'projects',
    theme: 'light',
  },
  process: {
    name: 'process',
    theme: 'dark',
  },
  team: {
    name: 'team',
    theme: 'dark',
  },
  contacts: {
    name: 'contacts',
    theme: 'light',
  },
}

window.addEventListener('load', () => {
  document.querySelectorAll('.main[data-hash]').forEach((main, index) => {
    const hash = main.getAttribute('data-hash')
    blocks[hash].index = index
    blocks[index] = blocks[hash]
  })

  const deviceType = getDeviceType(document)

  if (deviceType === 'desktop') {
    desktopApp(blocks)
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

  const projects = ((element) => ({
    element,
    props: {
      slidesPerView: 3,
      slideClass: 'project-slide',
      wrapperClass: 'projects-list',
      ...swiperDefaultProps(element),
    },
  }))(document.querySelector('.projects-list-wrapper'))

  const team = ((element) => ({
    element,
    props: {
      slidesPerView: 3,
      spaceBetween: 84,
      slideClass: 'team-slide',
      wrapperClass: 'team-list',
      ...swiperDefaultProps(element),
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 94,
        },
      },
    },
  }))(document.querySelector('.team-list-wrapper'))

  const process = ((element) => ({
    element,
    props: {
      slidesPerView: 2,
      spaceBetween: 46,
      spaceBetween: 84,
      freeMode: true,
      slideClass: 'process-item',
      wrapperClass: 'process-list',
      ...swiperDefaultProps(element),
    },
  }))(document.querySelector('.process-list-wrapper'))

  const swipers = [team]
  if (deviceType === 'desktop') {
    swipers.push(projects)
  } else {
    process.element
      .querySelectorAll('.process-item')
      .forEach((element) => element.classList.add('active'))
    swipers.push(process)
  }
  swipers.forEach((swiper) => {
    const { element, props } = swiper
    element.classList.add('is-slider')
    new Swiper(element, props)
  })
})

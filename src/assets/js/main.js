import Swiper, { Navigation } from 'swiper'
import { deviceType as getDeviceType } from './common/deviceType.js'
import { mainDesktopApp } from './mainDesktop'
import { mainMobileApp } from './mainMobile'

Swiper.use([Navigation])

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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main[data-hash]').forEach((main, index) => {
    const hash = main.getAttribute('data-hash')
    blocks[hash].index = index
    blocks[index] = blocks[hash]
  })

  const deviceType = getDeviceType()

  if (deviceType === 'desktop') {
    mainDesktopApp(blocks)
  }

  const slideChange = (swiper) => {
    swiper.el.querySelector('.slider-controls__current').innerText =
      swiper.activeIndex + 1
  }

  const swiperDefaultProps = (element) => ({
    speed: 400,
    on: {
      ...(deviceType === 'desktop'
        ? {
            slideChange,
            afterInit: (swiper) => {
              element.querySelector('.slider-controls__count').innerText =
                swiper.slides.length - swiper.params.slidesPerView + 1
              slideChange(swiper)
            },
          }
        : {}),
    },
  })

  const projects = ((element) => ({
    element,
    props: {
      slidesPerView: 3,
      slideClass: 'project-slide',
      wrapperClass: 'projects-list',
      ...(deviceType === 'desktop'
        ? {
            navigation: {
              prevEl: element.querySelector('.arrow--left'),
              nextEl: element.querySelector('.arrow--right'),
            },
          }
        : {}),
      ...swiperDefaultProps(element),
    },
  }))(document.querySelector('.projects-list-wrapper'))

  const team = ((element) => ({
    element,
    props: {
      slidesPerView: 1,
      slideClass: 'team-slide',
      wrapperClass: 'team-list',
      ...(deviceType === 'desktop'
        ? {
            navigation: {
              prevEl: element.querySelector('.arrow--left'),
              nextEl: element.querySelector('.arrow--right'),
            },
          }
        : {}),
      ...swiperDefaultProps(element),
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: deviceType === 'desktop' ? 94 : 0,
        },
      },
    },
  }))(document.querySelector('.team-list-wrapper'))

  const process = ((element) => ({
    element,
    props: {
      slidesPerView: 1,
      freeMode: true,
      slideClass: 'process-item',
      wrapperClass: 'process-list',
      ...swiperDefaultProps(element),
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
      },
    },
  }))(document.querySelector('.process-list-wrapper'))

  const swipers = [team]
  if (deviceType === 'desktop') {
    swipers.push(projects)
  } else {
    process.element
      ?.querySelectorAll('.process-item')
      .forEach((element) => element.classList.add('active'))
    swipers.push(process)
  }
  swipers.forEach((swiper) => {
    const { element, props } = swiper
    element.classList.add('is-slider')
    element && new Swiper(element, props)
  })

  if (deviceType === 'mobile') {
    mainMobileApp()
  }
})

import Swiper, { Navigation } from 'swiper'
import { deviceType as getDeviceType } from './common/deviceType.js'
import { mainDesktopApp } from './mainDesktop'
import { mainMobileApp } from './mainMobile'

Swiper.use([Navigation])

const blocks = {
  preview: {
    name: 'preview',
    theme: 'dark',
    url: '',
  },
  about: {
    name: 'about',
    theme: 'light',
    url: '#about',
  },
  services: {
    name: 'services',
    theme: 'dark',
    url: '#services',
  },
  projects: {
    name: 'projects',
    theme: 'light',
    url: '#projects',
  },
  process: {
    name: 'process',
    theme: 'dark',
    url: '#process',
  },
  team: {
    name: 'team',
    theme: 'dark',
    url: '#team',
  },
  contacts: {
    name: 'contacts',
    theme: 'light',
    url: '#contacts',
  },
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main[data-hash]').forEach((main, index) => {
    const hash = main.getAttribute('data-hash')
    blocks[hash].index = index
    blocks[index] = blocks[hash]
  })

  setTimeout(resize, 1000)
  window.addEventListener('resize', resize)

  const deviceType = getDeviceType()

  if (deviceType === 'desktop') {
    mainDesktopApp(blocks)
  }

  ;(function swiperInit() {
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
  })()

  if (deviceType === 'mobile') {
    mainMobileApp()
  }

  function resize() {
    const previewBackground = document.querySelector('.main__background')
    const videoAspectRatio = 1920 / 1080
    const previewBackgroundAspectRatio =
      previewBackground.clientWidth / previewBackground.clientHeight
    if (previewBackgroundAspectRatio < videoAspectRatio) {
      previewBackground
        .querySelector('.background__video')
        .classList.add('is-vertical')
    } else {
      previewBackground
        .querySelector('.background__video')
        .classList.remove('is-vertical')
    }
  }
})

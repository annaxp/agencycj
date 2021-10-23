import Grain from './vendors/grain.js'
import Swiper from 'swiper'
import { processListAnimation } from './process'
import WheelIndicator from 'wheel-indicator'

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
  const headerNavLinks = document.querySelectorAll('a.header-nav__item')
  setHeaderLinkActive()

  const slidesBackground = document.querySelectorAll('.grain__canvas')
  slidesBackground.forEach((element) => new Grain(element))

  const { processListAnimationStart, processListAnimationEnd } =
    processListAnimation(document.getElementById('process-list'))

  const themeStore = {
    slide: blocks.preview,
    changeSlide(slide = blocks.preview) {
      themeStore.slide = slide
      switch (themeStore.slide.theme) {
        case 'light': {
          const header = document.querySelector('.header-wrapper')
          header.classList.add('theme-light')
          header.classList.remove('theme-dark')
          break
        }
        case 'dark':
        default: {
          const header = document.querySelector('.header-wrapper')
          header.classList.add('theme-dark')
          header.classList.remove('theme-light')
          break
        }
      }
    },
  }

  const slideChange = (swiper) => {
    swiper.el.querySelector('.slider-controls__current').innerText =
      swiper.activeIndex + 1
  }

  const swiperDefaultProps = (element) => ({
    speed: 400,
    on: {
      init: (swiper) => {
        element.querySelector('.slider-controls__count').innerText =
          swiper.slides.length - swiper.params.slidesPerView + 1
        slideChange(swiper)
      },
      slideChange,
      afterInit: (swiper) => {
        element.querySelector('.arrow--left').onclick = () => swiper.slidePrev()
        element.querySelector('.arrow--right').onclick = () =>
          swiper.slideNext()
      },
    },
  })

  const swipers = {
    screens: {
      element: document.querySelector('.screens'),
      props: {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 800,
        slideClass: 'main',
        allowTouchMove: false,
        mousewheel: false,
        initialSlide: getSlide(),
        hashNavigation: {
          watchState: true,
          replaceState: true,
        },
        on: {
          slideChange: (swiper) => {
            if (blocks[swiper.activeIndex].name === 'process') {
              processListAnimationStart()
            } else {
              processListAnimationEnd()
            }
            themeStore.changeSlide(blocks[swiper.activeIndex])
          },
          afterInit: (swiper) => {
            themeStore.changeSlide(blocks[swiper.activeIndex])
          },
        },
      },
    },
    projects: ((element) => ({
      element,
      props: {
        slidesPerView: 3,
        slideClass: 'project-slide',
        ...swiperDefaultProps(element),
      },
    }))(document.querySelector('.projects-list-wrapper')),
    team: ((element) => ({
      element,
      props: {
        slidesPerView: 4,
        spaceBetween: 94,
        slideClass: 'team-slide',
        ...swiperDefaultProps(element),
      },
    }))(document.querySelector('.team-list-wrapper')),
  }

  Object.keys(swipers).forEach((key) => {
    const { element, props } = swipers[key]
    new Swiper(element, props)
  })

  const screensSwiper = swipers.screens.element.swiper

  const scrollButtons = document.querySelectorAll('.scroll-below')
  scrollButtons.forEach(
    (element) => (element.onclick = () => screensSwiper.slideNext()),
  )

  new WheelIndicator({
    elem: swipers.screens.element,
    callback: (e) => {
      switch (e.direction) {
        case 'down':
          setHash(screensSwiper.activeIndex + 1)
          break
        case 'up':
          setHash(screensSwiper.activeIndex - 1)
          break
      }
    },
  })

  window.onhashchange = () => {
    screensSwiper.slideTo(getSlide())
    setHeaderLinkActive()
  }

  function setHeaderLinkActive() {
    headerNavLinks.forEach((element) => {
      if (element.getAttribute('href') === location.hash) {
        element.classList.add('active')
      } else {
        element.classList.remove('active')
      }
    })
  }

  function getSlide() {
    const block = location.hash.replace('#', '') || 'preview'
    return blocks[block].index
  }

  function setHash(number = 0) {
    const nextSlide =
      number < 0
        ? 0
        : number > screensSwiper.slides.length - 1
        ? screensSwiper.slides.length - 1
        : number
    const slide =
      blocks[nextSlide]?.name !== 'preview' ? blocks[nextSlide]?.name : ''
    location.hash = '#' + slide
  }
})

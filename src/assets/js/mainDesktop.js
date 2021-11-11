import Swiper from 'swiper'
import WheelIndicator from './vendors/mouseWheelDetector'
import { processListAnimation } from './mainProcess'
import { desktopApp } from './common/desktop'

export const mainDesktopApp = (blocks) => {
  desktopApp()

  document.querySelector('html').style = `
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent
  `

  document.body.classList.add('desktop-fp')

  document.querySelectorAll('.slider-controls-wrapper').forEach((slider) => {
    slider.innerHTML = `
    <div class="slider-controls"> 
      <div class="arrow arrow--left"></div>
        <div class="slider-controls__info"> 
          <span class="slider-controls__current">6</span>
          <span class="slider-controls__count">14</span></div>
      <div class="arrow arrow--right"></div>
    </div>`
  })

  const headerNavLinks = document.querySelectorAll('a.header-nav__item')

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

  const screens = {
    element: document.querySelector('.screens'),
    isScrolling: false,
    props: {
      direction: 'vertical',
      slidesPerView: 1,
      speed: 800,
      slideClass: 'main',
      wrapperClass: 'screens-wrapper',
      allowTouchMove: false,
      mousewheel: false,
      initialSlide: getSlide(),
      on: {
        slideChangeTransitionStart: () => {
          screens.isScrolling = true
        },
        slideChangeTransitionEnd: () => {
          screens.isScrolling = false
        },
        slideChange: (swiper) => {
          const { processListAnimationPlay, processListAnimationStop } =
            processListAnimation(document.getElementById('process-list'))

          if (blocks[swiper.activeIndex].name === 'process') {
            processListAnimationPlay()
          } else {
            processListAnimationStop()
          }
          themeStore.changeSlide(blocks[swiper.activeIndex])
        },
        afterInit: (swiper) => {
          themeStore.changeSlide(blocks[swiper.activeIndex])
        },
      },
    },
  }

  const { element, props } = screens
  new Swiper(element, props)

  const screensSwiper = screens.element.swiper

  const scrollButtons = document.querySelectorAll('.scroll-below')
  scrollButtons.forEach(
    (element) =>
      (element.onclick = () => setHash(screensSwiper.activeIndex + 1)),
  )

  const setMouseWheelScrolling = WheelIndicator(
    window,
    document,
  )((type) => {
    if (!screens.isScrolling)
      switch (type) {
        case 'down':
          setHash(screensSwiper.activeIndex + 1)
          break
        case 'up':
          setHash(screensSwiper.activeIndex - 1)
          break
      }
  })
  setMouseWheelScrolling(true)

  setHeaderLinkActive()

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
}

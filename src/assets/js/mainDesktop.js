import Swiper, { Mousewheel } from 'swiper'
import { processListAnimation } from './mainProcess'
import { desktopApp } from './common/desktop'

Swiper.use([Mousewheel])

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

  const headerNavLinks = document.querySelectorAll('.header-nav__item')

  class ThemeStore {
    constructor(blocks) {
      this.blocks = blocks
      this.slide = this.blocks.preview
    }
    getCurrentSlide() {
      return this.slide
    }
    getSlide(key) {
      return this.blocks[key]
    }
    setSlide(key) {
      this.slide = this.blocks[key]
      this.onSlideChange()
    }
    onSlideChange() {
      switch (this.slide.theme) {
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
      setHeaderLinkActive()
      window.location.hash = this.slide.url
    }
  }

  const themeStore = new ThemeStore(blocks)

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

  const { processListAnimationPlay, processListAnimationStop } =
    processListAnimation(document.getElementById('process-list'))

  const screens = {
    element: document.querySelector('.screens'),
    props: {
      direction: 'vertical',
      slidesPerView: 1,
      speed: 900,
      slideClass: 'main',
      wrapperClass: 'screens-wrapper',
      allowTouchMove: false,
      mousewheel: false,
      initialSlide: getSlide(),
      mousewheel: {
        thresholdDelta: 40,
        thresholdTime: 200,
      },
      on: {
        slideChange: (swiper) => {
          themeStore.setSlide(swiper.activeIndex)
          if (themeStore.getCurrentSlide().name === 'process') {
            processListAnimationPlay()
          } else {
            processListAnimationStop()
          }
        },
        afterInit: (swiper) => {
          themeStore.setSlide(swiper.activeIndex)
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
      (element.onclick = () => {
        screensSwiper.slideNext()
      }),
  )
  setHeaderLinkActive()

  function setHeaderLinkActive() {
    headerNavLinks.forEach((navLink) => {
      if (navLink.getAttribute('href') === themeStore.getCurrentSlide().url) {
        navLink.classList.add('active')
      } else {
        navLink.classList.remove('active')
      }
    })
  }

  ;[
    document.querySelector('.header-logo'),
    document.querySelector('.header__call .call-button'),
    ...headerNavLinks,
  ].forEach((navLink) => {
    navLink.onclick = (e) => {
      e.preventDefault()
      const slide = navLink.getAttribute('href')?.replace(/#/g, '') || 'preview'
      screensSwiper.slideTo(themeStore.getSlide(slide).index)
    }
  })

  function getSlide() {
    const block = location.hash.replace('#', '') || 'preview'
    return blocks[block].index
  }
}

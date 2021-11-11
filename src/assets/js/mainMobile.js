import { mobileApp } from './common/mobile'
import { mobileMenu } from './common/mobileMenu'
import { mobileScrollTo } from './common/mobileScrollTo'

export const mainMobileApp = () => {
  mobileApp()
  mobileMenu({ menuItemClick: setSlide })

  const resize = () => {
    const previewBackground = document.querySelector('.main__background')
    if (
      previewBackground.clientWidth / previewBackground.clientHeight <
      1920 / 1080
    ) {
      previewBackground
        .querySelector('.background__video')
        .classList.add('is-vertical')
    } else {
      previewBackground
        .querySelector('.background__video')
        .classList.remove('is-vertical')
    }
  }

  resize()
  window.addEventListener('resize', resize)

  function setSlide(href = '') {
    const block = href.split('#')[1]

    const top = document.querySelector(`[data-hash="${block}"`)
    mobileScrollTo(top)
  }

  setSlide(location.hash || '#preview')

  document.querySelector('.header-icon-link').onclick = (e) => {
    e.preventDefault()
    setSlide('#contacts')
  }
}

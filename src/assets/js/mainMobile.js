import { mobileApp } from './common/mobile'
import { mobileMenu } from './common/mobileMenu'
import { mobileScrollTo } from './common/mobileScrollTo'

export const mainMobileApp = () => {
  mobileApp()
  mobileMenu({ menuItemClick: setSlide })

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

  document.querySelectorAll('.services-item__hover').forEach((serviceLink) => {
    serviceLink.onclick = (e) => {
      e.preventDefault()
      setSlide(serviceLink.getAttribute('href'))
    }
  })
}

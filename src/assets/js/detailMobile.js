import { mobileApp } from './common/mobile'
import { mobileMenu } from './common/mobileMenu'
import { mobileScrollTo } from './common/mobileScrollTo'

export const detailMobileApp = () => {
  mobileApp()
  const form = document.querySelector('.detail-form')
  const { menu } = mobileMenu(false)

  document.querySelector('.header-icon-link').onclick = scrollToForm
  menu.querySelector('.call-button').addEventListener('click', scrollToForm)

  function scrollToForm(e) {
    e.preventDefault()
    form && mobileScrollTo(form)
  }
}

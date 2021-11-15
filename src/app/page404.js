import '@styles/common.sass'

import '@styles/pages/page404.sass'

import { deviceType as getDeviceType } from '@scripts/common/deviceType'
import { detailMobileApp } from '@scripts/detailMobile'

document.addEventListener('DOMContentLoaded', () => {
  const deviceType = getDeviceType()

  if (deviceType === 'desktop') {
    document.body.classList.add('desktop-app')
  } else {
    detailMobileApp()
  }
})

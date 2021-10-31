export const mobileApp = () => {
  document.body.classList.add('mobile-app')

  const menu = document.querySelector('.menu-wrapper')
  const menuNav = menu.querySelector('.menu__nav')

  let menuHeight

  const setMenuHeight = (value) => {
    if (typeof value !== 'number') return
    menu.style.height = value
    if (value > 0) {
      const tmr = setTimeout(() => {
        setMenuNavOverflow('auto')
      }, 2000)
      const transitionEnd = () => {
        setMenuNavOverflow('auto')
        clearTimeout(tmr)
      }
      menu.addEventListener('transitionend', transitionEnd, {
        once: true,
      })
    } else {
      setMenuNavOverflow('hidden')
    }
  }

  const setMenuNavOverflow = (value) => {
    menuNav.style.overflow = value
  }

  const resize = () => {
    menuHeight = document.body.clientHeight - menu.offsetTop
    menuStore.opened && menuStore.open()
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

  const menuStore = {
    opened: false,
    close() {
      menuStore.opened = false
      menuStore.callback()
    },
    open() {
      menuStore.opened = true
      menuStore.callback()
    },
    toggle() {
      menuStore.opened = !menuStore.opened
      menuStore.callback()
    },
    callback() {
      if (menuStore.opened) {
        document.body.classList.add('menu-opened')
        setMenuHeight(menuHeight)
      } else {
        document.body.classList.remove('menu-opened')
        setMenuHeight(0)
      }
    },
  }

  resize()
  window.addEventListener('resize', resize)

  const menuButton = document.querySelector('.menu-icon')
  menuButton.onclick = () => menuStore.toggle()

  const menuItems = menu.querySelectorAll('.menu__item')
  menuItems.forEach((button) => {
    button.onclick = () => {
      menuStore.close()
      setSlide(button.href)
    }
  })

  function setSlide(href = '') {
    const block = href.split('#')[1]
    const top = document
      .querySelector(`[data-hash="${block}"`)
      .getBoundingClientRect().top
    const startPos = window.pageYOffset
    const diff = top
    const scrollTo = startPos + diff
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    })
  }
}

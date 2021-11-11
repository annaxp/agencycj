export const mobileMenu = ({ menuItemClick }) => {
  const menu = document.querySelector('.menu-wrapper')
  const menuNav = menu.querySelector('.menu__nav')

  let menuHeight

  const setMenuHeight = (value) => {
    if (typeof value === 'number') {
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
  }

  const setMenuNavOverflow = (value) => {
    menuNav.style.overflow = value
  }

  const resize = () => {
    menuHeight = document.body.clientHeight - menu.offsetTop
    menuStore.opened && menuStore.open()
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

  const menuItems = [
    menu.querySelector('.call-button'),
    ...menu.querySelectorAll('.menu__item'),
  ]
  menuItems.forEach((button) => {
    button.onclick = () => {
      menuStore.close()
      menuItemClick && menuItemClick(button.href)
    }
  })

  return {
    menu,
  }
}

export default mobileMenu

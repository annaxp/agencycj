export const mobileApp = () => {
  document.body.classList.add('mobile-app')

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
      } else {
        document.body.classList.remove('menu-opened')
      }
    },
  }

  const menuButton = document.querySelector('.menu-icon')
  menuButton.onclick = () => menuStore.toggle()
}

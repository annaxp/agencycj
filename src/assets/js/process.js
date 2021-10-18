export const processListAnimation = (element, ms = 1300) => {
  const items = element.querySelectorAll('.process-item')
  const frame = {
    current: items.length,
  }
  setTimeout(() => {
    anim(items, frame)
    setInterval(() => {
      anim(items, frame)
    }, ms)
  }, 300)

  function anim(items, frame) {
    if (frame.count < items.length) {
      items[frame.count].classList.add('active')
      frame.count++
    } else {
      for (let i = 0; i < frame.count; i++) {
        items[i].classList.remove('active')
      }
      frame.count = 0
    }
  }
}

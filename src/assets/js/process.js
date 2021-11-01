export const processListAnimation = (element, ms = 1300) => {
  const items = element?.querySelectorAll('.process-item')

  if (!items.length)
    return {
      processListAnimationPlay: () => undefined,
      processListAnimationStop: () => undefined,
    }

  let frame = items.length

  let interval = {
    current: undefined,
  }

  const play = () =>
    setTimeout(() => {
      anim()
      interval.current = setInterval(() => {
        anim()
      }, ms)
    }, 800)

  const stop = () => {
    clearInterval(interval.current)
    frame = items.length
    anim()
  }

  function anim() {
    if (frame < items.length) {
      items[frame].classList.add('active')
      frame++
    } else {
      for (let i = 0; i < frame; i++) {
        items[i].classList.remove('active')
      }
      frame = 0
    }
  }

  return {
    processListAnimationPlay: play,
    processListAnimationStop: stop,
  }
}

export const mobileScrollTo = (element) => {
  const top = element.getBoundingClientRect().top
  const startPos = window.pageYOffset
  const diff = top
  const scrollTo = startPos + diff
  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth',
  })
}

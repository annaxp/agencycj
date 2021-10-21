import Grain from './vendors/grain.js'
import Swiper from 'swiper'
import { processListAnimation } from './process'

document.addEventListener('DOMContentLoaded', () => {
  processListAnimation(document.getElementById('process-list'))
  new Grain(document.getElementById('grain'))
  const projectsSlider = document.querySelector('.projects-list-wrapper')
  console.log(projectsSlider.querySelector('.arrow--right'))
  const swiper = new Swiper(projectsSlider, {
    speed: 300,
    slidesPerView: 3,
    navigation: {
      nextEl: projectsSlider.querySelector('.arrow--right'),
      prevEl: projectsSlider.querySelector('.arrow--left'),
    },
  })
  swiper.on('init', () => {
    console.log('init')
  })
})

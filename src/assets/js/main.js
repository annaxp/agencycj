import Grain from './vendors/grain.js'
import { processListAnimation } from './process'

document.addEventListener('DOMContentLoaded', () => {
  processListAnimation(document.getElementById('process-list'))
  new Grain(document.getElementById('grain'))
})

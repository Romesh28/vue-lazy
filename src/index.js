import lazyload from './lazyloading'
import { version } from '../package.json'

lazyload.version = version
lazyload.install = function(Vue) {
  Vue.directive(Slider.name, Slider)
}

export default lazyload
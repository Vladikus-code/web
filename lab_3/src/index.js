import Swiper from './swiper.js'
import "./style.css"
//import * from './images'

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    mousewheel: true,
    slidesPerView: 'auto',

    spaceBetween: 30,

    freeMode: true,
    
})

console.log('brbrb');
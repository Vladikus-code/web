import {Swiper, Navigation, Mousewheel, FreeMode} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import "./style.css"

new Swiper('.swiper', {
    //direction: 'horizontal',
    loop: true,
    //loopedSlides: true,

    modules: [Navigation, Mousewheel, FreeMode],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //pagination: true,
    mousewheel: true,
    //slidesPerView: 'auto',

    //spaceBetween: 30,

    //freeMode: true,
    
})

console.log('brbrb');
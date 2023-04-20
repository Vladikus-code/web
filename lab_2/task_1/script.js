new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    mousewheel: true,
    keyboard: true,
    slidesPerView: 'auto',

    spaceBetween: 30,

    freeMode: true,
})
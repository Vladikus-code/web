new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    mousewheel: {
        sensitivity: 0.5
    },

    slidesPerView: 'auto',
    slidesPerGroup: 1,

    spaceBetween: 30,

    freeMode: true,
})
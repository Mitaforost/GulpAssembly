document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper__banner', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        delay: 3000,
        autoplay: true,
        loop: true,
        pagination: {
            el: ".banner-swiper__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.banner-swiper__button-next',
            prevEl: '.banner-swiper__button-prev',
        },
    })
    const swiperTwo = new Swiper('.rooms__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        autoplay: true,
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    })
    const cards = document.querySelectorAll('.products__card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const fadeElement = card.querySelector('.products-card__fade');
            fadeElement.style.display = 'flex';
        });

        card.addEventListener('mouseout', () => {
            const fadeElement = card.querySelector('.products-card__fade');
            fadeElement.style.display = 'none';
        });
    });

});

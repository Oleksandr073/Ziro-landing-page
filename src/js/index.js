import '../index.html';
import '../sass/style.scss';
import { Accordion } from './modules/Accordion';
import videoplayer from './modules/videoplayer';
import Swiper, { Navigation, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


new Accordion('.find__items', {
    transitionSpeed: 400,
    transitionFunction: 'ease',
    title: true,
});

const jobsSwiper = new Swiper('.jobs__slider', {
    modules: [Navigation],
    navigation: {
        nextEl: '.jobs__button--next',
        prevEl: '.jobs__button--prev',
    },
    loop: true,
    spaceBetween: 65,
    slidesPerView: 'auto',
});

const authorsSwiper = new Swiper('.reviews__author', {
    modules: [Navigation, Controller],
    loop: true,
    slidesPerView: 1,
});

const reviewsSwiper = new Swiper('.reviews__wrapper', {
    modules: [Navigation, Controller],
    loop: true,
    navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
    },
    spaceBetween: 65,
    slidesPerView: 1,
});

authorsSwiper.controller.control = reviewsSwiper;
reviewsSwiper.controller.control = authorsSwiper;
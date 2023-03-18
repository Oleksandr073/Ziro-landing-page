import '../index.html';
import '../sass/style.scss';
import { Accordion } from './modules/Accordion';
import videoplayer from './modules/videoplayer';
import Swiper, { Navigation } from 'swiper';
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
import '../index.html';
import '../sass/style.scss';
import { Accordion } from './modules/Accordion';
import videoplayer from './modules/videoplayer';

new Accordion('.find__items', {
    transitionSpeed: 400,
    transitionFunction: 'ease',
    title: true,
});
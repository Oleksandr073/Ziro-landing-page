import { MOBILE_MENU_ATTR } from "../constants/mobileMenuAttr";

export default (function () {
    
    const burgerMenu = document.querySelector('.header__burger.burger');
    const body = document.body;

    burgerMenu.addEventListener('click', burgerOnClickHandler);

    document.addEventListener('click', onClickOutsideHeaderHandler);
    document.addEventListener('touchstart', onClickOutsideHeaderHandler);

    function burgerOnClickHandler(event) {
        if (body.getAttribute(MOBILE_MENU_ATTR) !== null) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function onClickOutsideHeaderHandler(event) {
        if (body.getAttribute(MOBILE_MENU_ATTR) !== null && !event.target.closest('.header')) {
            closeMobileMenu();
        }
    }
    
    function openMobileMenu() {
        burgerMenu.setAttribute('aria-expanded', true);
        body.setAttribute(MOBILE_MENU_ATTR, '');
    }

    function closeMobileMenu() {
        burgerMenu.setAttribute('aria-expanded', false);
        body.removeAttribute(MOBILE_MENU_ATTR);
    }

})();
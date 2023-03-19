import { MOBILE_MENU_ATTR } from "../constants/mobileMenuAttr";

export default (function () {
    
    const burgerMenu = document.querySelector('.header__burger.burger');
    const body = document.body;

    burgerMenu.addEventListener('click', burgerOnClickHandler);
    
    function burgerOnClickHandler(event) {
        if (body.getAttribute(MOBILE_MENU_ATTR) !== null) {
            body.removeAttribute(MOBILE_MENU_ATTR);
        } else {
            body.setAttribute(MOBILE_MENU_ATTR, '');
        }
    }

})();
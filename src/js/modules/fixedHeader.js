import { FIXED_HEADER_CLASS } from "../constants/headerFixedClass";
import { MOBILE_MENU_ATTR } from "../constants/mobileMenuAttr";

export default (function () {

    const header = document.querySelector('.header');
    const heroSectionHeight = document.querySelector('section.hero').offsetHeight;
    const body = document.body;

    window.addEventListener('scroll', fixHeader);

    function fixHeader() {
        if (window.pageYOffset > heroSectionHeight) {
            if (!header.classList.contains(FIXED_HEADER_CLASS)) {
                body.removeAttribute(MOBILE_MENU_ATTR);
            }
            header.classList.add(FIXED_HEADER_CLASS);
        } else {
            if (header.classList.contains(FIXED_HEADER_CLASS)) {
                body.removeAttribute(MOBILE_MENU_ATTR);
            }
            header.classList.remove(FIXED_HEADER_CLASS);
        }
    }

})();
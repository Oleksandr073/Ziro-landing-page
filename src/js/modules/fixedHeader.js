import { HEADER_FIXED_CLASS } from "../constants/headerFixedClass";
import { MOBILE_MENU_ATTR } from "../constants/mobileMenuAttr";

export default (function () {

    const header = document.querySelector('.header');
    const heroSectionHeight = document.querySelector('section.hero').offsetHeight;
    const body = document.body;

    window.addEventListener('scroll', fixHeader);

    function fixHeader() {
        if (window.pageYOffset > heroSectionHeight) {
            if (!header.classList.contains(HEADER_FIXED_CLASS)) {
                body.removeAttribute(MOBILE_MENU_ATTR);
            }
            header.classList.add(HEADER_FIXED_CLASS);
        } else {
            if (header.classList.contains(HEADER_FIXED_CLASS)) {
                body.removeAttribute(MOBILE_MENU_ATTR);
            }
            header.classList.remove(HEADER_FIXED_CLASS);
        }
    }

})();
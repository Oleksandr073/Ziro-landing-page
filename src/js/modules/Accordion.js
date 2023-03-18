export class Accordion {

    static accordionWrapperDataAttr = '[data-accordion]';
    static accordionItemDataAttr = '[data-accordion-item]';
    static accordionButtonDataAttr = '[data-accordion-button]';
    static accordionContentDataAttr = '[data-accordion-text]';
    static accordionActiveClass = 'accordion-active';

    constructor(selector, { transitionSpeed = '300', transitionFunction = 'ease', title = true}) {
        this.transitionSpeed = transitionSpeed;
        this.transitionFunction = transitionFunction;
        this.title = title;

        this.accordionWrapper = document.querySelector(selector + Accordion.accordionWrapperDataAttr);
        this.accordionItems = this.accordionWrapper.querySelectorAll(Accordion.accordionItemDataAttr);
        this.accordionButtons = this.accordionWrapper.querySelectorAll(Accordion.accordionButtonDataAttr);
        this.accordionContents = this.accordionWrapper.querySelectorAll(Accordion.accordionContentDataAttr);

        this.addAttributes();
        this.addStyles();
        this.clickButtons();
        this.setHeightAccordionWrapper();
    }

    addAttributes() {
        this.accordionButtons.forEach((accordionButton, index) => {
            if (this.title) accordionButton.setAttribute('title', 'Show content');
            accordionButton.setAttribute('aria-expanded', 'false');
            accordionButton.setAttribute('aria-controls', `accordion-content-${index + 1}`);
        })

        this.accordionContents.forEach((accordionContent, index) => {
            accordionContent.setAttribute('aria-hidden', 'true');
            accordionContent.setAttribute('id', `accordion-content-${index + 1}`);
        })
    }

    addStyles() {
        const { transitionSpeed, transitionFunction } = this;

        this.accordionContents.forEach(accordionContent => {
            accordionContent.style.overflow = 'hidden';
            accordionContent.style.height = '0px';

            accordionContent.style.visibility = 'hidden';
            accordionContent.style.opacity = '0';

            accordionContent.style.transition = `
                height ${transitionSpeed}ms ${transitionFunction},
                visibility ${transitionSpeed}ms ${transitionFunction},
                opacity ${transitionSpeed}ms ${transitionFunction}
            `;
        });
    }

    setHeightAccordionWrapper() {
        const maxHeightContent =
            Math.max(...Array.from(this.accordionContents)
                .map(accordionContent => accordionContent.scrollHeight));

        this.accordionWrapper.style.minHeight = this.accordionWrapper.scrollHeight + maxHeightContent + 5 + 'px';
    }

    clickButtons() {
        this.accordionButtons.forEach(accordionButton => {
            accordionButton.addEventListener('click', event => {
                const currentButton = event.currentTarget;
                const currentItem = currentButton.closest(Accordion.accordionItemDataAttr);

                if (currentItem.classList.contains(Accordion.accordionActiveClass)) {
                    this.hideContent(currentItem);
                    return;
                }

                const activeItem = this.accordionWrapper.querySelector('.' + Accordion.accordionActiveClass);
                if (activeItem) this.hideContent(activeItem);

                this.showContent(currentItem);
            });
        });

    }

    hideContent(accordionItem) {
        const accordionButton = accordionItem.querySelector(Accordion.accordionButtonDataAttr);
        const accordionContent = accordionItem.querySelector(Accordion.accordionContentDataAttr);

        if (this.title) accordionButton.setAttribute('title', 'Show content');
        accordionButton.setAttribute('aria-expanded', 'false');
        accordionContent.setAttribute('aria-hidden', 'true');
        accordionContent.style.visibility = 'hidden';
        accordionContent.style.opacity = '0';
        accordionContent.style.height = '0px';

        accordionItem.classList.remove(Accordion.accordionActiveClass);
    }

    showContent(accordionItem) {
        const accordionButton = accordionItem.querySelector(Accordion.accordionButtonDataAttr);
        const accordionContent = accordionItem.querySelector(Accordion.accordionContentDataAttr);

        if (this.title) accordionButton.setAttribute('title', 'Hide content');
        accordionButton.setAttribute('aria-expanded', 'true');
        accordionContent.setAttribute('aria-hidden', 'false');
        accordionContent.style.visibility = 'visible';
        accordionContent.style.opacity = '1';
        accordionContent.style.height = `${accordionContent.scrollHeight}px`;

        accordionItem.classList.add(Accordion.accordionActiveClass);
    }

}
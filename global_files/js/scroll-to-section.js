smoothScrollPolyfill();

const scrollTriggers = Array.from(document.getElementsByClassName('trigger-scroll-to-section'));

scrollTriggers.map(trigger => {
    trigger.addEventListener('click', () => {
        scrollToSection(trigger.getAttribute('data-section'));
    })
})

function scrollToSection(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
        offsetTop: -100
    })
}
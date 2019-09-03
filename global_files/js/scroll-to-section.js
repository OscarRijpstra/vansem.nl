smoothScrollPolyfill();

const scrollTriggers = Array.from(document.getElementsByClassName('trigger-scroll-to-section'));

scrollTriggers.map(trigger => {
    trigger.addEventListener('click', () => {
        changeNavigationSelector(trigger.getAttribute('data-section'));
        scrollToSection(trigger.getAttribute('data-section'));
    })
})

function scrollToSection(section, offset) {
    const element = document.getElementById(section);
    console.log(Number(offset))
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    })
}

function changeNavigationSelector(section) {
    Array.from(document.getElementsByClassName('navigation__item-desktop')).map(navItem => {
        if (navItem.getAttribute('data-section') == section) navItem.classList.add('navigation__item-current')
        else navItem.classList.remove('navigation__item-current')
    })
}
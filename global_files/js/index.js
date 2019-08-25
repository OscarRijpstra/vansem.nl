const navigationToggle = Array.from(document.getElementsByClassName('toggle__navigation-items'));
const navigationItems = Array.from(document.getElementsByClassName('navigation__items'));

navigationToggle.map(function(toggle){
    toggle.addEventListener('click', toggleNavigationItems);
})

function toggleNavigationItems() {
    navigationItems.map(function(naviation){
        naviation.classList.toggle('navigation__items-hidden');
    })    
}
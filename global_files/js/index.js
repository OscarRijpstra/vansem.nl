const navigationToggle = Array.from(document.getElementsByClassName('toggle__navigation-items'));
const navigationItems = Array.from(document.getElementsByClassName('navigation__items'));
const phoneClickEvent = Array.from(document.getElementsByClassName('google-phone-event'));
const emailClickEvent = Array.from(document.getElementsByClassName('google-email-event'));

navigationToggle.map(function(toggle){
    toggle.addEventListener('click', toggleNavigationItems);
})

phoneClickEvent.map(function (phone){phone.addEventListener('click', function() {
    gtag('event', 'Klik', {
        'event_category': 'Telefoon'
    });
})});

emailClickEvent.map(function (email) {email.addEventListener('click', function() {
    gtag('event', 'Klik', {
        'event_category': 'Email'
    });
})});

function toggleNavigationItems() {
    navigationItems.map(function(naviation){
        naviation.classList.toggle('navigation__items-hidden');
    })    
}
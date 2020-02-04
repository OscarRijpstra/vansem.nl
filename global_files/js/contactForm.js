const form = document.getElementsByClassName('form')[0];
const recaptchaKey = form.getAttribute('recaptchakey');
const baseUrl = form.getAttribute('data-baseUrl');
const errorMessage = document.getElementsByClassName('error__message')[0];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm();  
})

function getRecptchaResponse() {
    return new Promise(function(resolve, reject) {
        grecaptcha.ready(function() {
            grecaptcha.execute(recaptchaKey, {action: 'contact'})
            .then(function(token){ resolve(token) })
        });
    });
} 

async function submitForm() {
    const recaptcha_response = await getRecptchaResponse();
    const submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;

    const fullname = form.querySelector('[name="fullname"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const email = form.querySelector('[name="email"]').value;
    const question = form.querySelector('[name="question"]').value;

    const resp = await fetch(`https://sdowerkt.herokuapp.com/vansem.nl/contact?page=${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname,
            phone,
            email,
            question,
            recaptcha_response
        })
    })
    
    const message = await resp.json();

    if (message.status == 'ok') return window.location.replace("/contact-succes");

    if (message.status == 'invalid') {
        errorMessage.innerText = `Foutmelding: ${message.error}`;
        submitButton.disabled = false;
    }
}

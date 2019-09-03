const form = document.getElementsByClassName('form')[0];
const recaptchaInput = form.getElementsByClassName('recaptcha__input')[0];
const recaptchaKey = form.getAttribute('recaptchakey');

form.addEventListener('submit', e => {
    e.preventDefault();

    grecaptcha.ready(function() {
        grecaptcha.execute(recaptchaKey, {action: 'contact'}).then(function(token) {
            recaptchaInput.value = token;
            form.submit();
        });
    });
})
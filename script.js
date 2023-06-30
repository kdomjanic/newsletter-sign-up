// Subscribe to Newsletter
function subscribeToNewsletter() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('emailInput');
    const emailWarning = document.getElementById('email-warning')

    if (!emailInput) {
        alert('Please provide email')
    } else if (!emailPattern.test(emailInput)) {
        emailInput.classList.add('invalid');
        emailWarning.removeAttribute('hidden')
    }   else {
        emailInput.classList.remove('invalid');
        emailWarning.setAttribute('hidden', '')
    }
}
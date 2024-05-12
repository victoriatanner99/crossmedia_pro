function checkInput() {
    var input = document.getElementById('feedbackInput').value;
    if (input === 'G10') {
        window.location.href = './checkpoint.html'; // Rätt kod, skicka till success-sidan
    } else {
        alert('Fel kod, försök igen.'); // Felaktig kod, visa ett felmeddelande
    }
}

function autoTab(current, next) {
    if (current.value.length >= current.maxLength) {
        document.getElementById(next).focus();
    }
}

function checkFullWord() {
    if (document.getElementById('letter5').value.length === 1) {
        checkAnswer();
    }
}

function checkAnswer() {
    var word = '';
    for (var i = 1; i <= 5; i++) {
        word += document.getElementById('letter' + i).value;
    }
    if (word.toLowerCase() === 'dator') {
        document.body.style.backgroundColor = 'green';
        alert('Rätt svar! Bra jobbat!');
        window.location.href = './Rebus.html';
    } else {
        alert('Fel svar, försök igen!');
    }
}

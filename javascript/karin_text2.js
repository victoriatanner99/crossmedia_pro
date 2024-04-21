document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    const textContainer = document.getElementById('textContainer');
    const nextPageButton = document.getElementById('nextPageButton');
    const fullText = "Det är den mest värdefulla boken i i hela biblioteket, ni måste hjälpa mig hitta tjuven! Snälla ring tillbaka till mig så ska jag förklara mer, mitt nummer är 0701234….";
    const words = fullText.split(' ');
    let currentWordIndex = 0;

    // Immediately start audio playback and text display when the page is loaded
    audio.play();
    showTextContinuously();

    nextPageButton.addEventListener('click', function() {
        window.location.href = './Ring_karin.html'; 
    });

    function showTextContinuously() {
        const intervalTime = (audio.duration / words.length * 1000) || 200; // Beräkna tid per ord, default till 200ms om duration är 0
        const intervalId = setInterval(() => {
            if (audio.paused || audio.ended || currentWordIndex >= words.length) {
                clearInterval(intervalId);
            } else {
                textContainer.textContent += words[currentWordIndex] + ' ';
                currentWordIndex++;
            }
        }, intervalTime);
    }
});

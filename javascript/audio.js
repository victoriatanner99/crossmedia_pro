document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    const textContainer = document.getElementById('textContainer');
    const vibratingIcon = document.getElementById('vibratingIcon');
    const fullText = "Hej på dig, det dags att ha roligt lite. Om du vill fortsätta spela med mig du måste ringa Karin Fahren på ett telefonnummer där de tre sista siffrorna saknas. Karins telefonnummer är 0712345678.";
    const words = fullText.split(' ');
    let currentWordIndex = 0;

    // Startar vibrations-effekten när sidan laddas
    vibratingIcon.classList.add('vibrating');

    // Hantera klick på ikonen för att spela/pausa ljud och växla vibration
    vibratingIcon.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            vibratingIcon.classList.remove('vibrating'); // Stoppa vibrationen
            showTextContinuously(); // Starta textvisningen
        } else {
            audio.pause();
            vibratingIcon.classList.add('vibrating'); // Starta vibrationen
            textContainer.textContent = ''; // Rensar texten vid paus
            currentWordIndex = 0; // Återställer ordindexet
        }
    });

    function showTextContinuously() {
        const intervalTime = audio.duration / words.length * 1000; // Beräkna tid per ord
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

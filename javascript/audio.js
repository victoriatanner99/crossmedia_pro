window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    document.getElementById('usernameDisplay').textContent = username;

    const audio = new Audio('audio/ballad.mp3');
    const currentTimeElement = document.getElementById('currentTime');
    const totalTimeElement = document.getElementById('totalTime');
    const playButton = document.getElementById('playButton');

    playButton.classList.add('vibrating'); // Starta vibrationen när sidan laddas

    audio.addEventListener('loadedmetadata', () => {
        totalTimeElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeElement.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
        playButton.classList.add('vibrating'); // Återaktivera vibrationen när ljudet är klart
    });

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => console.error("Kunde inte spela upp ljudet: ", error));
            this.classList.remove('vibrating'); // Stoppa vibrationen när ljudet spelas
            this.src = './images/phone_.png';
        } else {
            audio.pause();
            this.classList.add('vibrating'); // Starta vibrationen när ljudet pausas
            this.src = './images/phone_.png';
        }
    });
};

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

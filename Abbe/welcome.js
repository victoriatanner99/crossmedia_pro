window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    document.getElementById('usernameDisplay').textContent = username;

    const audio = new Audio('audio/ballad.mp3');
    const currentTimeElement = document.getElementById('currentTime');
    const totalTimeElement = document.getElementById('totalTime');
    const container = document.querySelector('.container');

    audio.addEventListener('loadedmetadata', () => {
        totalTimeElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeElement.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
        container.innerHTML += `<button id="nextPageButton">Gå till nästa sida</button>`;
        document.getElementById('nextPageButton').addEventListener('click', () => {
            window.location.href = 'next.html'; 
        });
    });

    document.getElementById('playButton').addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => console.error("Kunde inte spela upp ljudet: ", error));
        } else {
            audio.pause();
        }
    });
};

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    const vibratingIcon = document.getElementById('vibratingIcon');

    // Startar vibrations-effekten när sidan laddas
    vibratingIcon.classList.add('vibrating');

    // Start playing the audio immediately after the page loads
    audio.play();

 
        vibratingIcon.addEventListener('click', () => {
            window.location.href = './karin_text1.html'; 
        });
    
});

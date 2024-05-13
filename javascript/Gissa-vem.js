const images = [
    { src: './images/polismaster 1_512w.png', correct: false },
    { src: './images/BK.png', correct: true },
    { src: './images/polismaster 1_512w.png', correct: false }
   
];

function loadImages() {
    const container = document.getElementById('images');
    container.innerHTML = ''; // Rensa tidigare bilder
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.style.width = '100px'; // Storlek på bild
        img.style.height = '100px';
        img.style.margin = '10px';
        img.onclick = () => checkAnswer(index);
        container.appendChild(img);
    });
}

/* function checkAnswer(index) {
    const message = images[index].correct ? "Rätt svar!" : "Fel svar, försök igen!";
    alert(message);
    document.getElementById('next').style.display = images[index].correct ? 'block' : 'none';
} */

document.getElementById('next').onclick = function() {
    // Här kan du ladda nästa sida eller nästa fråga
    window.location.reload(); // Laddar om sidan, men du kan ändra detta till att navigera till en annan sida
};

function checkAnswer(index) {
    const messageText = document.getElementById('messageText');
    const modal = document.getElementById('messageModal');
    const nextButton = document.getElementById('next');

    messageText.textContent = images[index].correct ? "Rätt svar!" : "Fel svar, försök igen!";
    modal.style.display = 'block';

    nextButton.onclick = function() {
        modal.style.display = 'none'; // Dölj modalen
        if (images[index].correct) {
            // Navigera till nästa sida
            window.location.href = 'next_page.html'; // Ändra till den faktiska URL:n för nästa sida
        } else {
            // Ladda om sidan för ett nytt försök
            window.location.reload();
        }
    };
}


// Initiera spelet
loadImages();

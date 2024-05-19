const images = [
    { src: './images/prästen 1.png', correct: false, text: 'Namn: Prästen Ålder: Vill inte säga Misstänktsamt: Verkar ha ekonomiska problem. Stor rock med många fickor. ' },
    { src: './images/welmer_frisk 1.png', correct: true, text: 'Namn: Welmer Frisk Ålder: 34 år Misstänktsamt: Var personen som lånade boken senast. Tidigare dömd för snatteri.' },
    { src: './images/beatrice_image.png', correct: false, text: 'Namn: Beatrice Holm Ålder: 73 år Misstänktsamt: Bitter och tycker att hennes bok är mycket bättre än “Under Himmelens fäste”' }
];

function loadImages() {
    const container = document.getElementById('images');
    container.innerHTML = ''; // Rensa tidigare bilder

    images.forEach((image, index) => {
        const box = document.createElement('div');
        box.classList.add('image-box');

        const img = document.createElement('img');
        img.src = image.src;
        img.style.width = '100px'; // Storlek på bild
        img.style.height = '100px';
        img.style.margin = '10px';
        img.onclick = () => checkAnswer(index);

        const text = document.createElement('p');
        text.textContent = image.text;

        box.appendChild(img);
        box.appendChild(text);
        container.appendChild(box);
    });
}

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

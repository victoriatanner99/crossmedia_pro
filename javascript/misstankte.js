

const images = [
    { src: './images/BK.png', correct: true },
    { src: './images/polismaster 1_512w.png', correct: false },
    { src: './images/BK.png', correct: true },
    { src: './images/polismaster 1_512w.png', correct: false },
    { src: './images/BK.png', correct: true },
    { src: './images/polismaster 1_512w.png', correct: false }
];
function setupGame() {
    const container = document.getElementById('images');
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Bild ${index + 1}`;
        img.draggable = true;
        img.id = `drag${index}`;
        img.ondragstart = (event) => {
            event.dataTransfer.setData("text", event.target.id);
        };
        container.appendChild(img);
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropZone = event.target;
    
    // Kontrollera att drop-zone inte redan innehåller en bild
    if (dropZone.classList.contains('drop-area') && dropZone.children.length === 0) {
        dropZone.appendChild(document.getElementById(data));
    }
}

function checkSelection() {
    const dropAreas = document.querySelectorAll('.drop-area img');
    const isCorrect = Array.from(dropAreas).every(img => images[parseInt(img.id.replace('drag', ''))].correct);
    
    const result = document.getElementById('result');
    if (isCorrect && dropAreas.length === 3) {
        result.textContent = 'Grattis, du valde rätt bilder!';
        // Gå till nästa sida eller ladda nästa nivå här
        window.location.href = 'next_page.html'; // Ändra URL till din nästa sida
    } else {
        result.textContent = 'Försök igen, du valde inte rätt bilder.';
    }
}

window.onload = setupGame;

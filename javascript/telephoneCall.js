"use strict";

function renderTelephonePage(event) {
    document.querySelector("body").innerHTML = "";
    let  telephonePageBackground = document.createElement("div");
    telephonePageBackground.setAttribute("id", "telephonePageBackground");
    document.querySelector("body").appendChild(telephonePageBackground);

    let topQuestionButton = document.createElement("div");
    topQuestionButton.setAttribute("id", "topQuestionButtonTelephonePage");
    topQuestionButton.textContent = "?";
    telephonePageBackground.appendChild(topQuestionButton);

    topQuestionButton.addEventListener("click", explainHowToListen);

    let landlineTelephone = document.createElement("div");
    landlineTelephone.setAttribute("id", "landlineTelephone");
    telephonePageBackground.appendChild(landlineTelephone);
}

function explainHowToListen(event) {
    if(!document.querySelector("div#overlayTelephonePage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayTelephonePage");
        document.querySelector("body").appendChild(overlay);
        document.querySelector("div#topQuestionButtonTelephonePage").style.zIndex = 1;

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerTelephonePage");
        overlay.appendChild(infoContainer);
        let infoContainerOverlay = document.createElement("div");
        infoContainerOverlay.setAttribute("id", "infoContainerOverlay");

        infoContainer.innerHTML = 
        `
        <p id="textInfoBoxTelephonePage">Tryck på telefonen <br>  
        för att avlyssna röstmeddelandet</p> 
        `;

        infoContainer.appendChild(infoContainerOverlay);

    } else {
        document.querySelector("div#overlayTelephonePage").remove();
    }
}

function telephoneStartsToRing() {
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
}
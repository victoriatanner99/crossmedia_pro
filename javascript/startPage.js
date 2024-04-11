"use strict";

function renderStartPage() {
    let body = document.querySelector("body");
    let startPageBackgroundDiv = document.createElement("div");
    startPageBackgroundDiv.setAttribute("id", "startPageBackground");
    body.appendChild(startPageBackgroundDiv);

    let lasseMajaImageContainer = document.createElement("div");
    lasseMajaImageContainer.setAttribute("id", "lasseMajaImageContainerStartP");
    startPageBackgroundDiv.appendChild(lasseMajaImageContainer);
    let lasseMajaImage = document.createElement("img");
    lasseMajaImage.setAttribute("id", "lasseMajaImageStartP");
    lasseMajaImage.setAttribute("src", "images/lassemaja_512h.png");
    lasseMajaImageContainer.appendChild(lasseMajaImage);

    let topQuestionButton = document.createElement("div");
    topQuestionButton.setAttribute("id", "topQuestionButton");
    topQuestionButton.textContent = "?";
    startPageBackgroundDiv.prepend(topQuestionButton);

    topQuestionButton.addEventListener("click", explainTheGame);

    let welcomeContainer = document.createElement("div");
    welcomeContainer.setAttribute("id", "welcomeContainer");
    startPageBackgroundDiv.appendChild(welcomeContainer);

    let welcomeText = document.createElement("h2");
    welcomeText.setAttribute("id", "welcomeText");
    welcomeText.textContent = "Välkommen";
    welcomeContainer.appendChild(welcomeText);

    let registerButton = document.createElement("button");
    registerButton.setAttribute("id", "registerButton");
    registerButton.textContent = "Registrera";
    welcomeContainer.appendChild(registerButton);

    registerButton.addEventListener("click", saveUsername);

}

function saveUsername(event) {

}

function explainTheGame(event) {
    if(!document.querySelector("div#overlayStartPage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayStartPage");
        document.querySelector("body").appendChild(overlay);
        document.querySelector("div#topQuestionButton").style.zIndex = 1;

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerStartPage");
        overlay.appendChild(infoContainer);
        infoContainer.innerHTML = 
        `
        <p id="firstParagraphInfoBox">Lassemajas <br> detektivspel är <br> framtaget av studenter <br> på Malmö Universitet</p> 
        <p id="secondParagraphInfoBox">Tryck på registrera för <br> att börja spela</p>
        `

    } else {
        document.querySelector("div#overlayStartPage").remove();
    }
   
}


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
    
}


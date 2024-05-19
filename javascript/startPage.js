"use strict";

function renderStartPage() {
    let body = document.querySelector("body");
    let startPageBackgroundDiv = document.createElement("div");
    startPageBackgroundDiv.setAttribute("id", "startPageBackground");
    body.appendChild(startPageBackgroundDiv);

    let lasseMajaImageContainer = document.createElement("div");
    lasseMajaImageContainer.setAttribute("id", "lasseMajaImageContainerStartPage");
    startPageBackgroundDiv.appendChild(lasseMajaImageContainer);
    let lasseMajaImage = document.createElement("img");
    lasseMajaImage.setAttribute("id", "lasseMajaImageStartPage");
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
    registerButton.setAttribute("type", "button");
    registerButton.textContent = "Registrera";
    welcomeContainer.appendChild(registerButton);

    registerButton.addEventListener("click", displayRegisterInputs);
}

function displayRegisterInputs(event) {
    document.querySelector("div#lasseMajaImageContainerStartPage").remove();
    document.querySelector("div#welcomeContainer").remove();
    let createUsernameContainer = document.createElement("div");
    createUsernameContainer.setAttribute("id", "createUsernameContainer");
    document.querySelector("div#startPageBackground").appendChild(createUsernameContainer);

    createUsernameContainer.innerHTML = 
    `
    <img src="images/polismaster\ 1_512w.png" id="policeStartPage">
    <h2 id="chooseUsernameStartPage">Välj <br> Användarnamn</h2>
    <input type="text" id="firstNameInput" placeholder="Förnamn">
    <input type="text" id="lastNameInput" placeholder="Efternamn">
    <button type="button" id="saveUsernameButton"></button>
    `;

    document.querySelector("#firstNameInput").classList.add("usernameInputs");
    document.querySelector("#lastNameInput").classList.add("usernameInputs");
    document.querySelector("button#saveUsernameButton").textContent = "Klar";

    document.querySelector("button#saveUsernameButton").addEventListener("click", saveUsername);

}

function saveUsername(event) {
    let nameOfUser = document.querySelector("input#firstNameInput").value;
    let potentialLastName = document.querySelector("input#lastNameInput").value;

    if(nameOfUser === "" || nameOfUser === " ") {
        return;
    } else {
        if(potentialLastName === "") {
            nameOfUser = nameOfUser.trim();
            window.localStorage.setItem("username", `${nameOfUser}`);
            if(nameOfUser === "") {
                return;
            }
            console.log(localStorage.getItem("username"));
        } else {
            let fullNameToSave = nameOfUser.trim() + " " + potentialLastName.trim();
            if(fullNameToSave === " ") {
                return;
            }
            window.localStorage.setItem("username", fullNameToSave);
            console.log(localStorage.getItem("username"));
        }
    }

    renderIntroPage();
}

function explainTheGame(event) {
    if(!document.querySelector("div#overlayStartPage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayStartPage");
        document.querySelector("div#startPageBackground").appendChild(overlay);
        document.querySelector("div#topQuestionButton").style.zIndex = 1;

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerStartPage");
        overlay.appendChild(infoContainer);
        infoContainer.innerHTML = 
        `
        <p id="firstParagraphInfoBox">Lassemajas <br> detektivspel är <br> 
        framtaget av studenter <br> på Malmö Universitet</p> 
        <p id="secondParagraphInfoBox">Tryck på registrera för <br> att börja spela!</p>
        `;

    } else {
        document.querySelector("div#overlayStartPage").remove();
    }
}


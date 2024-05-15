"use strict";

function renderRebusPage() {
    /*screen.orientation.addEventListener("change", (event) => {
        console.log(event);
        console.log(screen.orientation);

        showContentForOrientation();
    });*/

    let body = document.querySelector("body");

    window.addEventListener("resize", (event) => {
        showContentForOrientation();
    });

    showContentForOrientation();

    function showContentForOrientation() {

        if(window.matchMedia("(orientation: landscape)").matches) {

            body.innerHTML = "";
            let rebusPageBackground = document.createElement("div");
            rebusPageBackground.setAttribute("id", "rebusPageBackground");
            body.appendChild(rebusPageBackground);
            
            let rightFacingFlowers = document.createElement("img");
            let leftFacingFlowers = document.createElement("img");
            rightFacingFlowers.setAttribute("id", "rightFacingFlowersRebusPage");
            leftFacingFlowers.setAttribute("id", "leftFacingFlowersRebusPage");
            rightFacingFlowers.setAttribute("src", "images/purpleFlowersRightFacing_512w.png");
            leftFacingFlowers.setAttribute("src", "images/purpleFlowersLeftFacing_512w.png");
        
            let clothesline = document.createElement("img");
            clothesline.setAttribute("id", "clotheslineRebusPage");
            clothesline.setAttribute("src", "images/Klädlina_1x.png");
        
            let bubblesPicture = document.createElement("img");
            bubblesPicture.setAttribute("id", "bubblesPictureRebusPage");
            bubblesPicture.setAttribute("src", "images/BUBBLOR_512h.png");
        
            let tentPicture = document.createElement("img");
            tentPicture.setAttribute("id", "tentPictureRebusPage");
            tentPicture.setAttribute("src", "images/TÄLT_512h.png");
        
            let frogPicture = document.createElement("img");
            frogPicture.setAttribute("id", "frogPictureRebusPage");
            frogPicture.setAttribute("src", "images/GRODA_512h.png");
        
            rebusPageBackground.appendChild(rightFacingFlowers);
            rebusPageBackground.appendChild(leftFacingFlowers);
            rebusPageBackground.appendChild(clothesline);
            rebusPageBackground.append(bubblesPicture, tentPicture, frogPicture);

            let firstPlusSign = document.createElement("div");
            let secondPlusSign = document.createElement("div");
            firstPlusSign.setAttribute("id", "firstPlusSignRebusPage");
            secondPlusSign.setAttribute("id", "secondPlusSignRebusPage");

            /*firstPlusSign.setAttribute("src", "images/+_512h.png");
            secondPlusSign.setAttribute("src", "images/+_512h.png");*/
            
            firstPlusSign.classList.add("plusSignRebusPage");
            secondPlusSign.classList.add("plusSignRebusPage");
            firstPlusSign.textContent = "+";
            secondPlusSign.textContent = "+";
            rebusPageBackground.append(firstPlusSign, secondPlusSign);
        
            let rebusInputField = document.createElement("input");
            rebusInputField.setAttribute("type", "text");
            rebusInputField.setAttribute("id", "rebusInputField");
        
            let rebusButton = document.createElement("button");
            rebusButton.setAttribute("id", "rebusButton");
            rebusButton.addEventListener("click", checkRebus);
        
            rebusPageBackground.append(rebusInputField, rebusButton);
        
            let arrowImage = document.createElement("img");
            arrowImage.setAttribute("id", "arrowImageRebusPage");
            arrowImage.setAttribute("src", "images/arrow_512h.png");
            rebusButton.appendChild(arrowImage);
        
            /*body.addEventListener("click", () => {
                body.requestFullscreen().catch((error) => {
                    console.log(error);
        
                });
                screen.orientation
                    .lock("landscape")
                    .then(() => {
                        console.log("landscape?")
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });*/
        } else {
            body.innerHTML = "";
            let turnMobileDeviceBackground = document.createElement("div");
            turnMobileDeviceBackground.setAttribute("id", "turnMobileDeviceBackgroundBefore")
            document.querySelector("body").appendChild(turnMobileDeviceBackground);
            let turnMobileDeviceSign = document.createElement("img");
            turnMobileDeviceSign.setAttribute("id", "turnMobileDeviceSignBefore");
            turnMobileDeviceSign.setAttribute("src", "images/flipPhone_512w.png");
            turnMobileDeviceBackground.appendChild(turnMobileDeviceSign);
        }
    } 

    //Denna nedan kan vara användbar
    /*if(screen.availWidth > screen.availHeight) {
    }*/
}


function checkRebus(event) {
    let rebusInputField = document.querySelector("input#rebusInputField");
    let userAnswer = rebusInputField.value.trim();

    if(userAnswer.toLowerCase() === "dator") {
        rebusInputField.style.borderColor = "#A6E639";
        setTimeout(renderLoginInfo, 1800);
    } else {
        rebusInputField.style.borderColor = "#FF5656";
    }
}


function renderLoginInfo() {
    window.addEventListener("resize", (event) => {
        showContentForOrientation();
    });

    showContentForOrientation();

    function showContentForOrientation() {

        if(window.matchMedia("(orientation: portrait)").matches) {
            document.querySelector("body").innerHTML = "";
            let loginInfoBackground = document.createElement("div");
            loginInfoBackground.setAttribute("id", "loginInfoPage");
            document.querySelector("body").appendChild(loginInfoBackground);
            let tapedNote = document.createElement("div");
            tapedNote.setAttribute("id", "tapedNoteInfoPage");
            loginInfoBackground.appendChild(tapedNote);

            tapedNote.innerHTML = `
            <h1 id="successHeadingLoginInfoPage">Du klarade rebusen!</h1>
            <h3 id="loginInfoHeadingLoginInfoPage">Inloggnings-uppgifter</h3>
            <div id="usernameLoginInfoPage">Jane Doe</div>
            <div id="passwordLoginInfoPage">lassemaja123</div>
            <div id="webAddressLoginInfoPage">www.forskarrummetvalleby.se</div>
            <button id="doneButtonLoginInfoPage" type="button">Klar</button>
            `;

            let topQuestionButton = document.createElement("div");
            topQuestionButton.setAttribute("id", "infoButtonLoginInfoPage");
            topQuestionButton.textContent = "?";
            loginInfoBackground.prepend(topQuestionButton);
            topQuestionButton.addEventListener("click", explainHowToFindWebsite);

            document.querySelector("button#doneButtonLoginInfoPage").addEventListener("click", (event) => {
                renderDragSuspectsPage();
            });
        
        } else {
            document.querySelector("body").innerHTML = "";
            let turnMobileDeviceBackground = document.createElement("div");
            turnMobileDeviceBackground.setAttribute("id", "turnMobileDeviceBackgroundAfter")
            document.querySelector("body").appendChild(turnMobileDeviceBackground);
            let turnMobileDeviceSign = document.createElement("img");
            turnMobileDeviceSign.setAttribute("id", "turnMobileDeviceSignAfter");
            turnMobileDeviceSign.setAttribute("src", "images/flipPhone_512w.png");
            turnMobileDeviceBackground.appendChild(turnMobileDeviceSign);
        }
    }
}

function explainHowToFindWebsite(event) {
    if(!document.querySelector("div#overlayLoginInfoPage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayLoginInfoPage");
        document.querySelector("body").appendChild(overlay);
        document.querySelector("div#infoButtonLoginInfoPage").style.zIndex = 1;

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerLoginInfoPage");
        overlay.appendChild(infoContainer);

        infoContainer.innerHTML =
        `
        Tips! Ta dig till en <br> 
        dator för att logga <br> 
        in & få tillgång till <br> hemsidan.
        `;

    } else {
        document.querySelector("div#overlayLoginInfoPage").remove();
    }
}
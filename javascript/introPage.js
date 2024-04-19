"use strict";

function renderIntroPage() {
    document.querySelector("div#startPageBackground").remove();
    let body = document.querySelector("body");
    let introPageContainer = document.createElement("div");
    introPageContainer.setAttribute("id", "introPageContainer");
    body.appendChild(introPageContainer);

    let introPageContainerOverlay = document.createElement("div");
    introPageContainerOverlay.setAttribute("id", "introPageContainerOverlay");
    body.appendChild(introPageContainerOverlay);

    let leafsImage = document.createElement("img");
    leafsImage.setAttribute("id", "leafsImageIntroPage");
    leafsImage.setAttribute("src", "images/leafsTree_512w.png");
    introPageContainer.appendChild(leafsImage);

    let lasseMajaSign = document.createElement("img");
    lasseMajaSign.setAttribute("id", "lasseMajaSignIntroPage");
    lasseMajaSign.setAttribute("src", "images/lasseMajaSign_512w.png");
    introPageContainer.appendChild(lasseMajaSign);

    let lasseMajaImage = document.createElement("img");
    lasseMajaImage.setAttribute("id", "lasseMajaImageIntroPage");
    lasseMajaImage.setAttribute("src", "images/lasseMajaImage_512h.png");
    introPageContainer.appendChild(lasseMajaImage);

    let speechBubble = document.createElement("div");
    speechBubble.setAttribute("id", "speechBubbleIntroPage");
    introPageContainer.appendChild(speechBubble);

    dynamicSpeechBubble(speechBubble);
}

function dynamicSpeechBubble(speechBubble) {
    
    let firstStringArray = "Hej! Lasse & Maja här, från LasseMajas Detektivbyrå!".split(" ");

    let i = 0;
    let speechBubbleInterval = setInterval(function() {
        if(i === firstStringArray.length) {
            let continueArrow = document.createElement("img");
            continueArrow.setAttribute("id", "continueArrowIntroPage");
            continueArrow.setAttribute("src", "images/arrow_512w.png");
            document.querySelector("div#introPageContainer").appendChild(continueArrow);
            continueArrow.addEventListener("click", nextIntroPage);

            clearInterval(speechBubbleInterval);
        } else {
            speechBubble.innerHTML += firstStringArray[i] + " ";
        }
        i++;
    }, 100);
}

function nextIntroPage(event) {
    if(event.currentTarget.previousSibling.id === "speechBubbleIntroPage") {
        document.querySelector("div#speechBubbleIntroPage").setAttribute("id", "speechBubbleIntroPage2");
        let speechBubble = document.querySelector("div#speechBubbleIntroPage2");
        speechBubble.innerHTML = "";
        document.querySelector("img#continueArrowIntroPage").style.visibility = "hidden";
        let introPage2TextArray = 
        `Vi behöver din hjälp med att lösa ett mysterium! Det har skett en stöld i Malmö. Vi kan tyvärr inte befinna oss på plats, men vi är med dig på resan via appen för att hjälpa dig.`.split(" ");

        let i = 0;
        let speechBubbleInterval = setInterval(function() {
            if(i === introPage2TextArray.length) {
                document.querySelector("img#continueArrowIntroPage").setAttribute("id", "continueArrowIntroPage2");
                document.querySelector("img#continueArrowIntroPage2").style.visibility = "visible";
                /*
                let imageContainer = document.createElement("div");
                imageContainer.setAttribute("id", "arrowImageContainer");
                let arrowImage = document.querySelector("img#continueArrowIntroPage2");
                imageContainer.appendChild(arrowImage);
                document.querySelector("div#introPageContainer").appendChild(imageContainer);
                */

                clearInterval(speechBubbleInterval);
            } else {
                speechBubble.innerHTML += introPage2TextArray[i] + " ";
            }
            i++;
        }, 100);
    } else {
        document.querySelector("div#speechBubbleIntroPage2").setAttribute("id", "speechBubbleIntroPage3");
        let speechBubble = document.querySelector("div#speechBubbleIntroPage3");
        speechBubble.innerHTML = "";
        document.querySelector("img#continueArrowIntroPage2").style.visibility = "hidden";

        let introPage3TextArray = 
        `Bibliotekarie Karin Fahlen ringde oss tidigare, vi borde lyssna på hennes röstmeddelande för att starta vår utredning. `.split(" ");

        let i = 0;
        let speechBubbleInterval = setInterval(function() {
            if(i === introPage3TextArray.length) {
                document.querySelector("img#continueArrowIntroPage2").setAttribute("id", "continueArrowIntroPage3");
                document.querySelector("img#continueArrowIntroPage3").style.visibility = "visible";
                document.querySelector("img#continueArrowIntroPage3").removeEventListener("click", nextIntroPage);
                document.querySelector("img#continueArrowIntroPage3").addEventListener("click", renderTelephonePage);

                clearInterval(speechBubbleInterval);
            } else {
                speechBubble.innerHTML += introPage3TextArray[i] + " ";
            }
            i++;
        }, 100);
    } 
}
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
            continueArrow.setAttribute("src", "images/arrow_512h.png");
            document.querySelector("div#introPageContainer").appendChild(continueArrow);
            clearInterval(speechBubbleInterval);
        } else {
            speechBubble.innerHTML += firstStringArray[i] + " ";
        }
        i++;
    }, 300);
}
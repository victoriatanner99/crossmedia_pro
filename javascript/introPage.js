"use strict";

function renderIntroPage() {
    let body = document.querySelector("body");
    body.innerHTML = "";
    let introPageContainer = document.createElement("div");
    introPageContainer.setAttribute("id", "introPageContainer");
    body.appendChild(introPageContainer);

    let introPageContainerOverlay = document.createElement("div");
    introPageContainerOverlay.setAttribute("id", "introPageContainerOverlay");
    introPageContainer.appendChild(introPageContainerOverlay);

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

    speechBubble.innerHTML = 
    `
    <p id="textIntroPages"></p>
    <img id="continueArrowIntroPage" src="images/arrow_4x.png">
    `;

    document.querySelector("img#continueArrowIntroPage").style.visibility = "collapse";
    let paragraph = document.querySelector("p#textIntroPages");

    dynamicSpeechBubble(paragraph);
}

function dynamicSpeechBubble(paragraph) {
    
    let firstStringArray = "Hej! Lasse & Maja här, från LasseMajas Detektivbyrå!".split(" ");

    let i = 0;
    let speechBubbleInterval = setInterval(function() {
        if(i === firstStringArray.length) {
            document.querySelector("img#continueArrowIntroPage").style.visibility = "visible";
            document.querySelector("img#continueArrowIntroPage").addEventListener("click", nextIntroPage);

            clearInterval(speechBubbleInterval);
        } else {
            paragraph.innerHTML += firstStringArray[i] + " ";
        }
        i++;
    }, 100);
}

function nextIntroPage(event) {
    console.log(event.currentTarget);
    if(event.currentTarget.parentNode.id === "speechBubbleIntroPage") {
        document.querySelector("div#speechBubbleIntroPage").setAttribute("id", "speechBubbleIntroPage2");
        document.querySelector("p#textIntroPages").innerHTML = "";
        document.querySelector("img#continueArrowIntroPage").style.visibility = "hidden";
        let introPage2TextArray = 
        `Vi behöver din hjälp med att lösa ett mysterium! Det har skett en stöld i Malmö. Vi kan tyvärr inte befinna oss på plats, men vi är med på resan via appen för att hjälpa dig.`.split(" ");

        let i = 0;
        let speechBubbleInterval = setInterval(function() {
            if(i === introPage2TextArray.length) {
                document.querySelector("img#continueArrowIntroPage").setAttribute("id", "continueArrowIntroPage2");
                document.querySelector("img#continueArrowIntroPage2").style.visibility = "visible";
               

                clearInterval(speechBubbleInterval);
            } else {
                document.querySelector("p#textIntroPages").innerHTML += introPage2TextArray[i] + " ";
            }
            i++;
        }, 100);
    } else {
        document.querySelector("div#speechBubbleIntroPage2").setAttribute("id", "speechBubbleIntroPage3");
        document.querySelector("p#textIntroPages").innerHTML = "";

        document.querySelector("img#continueArrowIntroPage2").style.visibility = "hidden";

        let introPage3TextArray = 
        `Bibliotekarie Karin Fahlén ringde oss tidigare, vi borde lyssna på hennes röstmeddelande för att starta utredningen. `.split(" ");

        let i = 0;
        let speechBubbleInterval = setInterval(function() {
            if(i === introPage3TextArray.length) {
                document.querySelector("img#continueArrowIntroPage2").setAttribute("id", "continueArrowIntroPage3");
                document.querySelector("img#continueArrowIntroPage3").style.visibility = "visible";
                document.querySelector("img#continueArrowIntroPage3").removeEventListener("click", nextIntroPage);
                document.querySelector("img#continueArrowIntroPage3").addEventListener("click", renderTelephonePage);

                clearInterval(speechBubbleInterval);
            } else {
                document.querySelector("p#textIntroPages").innerHTML += introPage3TextArray[i] + " ";
            }
            i++;
        }, 100);
    } 
}
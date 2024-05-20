function renderProloguePage() {
    document.querySelector("body").innerHTML = "";

    let prologuePageBackground = document.createElement("div");
    prologuePageBackground.setAttribute("id", "backgroundProloguePage");
    document.querySelector("body").appendChild(prologuePageBackground);

    let lights = document.createElement("img");
    lights.setAttribute("id", "lightsProloguePage");
    lights.setAttribute("src", "images/lights.png");

    prologuePageBackground.appendChild(lights);

    let heading = document.createElement("h1");
    heading.setAttribute("id", "headingProloguePage");
    heading.textContent = "Vem är den skyldige?";
    prologuePageBackground.appendChild(heading);

    let priest = document.createElement("div");
    priest.classList.add("priestInfoProloguePage");
    priest.classList.add("suspectInfoImageProloguePage");
    priest.addEventListener("click", chosenInfoImage);

    let welmerFrisk = document.createElement("div");
    welmerFrisk.classList.add("welmerFriskInfoProloguePage");
    welmerFrisk.classList.add("suspectInfoImageProloguePage");
    welmerFrisk.addEventListener("click", chosenInfoImage);

    let beatriceHolm = document.createElement("div");
    beatriceHolm.classList.add("beatriceHolmInfoProloguePage");
    beatriceHolm.classList.add("suspectInfoImageProloguePage");
    beatriceHolm.addEventListener("click", chosenInfoImage);

    prologuePageBackground.append(priest, welmerFrisk, beatriceHolm);

    let guessButton = document.createElement("button");
    guessButton.setAttribute("id", "guessButtonProloguePage");
    guessButton.textContent = "Gissa!";
    prologuePageBackground.appendChild(guessButton);

    guessButton.addEventListener("click", whichPossibleCulprit);
    document.querySelector("button#guessButtonProloguePage").disabled = true;

}

function chosenInfoImage(event) {

    let suspectsArray = document.querySelectorAll("div.suspectInfoImageProloguePage");

    if(event.currentTarget.id === "clickedSuspectProloguePage") {
        event.currentTarget.removeAttribute("id", "clickedSuspectProloguePage");
        document.querySelector("button#guessButtonProloguePage").disabled = true;

    } else {
        for(let i = 0; i < suspectsArray.length; i++) {
            if(suspectsArray[i].id === "clickedSuspectProloguePage") {
                suspectsArray[i].removeAttribute("id", "clickedSuspectProloguePage");
            }
        }
        event.currentTarget.setAttribute("id", "clickedSuspectProloguePage");
        document.querySelector("button#guessButtonProloguePage").disabled = false;
    }
}

function whichPossibleCulprit(event) {
    let suspectsArray = document.querySelectorAll("div.suspectInfoImageProloguePage");
    for(let i = 0; i < suspectsArray.length; i++) {
        if(suspectsArray[i].id === "clickedSuspectProloguePage") {

            for(let ii = 0; ii < suspectsArray[i].classList.length; ii++) {
                if(suspectsArray[i].classList[ii] !== "suspectInfoImageProloguePage") {
                    if(suspectsArray[i].classList[ii] === "beatriceHolmInfoProloguePage") {
                        talkToBeatrice();
                    } else if(suspectsArray[i].classList[ii] === "welmerFriskInfoProloguePage") {
                        talkToWelmer();
                    } else if(suspectsArray[i].classList[ii] === "priestInfoProloguePage") {
                        confrontThePriest();
                    }
                }
            }
        }
    }
}

function talkToBeatrice() {
    document.querySelector("body").innerHTML = "";

    let background = document.createElement("div");
    background.setAttribute("id", "backgroundConversationPrologues");
    document.querySelector("body").appendChild(background);

    let overlay = document.createElement("div");
    overlay.setAttribute("id", "backgroundOverlayConversationPrologues");
    background.appendChild(overlay);

    let flowers = document.createElement("img");
    flowers.setAttribute("id", "flowersConversationPrologues");
    flowers.setAttribute("src", "images/flowersPrologue.png");

    let sign = document.createElement("img");
    sign.setAttribute("id", "lasseMajaSignConversationPrologues");
    sign.setAttribute("src", "images/lasseMajaSign_4x.png");

    let chefOfPolice = document.createElement("img");
    chefOfPolice.setAttribute("id", "chefOfPoliceConversationPrologues");
    chefOfPolice.setAttribute("src", "images/chiefOfPoliceFacingRight.png");

    let beatrice = document.createElement("img");
    beatrice.setAttribute("id", "beatriceConversationPrologue");
    beatrice.setAttribute("src", "images/BeatriceProloguePage.png");

    let speechBubble = document.createElement("div");
    speechBubble.setAttribute("id", "speechBubbleBeatriceConversation1");
    speechBubble.innerHTML = 
    `
    <p id="textProloguePages"></p>
    <img id="arrowBeatricePrologue1" src="images/arrow_4x.png">
    `;

    background.append(flowers, sign, chefOfPolice, beatrice, speechBubble);

    document.querySelector("img#arrowBeatricePrologue1").style.visibility = "collapse";

    startConversation();

    function startConversation() {
        let fullText = "Jag har kollat med skolan och det stämmer att du var på ett möte vid tidpunkten då boken försvann, Beatrice.";
        let words = fullText.split(' ');
        let textContainer = document.getElementById('textProloguePages');

        textContainer.textContent = "";
            
        let index = 0;
        const intervalId = setInterval(() => {
            if (index === words.length) {
                clearInterval(intervalId);
                document.querySelector("img#arrowBeatricePrologue1").style.visibility = "visible";
                document.querySelector("img#arrowBeatricePrologue1").addEventListener("click", secondPartOfBeatriceConversation);
                        
            } else {
                textContainer.textContent += words[index] + ' ';
                index++;
                
            }
        }, 150);
    }

    function secondPartOfBeatriceConversation() {
        document.querySelector("img#arrowBeatricePrologue1").setAttribute("id", "arrowBeatricePrologue2");
        document.querySelector("img#arrowBeatricePrologue2").removeEventListener("click", secondPartOfBeatriceConversation);
        document.querySelector("img#arrowBeatricePrologue2").style.visibility = "collapse";

        document.querySelector("div#speechBubbleBeatriceConversation1").setAttribute("id", "speechBubbleBeatriceConversation2");

        let fullText = "Detta betyder att du har alibi och att det inte är du som stulit boken.";
        let words = fullText.split(' ');
        let textContainer = document.getElementById('textProloguePages');

        textContainer.textContent = "";
            
        let index = 0;
        const intervalId = setInterval(() => {
            if (index === words.length) {
                clearInterval(intervalId);
                document.querySelector("img#arrowBeatricePrologue2").style.visibility = "visible";
                document.querySelector("img#arrowBeatricePrologue2").addEventListener("click", renderProloguePage);
            } else {
                textContainer.textContent += words[index] + ' ';
                index++;
                
            }
        }, 150);
    }

}

function talkToWelmer() {
    document.querySelector("body").innerHTML = "";

    let background = document.createElement("div");
    background.setAttribute("id", "backgroundConversationPrologues");
    document.querySelector("body").appendChild(background);

    let overlay = document.createElement("div");
    overlay.setAttribute("id", "backgroundOverlayConversationPrologues");
    background.appendChild(overlay);

    let flowers = document.createElement("img");
    flowers.setAttribute("id", "flowersConversationPrologues");
    flowers.setAttribute("src", "images/flowersPrologue.png");

    let sign = document.createElement("img");
    sign.setAttribute("id", "lasseMajaSignConversationPrologues");
    sign.setAttribute("src", "images/lasseMajaSign_4x.png");

    let chefOfPolice = document.createElement("img");
    chefOfPolice.setAttribute("id", "chefOfPoliceConversationPrologues");
    chefOfPolice.setAttribute("src", "images/chiefOfPoliceFacingRight.png");

    let welmer = document.createElement("img");
    welmer.setAttribute("id", "welmerConversationPrologue");
    welmer.setAttribute("src", "images/WelmerProloguePages.png");

    let speechBubble = document.createElement("div");
    speechBubble.setAttribute("id", "speechBubbleWelmerConversation1");
    speechBubble.innerHTML = 
    `
    <p id="textProloguePages"></p>
    <img id="arrowWelmerPrologue1" src="images/arrow_4x.png">
    `;

    background.append(flowers, sign, chefOfPolice, welmer, speechBubble);

    document.querySelector("img#arrowWelmerPrologue1").style.visibility = "collapse";

    startConversation();

    function startConversation() {
        let fullText = "Tiden du var på på möte på hotellet stämde överens med det du uppgav i förhör.";
        let words = fullText.split(' ');
        let textContainer = document.getElementById('textProloguePages');

        textContainer.textContent = "";
            
        let index = 0;
        const intervalId = setInterval(() => {
            if (index === words.length) {
                clearInterval(intervalId);
                document.querySelector("img#arrowWelmerPrologue1").style.visibility = "visible";
                document.querySelector("img#arrowWelmerPrologue1").addEventListener("click", secondPartOfWelmerConversation);
                        
            } else {
                textContainer.textContent += words[index] + ' ';
                index++;
                
            }
        }, 150);
    }

    function secondPartOfWelmerConversation() {
        document.querySelector("img#arrowWelmerPrologue1").setAttribute("id", "arrowWelmerPrologue2");
        document.querySelector("img#arrowWelmerPrologue2").removeEventListener("click", secondPartOfWelmerConversation);
        document.querySelector("img#arrowWelmerPrologue2").style.visibility = "collapse";

        document.querySelector("div#speechBubbleWelmerConversation1").setAttribute("id", "speechBubbleWelmerConversation2");

        let fullText = "Det betyder att du har alibi vid tidpunkten då boken försvann.";
        let words = fullText.split(' ');
        let textContainer = document.getElementById('textProloguePages');

        textContainer.textContent = "";
            
        let index = 0;
        const intervalId = setInterval(() => {
            if (index === words.length) {
                clearInterval(intervalId);
                document.querySelector("img#arrowWelmerPrologue2").style.visibility = "visible";
                document.querySelector("img#arrowWelmerPrologue2").addEventListener("click", renderProloguePage);
            } else {
                textContainer.textContent += words[index] + ' ';
                index++;
            }
        }, 150);
    }
}

function confrontThePriest() {
    document.querySelector("body").innerHTML = "";

    let background = document.createElement("div");
    background.setAttribute("id", "backgroundConversationPrologues");
    document.querySelector("body").appendChild(background);

    let overlay = document.createElement("div");
    overlay.setAttribute("id", "backgroundOverlayConversationPrologues");
    background.appendChild(overlay);

    let flowers = document.createElement("img");
    flowers.setAttribute("id", "flowersConversationPrologues");
    flowers.setAttribute("src", "images/flowersPrologue.png");

    let sign = document.createElement("img");
    sign.setAttribute("id", "lasseMajaSignConversationPrologues");
    sign.setAttribute("src", "images/lasseMajaSign_4x.png");

    let chefOfPolice = document.createElement("img");
    chefOfPolice.setAttribute("id", "chefOfPoliceConversationPrologues");
    chefOfPolice.setAttribute("src", "images/chiefOfPoliceFacingRight.png");

    let priest = document.createElement("img");
    priest.setAttribute("id", "priestConversationPrologue");
    priest.setAttribute("src", "images/PrastenProloguePages.png");

    let speechBubble = document.createElement("div");
    speechBubble.setAttribute("id", "speechBubblePriestConversation1");
    speechBubble.innerHTML = 
    `
    <p id="textProloguePages"></p>
    <img id="arrowPriestPrologue1" src="images/arrow_4x.png">
    `;

    background.append(flowers, sign, chefOfPolice, priest, speechBubble);

    document.querySelector("img#arrowPriestPrologue1").style.visibility = "collapse";

    startConversation();

    function startConversation() {
        let fullText = "Åh nej, ni kom på mig! Jag är så ledsen att det blev såhär. Min nya orgel var för dyr och jag trodde jag kunde sälja boken för att lösa problemet.";
        let words = fullText.split(' ');
        let textContainer = document.getElementById('textProloguePages');

        textContainer.textContent = "";
            
        let index = 0;
        const intervalId = setInterval(() => {
            if (index === words.length) {
                clearInterval(intervalId);
                document.querySelector("img#arrowPriestPrologue1").style.visibility = "visible";
                document.querySelector("img#arrowPriestPrologue1").addEventListener("click", secondPartOfPriestConversation);
                        
            } else {
                textContainer.textContent += words[index] + ' ';
                index++;
                
            }
        }, 150);
    }

    function secondPartOfPriestConversation() {
        document.querySelector("img#arrowPriestPrologue1").setAttribute("id", "arrowPriestPrologue2");
        document.querySelector("img#arrowPriestPrologue2").removeEventListener("click", secondPartOfPriestConversation);
        document.querySelector("img#arrowPriestPrologue2").style.visibility = "collapse";

        document.querySelector("div#speechBubblePriestConversation1").setAttribute("id", "speechBubblePriestConversation2");

        let fullText = "Jag är ledsen och jag lovar att lämna tillbaka boken till Karin omedelbart.";
        let words = fullText.split(' ');
        let textContainer = document.getElementById('textProloguePages');

        textContainer.textContent = "";
            
        let index = 0;
        const intervalId = setInterval(() => {
            if (index === words.length) {
                clearInterval(intervalId);
                document.querySelector("img#arrowPriestPrologue2").style.visibility = "visible";
                document.querySelector("img#arrowPriestPrologue2").addEventListener("click", renderFinalPage);
            } else {
                textContainer.textContent += words[index] + ' ';
                index++;
            }
        }, 150);
    }
}
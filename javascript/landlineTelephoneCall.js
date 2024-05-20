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

    let ringtoneAudio = document.createElement("audio");
    ringtoneAudio.setAttribute("id", "audioPlayer");
    ringtoneAudio.setAttribute("type", "audio/mpeg");
    ringtoneAudio.setAttribute("src", "audio/ring_ljud.mp3");
    ringtoneAudio.volume = 0.2;
    telephonePageBackground.appendChild(ringtoneAudio);

    telephoneStartsToRing(ringtoneAudio);
}

function explainHowToListen(event) {
    if(!document.querySelector("div#overlayTelephonePage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayTelephonePage");
        document.querySelector("div#telephonePageBackground").appendChild(overlay);

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerTelephonePage");
        overlay.appendChild(infoContainer);

        infoContainer.innerHTML = 
        `
        <p id="textInfoBoxTelephonePage">Tryck på telefonen <br>  
        för att avlyssna röstmeddelandet</p> 
        `;

    } else {
        document.querySelector("div#overlayTelephonePage").remove();
    }
}

function telephoneStartsToRing(audio) {
    const vibratingIcon = document.getElementById('landlineTelephone');
    
    //Ringsignalen börjar spela nedan
    audio.play();
    audio.addEventListener("ended", stopAudio);

    //I nedan funktion fortsätter ljudfilen med ringsignalen att spela om när den slutar
    function stopAudio(event) {
        this.currentTime = 0;
        this.play();
    }
    
    /*setTimeout(function() { 
        vibratingIcon.classList.add('vibratingTelephone') 

    }, 900);*/
    vibratingIcon.classList.add('vibratingTelephone');
    vibratingIcon.style.animationPlayState = "paused";

    audio.addEventListener("loadedmetadata", function() {

        setTimeout(function() {
            vibratingIcon.style.animationPlayState = "running";
        }, 700);
    });

    /*audio.addEventListener("loadedmetadata", function() {

        setTimeout(function() {
            vibratingIcon.style.animationPlayState = "running";
        }, 600);

    
        let syncAnimationToRingtone = setInterval(syncToRingtone, 1700);

        function syncToRingtone() {
            if(vibratingIcon.style.animationPlayState === "paused") {
                vibratingIcon.style.animationPlayState = "running";

            } else {
                vibratingIcon.style.animationPlayState = "paused";

            }

            stopInterval();
        }

        let intervalIndex = 0;
        function stopInterval() {
            intervalIndex++;

            
            clearInterval(syncAnimationToRingtone);

            if(intervalIndex === 1) {
                syncAnimationToRingtone = setInterval(syncToRingtone, 1760);

            } else if(intervalIndex === 2) {
                syncAnimationToRingtone = setInterval(syncToRingtone, 1340);

            } else if(intervalIndex === 3) {
                syncAnimationToRingtone = setInterval(syncToRingtone, 1650);

            } else if(intervalIndex === 4) {
                syncAnimationToRingtone = setInterval(syncToRingtone, 1480);

            } else if(intervalIndex === 5) {
                syncAnimationToRingtone = setInterval(syncToRingtone, 1580);

            } else if(intervalIndex === 6) {
                syncAnimationToRingtone = setInterval(syncToRingtone, 1400);

                intervalIndex = 0;
            }
        } 
    }); */

    vibratingIcon.addEventListener('click', () => {
        audio.setAttribute("src", "");

        vibratingIcon.classList.remove("vibratingTelephone");
        //audio.setAttribute("src", "audio/Karin1.mp3");
        audio.removeEventListener("ended", stopAudio);
        //clearInterval(syncAnimationToRingtone);

        startLibrarianVoiceMessage(audio); 
    }); 
}

function startLibrarianVoiceMessage(audio) {
    
    let fullText = "";
    let words = [];
    let textContainer;

    if(document.querySelector("img#continueArrowLibrarianVoiceMessage") !== null) {
        document.querySelector("img#continueArrowLibrarianVoiceMessage").setAttribute("id", "continueArrowLibrarianVoiceMessage2");
        document.querySelector("img#continueArrowLibrarianVoiceMessage2").style.visibility = "collapse";
        fullText = "Det är den mest värdefulla boken i i hela biblioteket, ni måste hjälpa mig hitta tjuven! Snälla ring tillbaka till mig så ska jag förklara mer, mitt nummer är 070-585….";
        words = fullText.split(' ');
        document.querySelector("div#voiceMessageFromLibrarian").setAttribute("id", "voiceMessageFromLibrarian2");
        textContainer = document.getElementById("textLibrarianCallPages");
        textContainer.textContent = "";

        //audio.addEventListener("loadedmetadata", function() {
            audio.volume = 0.8;
            audio.play();
           
            let currentWordIndex = 0;
            const intervalId = setInterval(() => {
                if (currentWordIndex === words.length) {
                    clearInterval(intervalId);
                    document.querySelector("img#continueArrowLibrarianVoiceMessage2").style.visibility = "visible";
                    document.querySelector("img#continueArrowLibrarianVoiceMessage2").removeEventListener("click", secondAudioFile);
                    document.querySelector("img#continueArrowLibrarianVoiceMessage2").addEventListener("click", voiceMessageGotCutOff);
                    
                } else {
                    textContainer.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                }
            }, 360);
        //});

    } else {
        document.querySelector("div#topQuestionButtonTelephonePage").remove();

        let overlayVoiceMessage = document.createElement("div");
        overlayVoiceMessage.setAttribute("id", "overlayLibrarianMissedCallPage");
        document.querySelector("div#telephonePageBackground").appendChild(overlayVoiceMessage);

        let voiceMessageBubble = document.createElement("div");
        voiceMessageBubble.setAttribute("id", "voiceMessageFromLibrarian");

        voiceMessageBubble.innerHTML = 
        `
        <p id="textLibrarianCallPages"></p>
        <img id="continueArrowLibrarianVoiceMessage" src="images/arrow_4x.png">
        `;

        overlayVoiceMessage.appendChild(voiceMessageBubble);

        document.querySelector("img#continueArrowLibrarianVoiceMessage").style.visibility = "collapse";

        let librarianKarin = document.createElement("img");
        librarianKarin.setAttribute("id", "librarianKarinVoiceMessage");
        librarianKarin.setAttribute("alt", "Image of librarian Karin");
        librarianKarin.setAttribute("src", "images/librarian_1x.png");
        overlayVoiceMessage.appendChild(librarianKarin);

        fullText = "Hej det är Karin Fahlén, bibliotekarie på Orkanen! Jag behöver er hjälp! Någon har stulit boken “Under himmelens fäste”.";
        words = fullText.split(' ');
        textContainer = document.getElementById('textLibrarianCallPages');

        textContainer.textContent = "";
    
        //audio.addEventListener("loadedmetadata", function() {
            audio.volume = 0.8;
            audio.play();
           
            let currentWordIndex = 0;
            const intervalId = setInterval(() => {
                if (currentWordIndex === words.length) {
                    clearInterval(intervalId);
                    document.querySelector("img#continueArrowLibrarianVoiceMessage").style.visibility = "visible";
                    document.querySelector("img#continueArrowLibrarianVoiceMessage").addEventListener("click", secondAudioFile);
                    
                } else {
                    textContainer.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    
                }
            }, 440);
        //});
    }
}

function secondAudioFile(event) {
    document.querySelector("audio#audioPlayer").remove();
    let audio2 = document.createElement("audio");
    audio2.setAttribute("id", "audioPlayer");
    audio2.setAttribute("type", "audio/mpeg");
    //audio2.setAttribute("src", "audio/Karin2.mp3");
    document.querySelector("div#telephonePageBackground").appendChild(audio2);

    startLibrarianVoiceMessage(audio2);
}


function voiceMessageGotCutOff(event) {

    let body = document.querySelector("body");
    body.innerHTML = "";
    let introPageContainer = document.createElement("div");
    introPageContainer.setAttribute("id", "callKarinPageContainer");
    body.appendChild(introPageContainer);

    let introPageContainerOverlay = document.createElement("div");
    introPageContainerOverlay.setAttribute("id", "callKarinPageContainerOverlay");
    introPageContainer.appendChild(introPageContainerOverlay);

    let topQuestionButton = document.createElement("div");
    topQuestionButton.setAttribute("id", "topQuestionButtonAfterKarinVoiceMessage");
    topQuestionButton.textContent = "?";
    introPageContainer.appendChild(topQuestionButton);

    topQuestionButton.addEventListener("click", explainHowToFindNumber);

    let leafsImage = document.createElement("img");
    leafsImage.setAttribute("id", "leafsImageCallKarinPage");
    leafsImage.setAttribute("src", "images/leafsTree_512w.png");
    introPageContainer.appendChild(leafsImage);

    let lasseMajaSign = document.createElement("img");
    lasseMajaSign.setAttribute("id", "lasseMajaSignCallKarinPage");
    lasseMajaSign.setAttribute("src", "images/lasseMajaSign_512w.png");
    introPageContainer.appendChild(lasseMajaSign);

    let lasseMajaImage = document.createElement("img");
    lasseMajaImage.setAttribute("id", "lasseMajaImageCallKarinPage");
    lasseMajaImage.setAttribute("src", "images/lasseMajaImage_512h.png");
    introPageContainer.appendChild(lasseMajaImage);

    let speechBubble = document.createElement("div");
    speechBubble.setAttribute("id", "speechBubbleCallKarinPage");
    introPageContainer.appendChild(speechBubble);

    speechBubble.innerHTML =
    `
    <p id="textAfterKarinVoiceMessage"></p>
    <img id="continueArrowCallKarinPage" src="images/arrow_4x.png">
    `;
    
    document.querySelector("img#continueArrowCallKarinPage").style.visibility = "collapse";
    speechBubbleAfterVoiceMessage(speechBubble);
}

function speechBubbleAfterVoiceMessage(speechBubble) {
    let lasseAndMajaText = "Det verkar som att samtalet bröts. Prova ringa tillbaka till Karin. Hennes nummer borde stå nedskrivet någonstans...".split(" ");

    let i = 0;
    let speechBubbleInterval = setInterval(function() {
        if(i === lasseAndMajaText.length) {
            document.querySelector("img#continueArrowCallKarinPage").style.visibility = "visible";
            document.querySelector("img#continueArrowCallKarinPage").addEventListener("click", () => {
                renderFirstCheckpoint();
            });

            clearInterval(speechBubbleInterval);
        } else {
            document.querySelector("p#textAfterKarinVoiceMessage").innerHTML += lasseAndMajaText[i] + " ";
        }
        i++;
    }, 100);
}

function explainHowToFindNumber(event) {
    if(!document.querySelector("div#overlayAfterKarinVoiceMessage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayAfterKarinVoiceMessage");
        document.querySelector("div#callKarinPageContainer").appendChild(overlay);
        event.currentTarget.style.color = "#353535";
        event.currentTarget.style.borderColor = "#353535";

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerAfterKarinVoiceMessage");
        overlay.appendChild(infoContainer);
    
        infoContainer.innerHTML = 
        `
        <p id="textInfoBoxAfterKarinVoiceMessage">Titta på affischen <br>för att hitta en <br>ledtråd!  
        </p> 
        `;
    
    } else {
        document.querySelector("div#overlayAfterKarinVoiceMessage").remove();
        event.currentTarget.style.color = "#FBF8F4";
        event.currentTarget.style.borderColor = "#FBF8F4";
    }
}

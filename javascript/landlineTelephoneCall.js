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
            syncAnimationToRingtone = setInterval(syncToRingtone, 1800);

        } else if(intervalIndex === 2) {
            syncAnimationToRingtone = setInterval(syncToRingtone, 1320);

        } else if(intervalIndex === 3) {
            syncAnimationToRingtone = setInterval(syncToRingtone, 1650);

        } else if(intervalIndex === 4) {
            syncAnimationToRingtone = setInterval(syncToRingtone, 1500);

        } else if(intervalIndex === 5) {
            syncAnimationToRingtone = setInterval(syncToRingtone, 1600);

        } else if(intervalIndex === 6) {
            syncAnimationToRingtone = setInterval(syncToRingtone, 1350);

            intervalIndex = 0;
        }
    }
    
    vibratingIcon.addEventListener('click', () => {
        vibratingIcon.classList.remove("vibratingTelephone");
        audio.setAttribute("src", "audio/karin_text1.mp3");
        audio.removeEventListener("ended", stopAudio);
        clearInterval(syncAnimationToRingtone);

        startLibrarianVoiceMessage(audio); 
    });   
}

function startLibrarianVoiceMessage(audio) {
    let fullText = "";
    let words = [];
    let textContainer;

    if(document.querySelector("img#continueArrowLibrarianVoiceMessage") !== null) {
        document.querySelector("img#continueArrowLibrarianVoiceMessage").setAttribute("id", "continueArrowLibrarianVoiceMessage2");
        document.querySelector("img#continueArrowLibrarianVoiceMessage2").style.visibility = "hidden";
        fullText = "Det är den mest värdefulla boken i hela biblioteket, ni måste hjälpa mig hitta tjuven! Snälla ring tillbaka till mig så ska jag förklara mer, mitt nummer är 0701234….";
        words = fullText.split(' ');
        document.querySelector("div#voiceMessageFromLibrarian").setAttribute("id", "voiceMessageFromLibrarian2");
        textContainer = document.getElementById("voiceMessageFromLibrarian2");

    } else {
        document.querySelector("div#topQuestionButtonTelephonePage").remove();

        let overlayVoiceMessage = document.createElement("div");
        overlayVoiceMessage.setAttribute("id", "overlayLibrarianMissedCallPage");
        document.querySelector("div#telephonePageBackground").appendChild(overlayVoiceMessage);

        let voiceMessageBubble = document.createElement("div");
        voiceMessageBubble.setAttribute("id", "voiceMessageFromLibrarian");
        document.querySelector("div#telephonePageBackground").appendChild(voiceMessageBubble);

        let librarianKarin = document.createElement("img");
        librarianKarin.setAttribute("id", "librarianKarinVoiceMessage");
        librarianKarin.setAttribute("alt", "Image of librarian Karin");
        librarianKarin.setAttribute("src", "images/librarian_1x.png");
        document.querySelector("div#telephonePageBackground").appendChild(librarianKarin);

        fullText = "Hej det är Karin Fahlén, bibliotekarie på Orkanen! Jag behöver er hjälp! Någon har stulit boken “Alla världens fjärilar”.";
        words = fullText.split(' ');
        textContainer = document.getElementById('voiceMessageFromLibrarian');
    }
    
    textContainer.textContent = "";
    
    showTextContinuously();

    function showTextContinuously() {
        
        audio.addEventListener("loadedmetadata", function() {
            audio.volume = 0.8;
            audio.play();
            // Beräkna tid per ord, default till 200ms om duration är 0
            let intervalTime = (audio.duration / words.length * 1000) || 200; 

            let currentWordIndex = 0;
            const intervalId = setInterval(() => {
                if (audio.ended && currentWordIndex === words.length) {
                    clearInterval(intervalId);

                    if(document.querySelector("img#continueArrowLibrarianVoiceMessage2") === null) {
                        let continueArrow = document.createElement("img");
                        continueArrow.setAttribute("id", "continueArrowLibrarianVoiceMessage");
                        continueArrow.setAttribute("src", "images/arrow_512w.png");
                        document.querySelector("div#telephonePageBackground").appendChild(continueArrow);

                        continueArrow.addEventListener("click", secondAudioFile);
                        
                    } else {
                        document.querySelector("img#continueArrowLibrarianVoiceMessage2").style.visibility = "visible";
                        document.querySelector("img#continueArrowLibrarianVoiceMessage2").removeEventListener("click", secondAudioFile);
                        document.querySelector("img#continueArrowLibrarianVoiceMessage2").addEventListener("click", voiceMessageGotCutOff);
                    }
                    
                } else {
                    textContainer.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    
                }
            }, intervalTime);
        });
    }
}

function secondAudioFile(event) {
    document.querySelector("audio#audioPlayer").remove();
    let audio2 = document.createElement("audio");
    audio2.setAttribute("id", "audioPlayer");
    audio2.setAttribute("type", "audio/mpeg");
    audio2.setAttribute("src", "audio/karin_text2.mp3");
    document.querySelector("div#telephonePageBackground").appendChild(audio2);

    startLibrarianVoiceMessage(audio2);
}


function voiceMessageGotCutOff(event) {
    document.querySelector("div#telephonePageBackground").remove();

    let body = document.querySelector("body");
    let introPageContainer = document.createElement("div");
    introPageContainer.setAttribute("id", "callKarinPageContainer");
    body.appendChild(introPageContainer);

    let introPageContainerOverlay = document.createElement("div");
    introPageContainerOverlay.setAttribute("id", "callKarinPageContainerOverlay");
    body.appendChild(introPageContainerOverlay);

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

    speechBubbleAfterVoiceMessage(speechBubble);
}

function speechBubbleAfterVoiceMessage(speechBubble) {
    let lasseAndMajaText = "Det verkar som att samtalet bröts. Prova ringa tillbaka till Karin. Hennes nr borde stå nedskrivet någonstans...".split(" ");

    let i = 0;
    let speechBubbleInterval = setInterval(function() {
        if(i === lasseAndMajaText.length) {
            let continueArrow = document.createElement("img");
            continueArrow.setAttribute("id", "continueArrowCallKarinPage");
            continueArrow.setAttribute("src", "images/arrow_512w.png");
            document.querySelector("div#callKarinPageContainer").appendChild(continueArrow);
            //continueArrow.addEventListener("click",);

            clearInterval(speechBubbleInterval);
        } else {
            speechBubble.innerHTML += lasseAndMajaText[i] + " ";
        }
        i++;
    }, 100);
}
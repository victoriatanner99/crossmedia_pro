function renderPoliceAudioFilePage() {
    let body = document.querySelector("body");

    window.addEventListener("resize", (event) => {
        showContentForOrientation();
    });

    showContentForOrientation();

    function showContentForOrientation() {

        if(window.matchMedia("(orientation: portrait)").matches) { 
            body.innerHTML = "";
            let blueBackground = document.createElement("div");
            blueBackground.setAttribute("id", "backgroundPoliceCallPage");
            body.appendChild(blueBackground);

            let overlay = document.createElement("div");
            overlay.setAttribute("id", "backgroundOverlayPoliceCallPage");
            blueBackground.appendChild(overlay);

            let lampPost = document.createElement("img");
            lampPost.setAttribute("id", "lampPostPoliceCallPage");
            lampPost.setAttribute("src", "images/Lyktstolpe.png")

            let flowers = document.createElement("img");
            flowers.setAttribute("id", "flowersPoliceCallPage");
            flowers.setAttribute("src", "images/Blommor.png")

            let chefOfPolice = document.createElement("img");
            chefOfPolice.setAttribute("id", "chefOfPolicePoliceCallPage");
            chefOfPolice.setAttribute("src", "images/Polismastaren.png")

            let speechBubble = document.createElement("div");
            speechBubble.setAttribute("id", "speechBubble1PoliceCallPage");
            speechBubble.innerHTML = 
            `
            <p id="textPoliceCallPage"></p>
            <img id="arrowPoliceCallPage" src="images/arrow_4x.png">
            `;

            blueBackground.append(lampPost, flowers, speechBubble, chefOfPolice);

            document.querySelector("img#arrowPoliceCallPage").style.visibility = "collapse";

            let policeCall1 = document.createElement("audio");
            policeCall1.setAttribute("id", "audioPlayer");
            policeCall1.setAttribute("type", "audio/mpeg");
            policeCall1.setAttribute("src", "audio/Polismastaren 1.mp3");
            blueBackground.appendChild(policeCall1);

            startPoliceCall(policeCall1);


        } else {
            body.innerHTML = "";
            let turnMobileDeviceBackground = document.createElement("div");
            turnMobileDeviceBackground.setAttribute("id", "turnMobileDeviceBackgroundAfter")
            body.appendChild(turnMobileDeviceBackground);
            let turnMobileDeviceSign = document.createElement("img");
            turnMobileDeviceSign.setAttribute("id", "turnMobileDeviceSignAfter");
            turnMobileDeviceSign.setAttribute("src", "images/flipPhone_512w.png");
            turnMobileDeviceBackground.appendChild(turnMobileDeviceSign);
        }
    }
}

function startPoliceCall(audio) {

    audio.play();

    let fullText = "Hallå där! Tack så mycket för hjälpen med att samla ihop de misstänkta. Jag ska hålla förhör med dem nu.";
    let words = fullText.split(' ');
    let textContainer = document.getElementById('textPoliceCallPage');

    textContainer.textContent = "";
    showTextContinuously();

    function showTextContinuously() {
        
        //audio.addEventListener("loadedmetadata", function() {
            audio.volume = 1;
            audio.play();

            let currentWordIndex = 0;
            const intervalId = setInterval(() => {
                if (currentWordIndex === words.length) {
                    clearInterval(intervalId);
                    document.querySelector("img#arrowPoliceCallPage").style.visibility = "visible";
                    document.querySelector("img#arrowPoliceCallPage").addEventListener("click", secondPartOfPoliceCall);
                          
                } else {
                    textContainer.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    
                }
            }, 220);
        //});
    }
}

function secondPartOfPoliceCall(event) {

    document.querySelector("audio#audioPlayer").remove();
    document.querySelector("img#arrowPoliceCallPage").style.visibility = "collapse";

    let policeCall2 = document.createElement("audio");
    policeCall2.setAttribute("id", "audioPlayer");
    policeCall2.setAttribute("type", "audio/x-m4a");
    //policeCall2.setAttribute("src", "audio/Polismästaren2.m4a");
    document.querySelector("div#backgroundPoliceCallPage").appendChild(policeCall2);

    let audio = policeCall2;
    let fullText = "Skicka ett mail till mig på polismastaren@gmail.com  så skickar jag över materialet från förhören. Vi hörs sen!";
    let words = fullText.split(' ');
    let textContainer = document.getElementById('textPoliceCallPage');

    document.querySelector("div#speechBubble1PoliceCallPage").setAttribute("id", "speechBubble1PoliceCallPage2");
    textContainer.textContent = "";
    showTextContinuously();

    function showTextContinuously() {
        
        //audio.addEventListener("loadedmetadata", function() {
            audio.volume = 1;
            audio.play();
          
            let currentWordIndex = 0;
            const intervalId = setInterval(() => {
                if (currentWordIndex === words.length) {
                    clearInterval(intervalId);
                    document.querySelector("img#arrowPoliceCallPage").removeEventListener("click", secondPartOfPoliceCall);
                    document.querySelector("img#arrowPoliceCallPage").setAttribute("id", "arrowPoliceCallPage2");
                    document.querySelector("img#arrowPoliceCallPage2").style.visibility = "visible";
                    
                    document.querySelector("img#arrowPoliceCallPage2").addEventListener("click", (event) => {
                        renderSecondCheckpoint();
                    });
                          
                } else {
                    textContainer.textContent += words[currentWordIndex] + ' ';
                    currentWordIndex++;
                    
                }
            }, 220);
        //});
    }
}
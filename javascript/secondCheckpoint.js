function renderSecondCheckpoint() {
    document.querySelector("body").innerHTML = "";
    let checkpointBackground = document.createElement("div");
    checkpointBackground.setAttribute("id", "secondCheckpointBackground");
    document.querySelector("body").appendChild(checkpointBackground);

    let overlay = document.createElement("div");
    overlay.setAttribute("id", "backgroundOverlaySecondCheckpointPage");
    checkpointBackground.appendChild(overlay);

    let camera1 = document.createElement("img");
    camera1.setAttribute("id", "camera1SecondCheckpointPage");
    camera1.setAttribute("src", "images/Kamera 2.png");

    let camera2 = document.createElement("img");
    camera2.setAttribute("id", "camera2SecondCheckpointPage");
    camera2.setAttribute("src", "images/Kamera 1.png");

    checkpointBackground.append(camera1, camera2);

    let infoButton = document.createElement("div");
    infoButton.setAttribute("id", "infoButtonSecondCheckpointPage");
    infoButton.textContent = "?";
    infoButton.addEventListener("click", (event) => {
        secondCheckpointHint();
    })

    checkpointBackground.appendChild(infoButton);

    let heading = document.createElement("h1");
    heading.setAttribute("id", "headingSecondCheckpointPage");
    heading.textContent = "CHECKPOINT KOD";          
    checkpointBackground.appendChild(heading);

    for(let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        input.classList.add("inputSecondCheckpointPage");
        input.setAttribute("id", `input${i+1}SecondCheckpointPage`);
        input.setAttribute("maxlength", "1");
        checkpointBackground.appendChild(input);

        if(i !== 3) {
            input.oninput = (event) => {
                autoTab(event.currentTarget, event.currentTarget.nextElementSibling.id);
            }
        }
    }

    let checkpointButton = document.createElement("button");
    checkpointButton.setAttribute("id", "buttonSecondCheckpointPage");
    checkpointBackground.appendChild(checkpointButton);
    checkpointButton.textContent = "Klar";
    checkpointButton.addEventListener("click", function(event) {
        checkAnswerSecondCheckpointPage();
    })
}

function secondCheckpointHint() {
    if(!document.querySelector("div#overlayInfoButtonSecondCheckpointPage")) {
        document.querySelector("div#infoButtonSecondCheckpointPage").style.color = "#353535";
        document.querySelector("div#infoButtonSecondCheckpointPage").style.borderColor = "#353535";
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayInfoButtonSecondCheckpointPage");
        document.querySelector("div#secondCheckpointBackground").appendChild(overlay);

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerSecondCheckpointPage");
        overlay.appendChild(infoContainer);

        infoContainer.innerHTML =
        `
        Hmm.. Undrar vad <br> länken i annonsen <br> leder till..
        `;

    } else {
        document.querySelector("div#overlayInfoButtonSecondCheckpointPage").remove();
        document.querySelector("div#infoButtonSecondCheckpointPage").style.color = "#FBF8F4";
        document.querySelector("div#infoButtonSecondCheckpointPage").style.borderColor = "#FBF8F4";
    }
}

function checkAnswerSecondCheckpointPage() {
    let digits = '';
    for (let i = 0; i < 4; i++) {
        digits += document.getElementById(`input${i+1}SecondCheckpointPage`).value;
    }
    if (digits === '1000') {
        renderProloguePage();
    } 
}
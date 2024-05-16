const images = [
    { src: 'images/character_4x.png', correct: false },
    { src: 'images/Miranda_4x.png', correct: false },
    { src: 'images/prasten 1.png', correct: true },
    { src: 'images/beatrice_holm 3.png', correct: true },
    { src: 'images/welmer_frisk 1.png', correct: true },
    { src: 'images/Karin_4x.png', correct: false },
    { src: 'images/Barbro_4x.png', correct: false }
];

function renderDragSuspectsPage() {
    let body = document.querySelector("body");

    window.addEventListener("resize", (event) => {
        showContentForOrientation();
    });

    showContentForOrientation();

    function showContentForOrientation() {

        if(window.matchMedia("(orientation: landscape)").matches) { 
            body.innerHTML = "";
            let dragSuspectsBackground = document.createElement("div");
            dragSuspectsBackground.setAttribute("id", "dragSuspectsBackground");
            body.appendChild(dragSuspectsBackground);

            dragSuspectsBackground.innerHTML = 
            `
            <div class="dropArea" id="dropArea1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="greyAreaInFrame" id="greyAreaInFrame1">?</div>
                <div class="frameAroundSuspectDragPage" id="dropFrame1"></div>
            </div>
            <div class="dropArea" id="dropArea2" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="greyAreaInFrame" id="greyAreaInFrame2">?</div>
                <div class="frameAroundSuspectDragPage" id="dropFrame2"></div>
            </div>
            <div class="dropArea" id="dropArea3" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="greyAreaInFrame" id="greyAreaInFrame3">?</div>
                <div class="frameAroundSuspectDragPage" id="dropFrame3"></div>
            </div>
            <div id="draggableImages"></div>
            `;
            let infoButton = document.createElement("div");
            infoButton.setAttribute("id", "infoButtonDragSuspectsPage");
            infoButton.textContent = "?";
            dragSuspectsBackground.appendChild(infoButton);

            infoButton.addEventListener("click", explainDraggingSuspects);

            let dragSuspectsBackgroundOverlay = document.createElement("div");
            dragSuspectsBackgroundOverlay.setAttribute("id", "dragSuspectsBackgroundOverlay");
            dragSuspectsBackground.appendChild(dragSuspectsBackgroundOverlay);

            setupGame();

            for(let i = 0; i < 7; i++) {
                let name = document.createElement("p");
                name.setAttribute("id", `name${i+1}DragSuspectsPage`);
                name.classList.add("possibleSuspectName");
                document.querySelector("div#draggableImages").appendChild(name);
        
                if(i === 0) {
                    name.textContent = "Muhammed Karat";
                } else if(i === 1) {
                    name.textContent = "Miranda";
                } else if(i === 2) {
                    name.textContent = "Prästen";
                } else if(i === 3) {
                    name.innerHTML = "Beatrice <br> Holm";
                } else if(i === 4) {
                    name.textContent = "Welmer Frisk";
                } else if(i === 5) {
                    name.textContent = "Karin Fahlén";
                } else {
                    name.innerHTML = "Barbro <br> Palm";
                }
            }

        } else {
            body.innerHTML = "";
            let turnMobileDeviceBackground = document.createElement("div");
            turnMobileDeviceBackground.setAttribute("id", "turnMobileDeviceBackgroundBefore")
            body.appendChild(turnMobileDeviceBackground);
            let turnMobileDeviceSign = document.createElement("img");
            turnMobileDeviceSign.setAttribute("id", "turnMobileDeviceSignBefore");
            turnMobileDeviceSign.setAttribute("src", "images/flipPhone_512w.png");
            turnMobileDeviceBackground.appendChild(turnMobileDeviceSign);
        }
    }
}

function explainDraggingSuspects(event) {
    if(!document.querySelector("div#screenOverlayInfoButtonDragSuspectsPage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "screenOverlayInfoButtonDragSuspectsPage");
        document.querySelector("div#dragSuspectsBackground").appendChild(overlay);

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("id", "infoContainerDragSuspectsPage");
        overlay.appendChild(infoContainer);

        infoContainer.innerHTML =
        `
        Dra de tre misstänkta <br> 
        till de tomma ramarna <br> 
        för att gå vidare 
        `;

    } else {
        document.querySelector("div#screenOverlayInfoButtonDragSuspectsPage").remove();
    }
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropZone = event.currentTarget;
    console.log(event);
    console.log(event.currentTarget);

    // Kontrollera att drop-zone inte redan innehåller en bild
    if (dropZone.classList.contains('dropArea') && dropZone.children.length === 2) {
        dropZone.appendChild(document.getElementById(data));
        console.log(event.currentTarget.children);

        for(let i = 0; i < event.currentTarget.children.length; i++) {
            console.log(event.currentTarget.children[i]);
            console.log(event.currentTarget.style);
            if(event.currentTarget.children[i].classList.contains("greyAreaInFrame")) {
                event.currentTarget.children[i].style.visibility = "collapse";
                //event.currentTarget.children[i].remove();

            } 
            
            if(event.currentTarget.children[i].classList.contains("frameAroundSuspectDragPage")) {
                event.currentTarget.children[i].style.visibility = "collapse";
                //event.currentTarget.children[i].remove();

            }
        }
        console.log(event.currentTarget.children);

        for(let i = 0; i < event.currentTarget.children.length; i++) {
            if(event.currentTarget.children[i].classList.contains("draggableImage")) {
                if(event.currentTarget.id === "dropArea1") {
                    event.currentTarget.children[i].setAttribute("id", "suspectDraggedToFrame1");
                } else if(event.currentTarget.id === "dropArea2") {
                    event.currentTarget.children[i].setAttribute("id", "suspectDraggedToFrame2");
                } else if(event.currentTarget.id === "dropArea3") {
                    event.currentTarget.children[i].setAttribute("id", "suspectDraggedToFrame3");
                }
            }
        }
    }

    let suspects = document.querySelectorAll("div.dropArea");
    let allSuspectsPlaced = true;
    for(let i = 0; i < suspects.length; i++) {
        console.log(suspects[i].children.length);
        if(suspects[i].children.length !== 3) {
            allSuspectsPlaced = false;
        }
    }

    if(allSuspectsPlaced === true) {
        let checkSuspectsArrow = document.createElement("img");
        checkSuspectsArrow.setAttribute("id", "arrowDragSuspectsPage");
        checkSuspectsArrow.setAttribute("src", "images/arrow_4x.png");
        checkSuspectsArrow.addEventListener("click", rightOrWrongSuspects);
        document.querySelector("div#dragSuspectsBackground").appendChild(checkSuspectsArrow);
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function setupGame() {
    const container = document.getElementById("draggableImages");
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Bild ${index + 1}`;
        img.draggable = true;
        img.id = `drag${index}`;
        img.classList.add("draggableImage");
        img.ondragstart = (event) => {
            event.dataTransfer.setData("text", event.target.id);
        };
        container.appendChild(img);
    });
}

function rightOrWrongSuspects(event) {

    let imagesArray = images;

    checkSelection();

    function checkSelection() {
        const dropAreas = document.querySelectorAll('.dropArea img');
        console.log(dropAreas);
        //const isCorrect = Array.from(dropAreas).every(img => images[parseInt(img.id.replace('drag', ''))].correct);
        
        //console.log(isCorrect);
        console.log(dropAreas[1].attributes);

        let suspectImagesArray = [];
        for(let i = 0; i < dropAreas.length; i++) {
            for(let ii = 0; ii < dropAreas[i].attributes.length; ii++) {
                let attributeElement = dropAreas[i].attributes[ii].textContent;
                let suspectSrcToImage = "";
                for(let iii = 0; iii < imagesArray.length; iii++) {
                    let arrayElementSourceKey = imagesArray[iii].src;
                    if(arrayElementSourceKey === attributeElement) {
                        suspectSrcToImage = arrayElementSourceKey;
                        console.log(suspectSrcToImage);
                        suspectImagesArray.push(suspectSrcToImage);
                    }
                }
            }
        }

        let allSuspectsAreCorrect = true;

        for(let i = 0; i < suspectImagesArray.length; i++) {
            let oneSuspectImage = suspectImagesArray[i];

            for(let ii = 0; ii < imagesArray.length; ii++) {

                if(oneSuspectImage === imagesArray[ii].src) {

                    if(!imagesArray[ii].correct) {
                        allSuspectsAreCorrect = false;
                    }
                }
            }
        }

        if(allSuspectsAreCorrect) {
            console.log("Alla misstänka är rätt");
            if(!document.querySelector("div#notifyUserIfRightOrWrongOverlay")) {
                let overlay = document.createElement("div");
                overlay.setAttribute("id", "notifyUserIfRightOrWrongOverlay");
                document.querySelector("div#dragSuspectsBackground").appendChild(overlay);
        
                let infoContainer = document.createElement("div");
                infoContainer.setAttribute("id", "infoContainerRightOrWrongDragSuspectsPage");
                overlay.appendChild(infoContainer);
        
                infoContainer.innerHTML =
                `
                Bra jobbat! Du lyckades gissa <br> 
                rätt på alla misstänkta. Nu är det <br> 
                dags att gå vidare i utredningen.
                `;
        
            } 
        } else {
            if(!document.querySelector("div#notifyUserIfRightOrWrongOverlay")) {
                let overlay = document.createElement("div");
                overlay.setAttribute("id", "notifyUserIfRightOrWrongOverlay");
                document.querySelector("div#dragSuspectsBackground").appendChild(overlay);
        
                let infoContainer = document.createElement("div");
                infoContainer.setAttribute("id", "infoContainerRightOrWrongDragSuspectsPage");
                overlay.appendChild(infoContainer);
        
                infoContainer.innerHTML =
                `
                Tyvärr var det fel gissat. Försök igen!
                `;
        
            }
        }
    }

}
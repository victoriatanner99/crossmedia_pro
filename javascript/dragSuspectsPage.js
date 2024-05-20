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

            /*dragSuspectsBackground.innerHTML = 
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
            <div id="draggableImages" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            `;*/

            dragSuspectsBackground.innerHTML = 
            `
            <div class="dropArea" id="dropArea1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="culpritFrameInDropArea"></div>
            </div>
            <div class="dropArea" id="dropArea2" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="culpritFrameInDropArea"></div>
            </div>
            <div class="dropArea" id="dropArea3" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="culpritFrameInDropArea"></div>
            </div>
            <div id="draggableImages" ondrop="drop(event)" ondragover="allowDrop(event)">
            <div id="showDropArea"></div>
            </div>
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
        event.currentTarget.style.color = "#353535";
        event.currentTarget.style.borderColor = "#353535";
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
        event.currentTarget.style.color = "#FBF8F4";
        event.currentTarget.style.borderColor = "#FBF8F4";
    }
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropZone = event.currentTarget;
  

    // Kontrollera att drop-zone inte redan innehåller en bild
    if (dropZone.classList.contains('dropArea') && dropZone.children.length === 1) {
        dropZone.appendChild(document.getElementById(data));

        for(let i = 0; i < event.currentTarget.children.length; i++) {
          
            /*if(event.currentTarget.children[i].classList.contains("greyAreaInFrame")) {
                event.currentTarget.children[i].style.visibility = "collapse";
                //event.currentTarget.children[i].remove();

            } 
            
            if(event.currentTarget.children[i].classList.contains("frameAroundSuspectDragPage")) {
                event.currentTarget.children[i].style.visibility = "collapse";
                //event.currentTarget.children[i].remove();
            }*/

            if(event.currentTarget.children[i].classList.contains("culpritFrameInDropArea")) {
                //event.currentTarget.children[i].style.visibility = "collapse";
                event.currentTarget.children[i].remove();
            }
            
        }

        for(let i = 0; i < event.currentTarget.children.length; i++) {
            if(event.currentTarget.children[i].classList.contains("draggableImage")) {
                if(event.currentTarget.id === "dropArea1") {
                    //event.currentTarget.children[i].setAttribute("id", "suspectDraggedToFrame1");
                } else if(event.currentTarget.id === "dropArea2") {
                    //event.currentTarget.children[i].setAttribute("id", "suspectDraggedToFrame2");
                } else if(event.currentTarget.id === "dropArea3") {
                    //event.currentTarget.children[i].setAttribute("id", "suspectDraggedToFrame3");
                }
                event.currentTarget.children[i].classList.add("suspectDraggedToFrame");
                let suspectId = event.currentTarget.children[i].id;
                event.currentTarget.children[i].classList.remove(`${suspectId}`);

                /*let replacementElement = document.createElement("div");
                replacementElement.classList.add(suspectId);
                document.querySelector("div#draggableImages").appendChild(replacementElement);*/

            }
        }

        const dropAreas = document.querySelectorAll('.dropArea');
        for(let i = 0; i < dropAreas.length; i++) {
            if(dropAreas[i].children.length === 0) {
                let frameInsideDropArea = document.createElement("div");
                frameInsideDropArea.classList.add("culpritFrameInDropArea");
                dropAreas[i].appendChild(frameInsideDropArea);
            }
        }

        let suspects = document.querySelectorAll("div.dropArea");
        let allSuspectsPlaced = true;
        for(let i = 0; i < suspects.length; i++) {
            if(!suspects[i].children[0].classList.contains("suspectDraggedToFrame")) {
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
        

        if(data === "drag0") {
            document.querySelector("p#name1DragSuspectsPage").style.visibility = "hidden";
        } else if(data === "drag1") {
            document.querySelector("p#name2DragSuspectsPage").style.visibility = "hidden";
        } else if(data === "drag2") {
            document.querySelector("p#name3DragSuspectsPage").style.visibility = "hidden";
        } else if(data === "drag3") {
            document.querySelector("p#name4DragSuspectsPage").style.visibility = "hidden";
        } else if(data === "drag4") {
            document.querySelector("p#name5DragSuspectsPage").style.visibility = "hidden";
        } else if(data === "drag5") {
            document.querySelector("p#name6DragSuspectsPage").style.visibility = "hidden";
        } else if(data === "drag6") {
            document.querySelector("p#name7DragSuspectsPage").style.visibility = "hidden";
        }


    } else if(dropZone.id === "draggableImages") {
        dropZone.appendChild(document.getElementById(data));
        document.getElementById(data).classList.remove("suspectDraggedToFrame");
        document.getElementById(data).classList.add(data);
        //document.querySelector(`div#draggableImages > div.${data}`).remove();

        const dropAreas = document.querySelectorAll('.dropArea');
        for(let i = 0; i < dropAreas.length; i++) {
            if(dropAreas[i].children.length === 0) {
                let frameInsideDropArea = document.createElement("div");
                frameInsideDropArea.classList.add("culpritFrameInDropArea");
                dropAreas[i].appendChild(frameInsideDropArea);
            }
        }

        if(data === "drag0") {
            document.querySelector("p#name1DragSuspectsPage").style.visibility = "visible";
        } else if(data === "drag1") {
            document.querySelector("p#name2DragSuspectsPage").style.visibility = "visible";
        } else if(data === "drag2") {
            document.querySelector("p#name3DragSuspectsPage").style.visibility = "visible";
        } else if(data === "drag3") {
            document.querySelector("p#name4DragSuspectsPage").style.visibility = "visible";
        } else if(data === "drag4") {
            document.querySelector("p#name5DragSuspectsPage").style.visibility = "visible";
        } else if(data === "drag5") {
            document.querySelector("p#name6DragSuspectsPage").style.visibility = "visible";
        } else if(data === "drag6") {
            document.querySelector("p#name7DragSuspectsPage").style.visibility = "visible";
        }

        if(document.querySelector("img#arrowDragSuspectsPage")) {
            document.querySelector("img#arrowDragSuspectsPage").remove();
        }
    }
}

function allowDrop(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function setupGame() {
    const container = document.querySelector("div#draggableImages");
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Bild ${index + 1}`;
        img.draggable = true;
        img.id = `drag${index}`;
        img.classList.add("draggableImage");
        img.classList.add(`drag${index}`);
        img.ondragstart = (event) => {
            event.dataTransfer.setData("text", event.target.id);
        };
        container.appendChild(img);
    });
}

function rightOrWrongSuspects(event) {

    let imagesArray = images;
    event.stopPropagation();
    /*if(event.currentTarget === event.originalTarget) {

    }*/
    checkSelection();

    function checkSelection() {
        const dropAreas = document.querySelectorAll('.dropArea img');

        let suspectImagesArray = [];
        for(let i = 0; i < dropAreas.length; i++) {
            for(let ii = 0; ii < dropAreas[i].attributes.length; ii++) {
                let attributeElement = dropAreas[i].attributes[ii].textContent;
                let suspectSrcToImage = "";
                for(let iii = 0; iii < imagesArray.length; iii++) {
                    let arrayElementSourceKey = imagesArray[iii].src;
                    if(arrayElementSourceKey === attributeElement) {
                        suspectSrcToImage = arrayElementSourceKey;
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
            if(!document.querySelector("div#notifyUserIfRightOrWrongOverlay")) {
                document.querySelector("div#infoButtonDragSuspectsPage").style.zIndex = "3";

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

                document.querySelector("img#arrowDragSuspectsPage").remove();
                let newArrow = document.createElement("img");
                newArrow.setAttribute("id", "arrow2DragSuspectsPage");
                newArrow.setAttribute("src", "images/arrow_4x.png");
                overlay.appendChild(newArrow);

                newArrow.addEventListener("click", (event) => {
                    renderPoliceAudioFilePage();
                });
            } 
        } else {
            if(!document.querySelector("div#notifyUserIfRightOrWrongOverlay")) {
                document.querySelector("div#infoButtonDragSuspectsPage").style.zIndex = "3";

                let overlay = document.createElement("div");
                overlay.setAttribute("id", "notifyUserIfRightOrWrongOverlay");
                document.querySelector("div#dragSuspectsBackground").appendChild(overlay);
        
                let infoContainer = document.createElement("div");
                infoContainer.setAttribute("id", "infoContainerRightOrWrongDragSuspectsPage");
                overlay.appendChild(infoContainer);
        
                infoContainer.innerHTML =
                `
                Tyvärr var det fel gissat. Försök <br> igen!
                `;

                document.querySelector("img#arrowDragSuspectsPage").remove();
                let newArrow = document.createElement("img");
                newArrow.setAttribute("id", "arrow2DragSuspectsPage");
                newArrow.setAttribute("src", "images/arrow_4x.png");
                overlay.appendChild(newArrow);

                newArrow.addEventListener("click", (event) => {
                    renderDragSuspectsPage();
                });
            }
        }
    }
}
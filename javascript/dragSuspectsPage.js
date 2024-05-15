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

            let dragSuspectsBackgroundOverlay = document.createElement("div");
            dragSuspectsBackgroundOverlay.setAttribute("id", "dragSuspectsBackgroundOverlay");
            body.appendChild(dragSuspectsBackgroundOverlay);

            let infoButton = document.createElement("div");
            infoButton.setAttribute("id", "infoButtonDragSuspectsPage");
            infoButton.textContent = "?";
            dragSuspectsBackground.appendChild(infoButton);

            infoButton.addEventListener("click", explainDraggingSuspects);

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
    if(!document.querySelector("div#overlayDragSuspectsPage")) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "overlayDragSuspectsPage");
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
        document.querySelector("div#overlayDragSuspectsPage").remove();
    }
}
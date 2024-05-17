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
            chefOfPolice.setAttribute("src", "images/Polismästaren.png")

            let speechBubble = document.createElement("div");
            speechBubble.setAttribute("id", "speechBubble1PoliceCallPage");
            speechBubble.innerHTML = 
            `
            <p id="textFromCallPoliceCallPage"></p>
            <img id="arrowPoliceCallPage" src="images/arrow_4x.png"></img>
            `;

            blueBackground.append(lampPost, flowers, speechBubble, chefOfPolice);



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
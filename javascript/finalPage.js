function renderFinalPage(event) {

    document.querySelector("body").innerHTML = "";
    let background = document.createElement("div");
    background.setAttribute("id", "backgroundFinalPage");
    document.querySelector("body").appendChild(background);

    let sign = document.createElement("img");
    sign.setAttribute("id", "lasseMajaSignFinalPage");
    sign.setAttribute("src", "images/lasseMajaSign_4x.png");

    background.appendChild(sign);

    let heading = document.createElement("h1");
    heading.setAttribute("id", "headingFinalPage");
    heading.textContent = "Äntligen är mysteriet löst. Utan dig hade det inte gått. Tack för hjälpen!";
    background.appendChild(heading);

    let lasseAndMaja = document.createElement("img");
    lasseAndMaja.setAttribute("id", "lasseAndMajaFinalPage");
    lasseAndMaja.setAttribute("src", "images/lassemaja_2 1.png");
    background.appendChild(lasseAndMaja);
    
    let surveyLink = document.createElement("a");
    surveyLink.setAttribute("id", "linkToSurvey");
    surveyLink.textContent = "Gå till enkät";
    background.appendChild(surveyLink);
    surveyLink.setAttribute("target", "_blank");
    document.querySelector("a#linkToSurvey").setAttribute("href", "https://docs.google.com/forms/d/e/1FAIpQLSdWg3axB0ZuRbzsJVh2CunD6z7cWpBi39gQ2aJuv3gYwicYqw/viewform");

    let audio = document.createElement("audio");
    audio.setAttribute("id", "audioPlayer");
    audio.setAttribute("type", "audio/mpeg");
    audio.setAttribute("src", "audio/finalpage.mp3");
    document.querySelector("h1#headingFinalPage").appendChild(audio);

    audio.play();
}


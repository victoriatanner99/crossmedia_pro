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
}
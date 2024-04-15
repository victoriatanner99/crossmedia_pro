"use strict";

function renderIntroPage() {
    document.querySelector("div#startPageBackground").remove();
    let body = document.querySelector("body");
    let introPageContainer = document.createElement("div");
    introPageContainer.setAttribute("id", "introPageContainer");
    body.appendChild(introPageContainer);
}
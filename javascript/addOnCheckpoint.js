function renderAddOnCheckpoint() {
    document.querySelector("body").innerHTML = "";
    let firstCheckpointBackground = document.createElement("div");
    firstCheckpointBackground.setAttribute("id", "firstCheckpointBackground");
    document.querySelector("body").appendChild(firstCheckpointBackground);

    let rightFlowerImage = document.createElement("img");
    rightFlowerImage.setAttribute("id", "rightFlowerImageFirstCheckpointPage");
    rightFlowerImage.setAttribute("src", "images/Group 17.png");
    firstCheckpointBackground.appendChild(rightFlowerImage);

    let leftFlowerImage = document.createElement("img");
    leftFlowerImage.setAttribute("id", "leftFlowerImageFirstCheckpointPage");
    leftFlowerImage.setAttribute("src", "images/Clip path group.png");
    firstCheckpointBackground.appendChild(leftFlowerImage);

    let markerImage = document.createElement("img");
    markerImage.setAttribute("id", "markerFirstCheckpointPage");
    markerImage.setAttribute("src", "images/checkpoint-removebg-preview 2.png");
    firstCheckpointBackground.appendChild(markerImage);

    let headingFirstCheckpointPage = document.createElement("h1");
    headingFirstCheckpointPage.setAttribute("id", "headingFirstCheckpointPage");
    headingFirstCheckpointPage.textContent = "CHECKPOINT KOD";          
    firstCheckpointBackground.appendChild(headingFirstCheckpointPage);

    let backArrow = document.createElement("img");
    backArrow.setAttribute("id", "goBackArrow");
    backArrow.setAttribute("src", "images/bakpil.png");
    firstCheckpointBackground.appendChild(backArrow);

    backArrow.addEventListener("click", goBackToLoginInfo);

    for(let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        input.classList.add("inputFirstCheckpointPage");
        input.setAttribute("id", `input${i+1}FirstCheckpointPage`);
        input.setAttribute("maxlength", "1");
        input.setAttribute("type", "number");
        firstCheckpointBackground.appendChild(input);

        if(i !== 3) {
            input.oninput = (event) => {
                autoTab(event.currentTarget, event.currentTarget.nextElementSibling.id);
            }
        }
    }

    let checkpointButton = document.createElement("button");
    checkpointButton.setAttribute("id", "buttonFirstCheckpointPage");
    firstCheckpointBackground.appendChild(checkpointButton);
    checkpointButton.textContent = "Klar";
    checkpointButton.addEventListener("click", function(event) {

        checkAnswerAddOnCheckpoint();
    });
}

function goBackToLoginInfo() {
    renderLoginInfo();
}

function autoTab(current, next) {
    if (current.value.length === current.maxLength) {
        document.getElementById(next).focus();
    }
}

function checkAnswerAddOnCheckpoint() {
    let digits = '';
    for (let i = 0; i < 4; i++) {
        digits += document.getElementById(`input${i+1}FirstCheckpointPage`).value;
    }
    if (digits === '1085') {
        renderDragSuspectsPage();
    } 
}
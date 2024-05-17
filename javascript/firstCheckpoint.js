function renderFirstCheckpoint() {
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

    for(let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        input.classList.add("inputFirstCheckpointPage");
        input.setAttribute("id", `input${i+1}FirstCheckpointPage`);
        input.setAttribute("maxlength", "1");
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
        checkAnswerFirstCheckpointPage();
    })
}


function autoTab(current, next) {
    if (current.value.length === current.maxLength) {
        document.getElementById(next).focus();
    }
}

function checkAnswerFirstCheckpointPage() {
    let digits = '';
    for (let i = 0; i < 4; i++) {
        digits += document.getElementById(`input${i+1}FirstCheckpointPage`).value;
    }
    if (digits === '1210') {
        renderRebusPage();
    } 
}

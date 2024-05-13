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
}


function autoTab(current, next) {
    if (current.value.length >= current.maxLength) {
        document.getElementById(next).focus();
    }
}

function checkFullWord() {
    if (document.getElementById('letter5').value.length === 1) {
        checkAnswer();
    }
}

function checkAnswer() {
    var word = '';
    for (var i = 1; i <= 5; i++) {
        word += document.getElementById('letter' + i).value;
    }
    if (word.toLowerCase() === 'dator') {
        
        window.location.href = '../index.html';
      
    } else {
        alert('Fel svar, försök igen!');
    }
}

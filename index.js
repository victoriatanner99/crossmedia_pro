"use strict";

console.log(sessionStorage.getItem("lastPage"));

console.log(document.referrer);
if(window.sessionStorage.getItem("lastPage") === "firstCheckpoint") {
    renderRebusPage();
} else {
    renderStartPage();

}


//renderRebusPage();

//renderLoginInfo();

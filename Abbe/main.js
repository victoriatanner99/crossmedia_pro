function submitUsername() {
    const username = document.getElementById('username').value;
    if (username) {
        window.location.href = 'welcome.html?username=' + encodeURIComponent(username);
    } else {
        alert('Vänligen ange ett användarnamn.');
    }
}

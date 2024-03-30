function nextPage() {
    player1Name = document.getElementById("username").value;
    player2Name = document.getElementById("username2").value;
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    window.location = "game.html";
}
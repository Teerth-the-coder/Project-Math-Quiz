player1Name = localStorage.getItem("username");
player2Name = localStorage.getItem("username2");

player1Score = 0;
player2Score = 0;

qt = "P1";
at = "P2";

num1 = 0;
num2 = 0;
ans = 0;

document.getElementById("playerOneName").innerHTML = player1Name + ": &nbsp;" + player1Score;
document.getElementById("playerTwoName").innerHTML = player2Name + ": &nbsp;" + player2Score;
document.getElementById("questionTurn").innerHTML = "Question Turn - " + player1Name;
document.getElementById("answerTurn").innerHTML = "Answer Turn - " + player2Name;

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;

    ans = num1 * num2;

    document.getElementById("output").style.display = "block";
    document.getElementById("question").innerHTML = num1 + "X" + num2;

     document.getElementById("number1").value = "";
     document.getElementById("number2").value = "";
}
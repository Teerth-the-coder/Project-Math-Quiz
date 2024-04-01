player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

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

function check() {
    get_answer = document.getElementById("answerBox").value;
    if (get_answer == ans) {
        if (qt == "P1") {
            player1Score += 1;
            document.getElementById("playerOneName").innerHTML = player1Name + ": &nbsp;" + player1Score;
        } else {
            player2Score += 1;
            document.getElementById("playerTwoName").innerHTML = player2Name + ": &nbsp;" + player2Score;
        }
    }

    if (qt == "P1") {
        qt = "P2";
        at = "P1";
        document.getElementById("questionTurn").innerHTML = "Question Turn - " + player2Name;
        document.getElementById("answerTurn").innerHTML = "Answer Turn - " + player1Name;
    } else {
        qt = "P1";
        at = "P2";
        document.getElementById("questionTurn").innerHTML = "Question Turn - " + player1Name;
        document.getElementById("answerTurn").innerHTML = "Answer Turn - " + player2Name;
    }

    document.getElementById("output").style.display = "none";
}
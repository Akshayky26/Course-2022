var counter = 1;
var pl1score = 0;
var pl2score = 0;
function randomm() {
    var ran = Math.floor(Math.random() * 6 + 1);
    var d = document.getElementById("root");
    d.innerHTML = ran;
    if (counter % 2 == 1) {
        pl1score += ran;
        document.getElementById("pl1").innerHTML = pl1score;
    }
    else {
        pl2score += ran;
        document.getElementById("pl2").innerHTML = pl2score;
    }
    if (pl1score >= 50) {
        alert("Player 1 is the winner");
        pl1score = 0;
        pl2score = 0;
        document.getElementById("pl1").innerHTML = pl1score;
        document.getElementById("pl2").innerHTML = pl2score;
    }
    if (pl2score >= 50) {
        alert("Player 2 is the winner");
        pl1score = 0;
        pl2score = 0;
        document.getElementById("pl1").innerHTML = pl1score;
        document.getElementById("pl2").innerHTML = pl2score;
    }
    counter++;
}

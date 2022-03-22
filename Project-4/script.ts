var counter=1
var pl1score=0
var pl2score=0


function randomm(){
    var ran=Math.floor(Math.random()*6+1)
    var d=document.getElementById("root")
    d.innerHTML=ran as unknown as string
    if(counter%2==1){
        pl1score+=ran
        document.getElementById("pl1").innerHTML=pl1score as unknown as string
    }
    else{
        pl2score+=ran
        document.getElementById("pl2").innerHTML=pl2score as unknown as string
    }
    if(pl1score>=50){
        alert("Player 1 is the winner")
        pl1score=0
        pl2score=0
        document.getElementById("pl1").innerHTML=pl1score as unknown as string
        document.getElementById("pl2").innerHTML=pl2score as unknown as string
    }
    if(pl2score>=50){
        alert("Player 2 is the winner")
        pl1score=0
        pl2score=0
        document.getElementById("pl1").innerHTML=pl1score as unknown as string
        document.getElementById("pl2").innerHTML=pl2score as unknown as string
    }
    counter++

}


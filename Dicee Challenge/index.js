function randomNumber() {
    var random=Math.floor((Math.random()*6)+1);
    return random;
}
function dice(number,index) {

    var randomDiceImage="dice"+number+".png";
    var randomImageSource="images/"+randomDiceImage;
    var image=document.querySelectorAll("img")[index];
    image.setAttribute("src",randomImageSource);
}

function winner(firstNum,secondNum){
    if(firstNum > secondNum)
    {
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    }
    else if(secondNum>firstNum)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
    }
    else
    {
        document.querySelector("h1").innerHTML="💥Draw!";
    }
}

document.querySelector("button").addEventListener("click",handleClick);
function handleClick() {
    var firstRandomNumber=randomNumber();
    var secondRandomNumber=randomNumber();
    dice(firstRandomNumber,0);
    dice(secondRandomNumber,1);
    winner(firstRandomNumber,secondRandomNumber);
}

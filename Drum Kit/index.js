
//Detecting Button Press

var numberOfDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
       var ButtoninnerHTML=this.innerHTML;
       makeSounds(ButtoninnerHTML);       
       buttonAnimation(ButtoninnerHTML);  
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress",function(event) 
{    
    makeSounds(event.key);
    buttonAnimation(event.key);  
})

function makeSounds(key) {
    switch (key) {

        case "w": 
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
       default:console.log(key);
           break;
   }
}
function buttonAnimation(currentKey)
{
    var activeButtonKey=document.querySelector("."+ currentKey);
    activeButtonKey.classList.add("pressed");
    
    setTimeout(function () {
        activeButtonKey.classList.remove("pressed")
    },100);
}
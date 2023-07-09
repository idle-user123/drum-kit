var n=document.querySelectorAll(".drum").length;

for(i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        
        var buttontext=this.innerHTML;
        makesound(buttontext);
        buttonanimation(buttontext);
    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});

 function makesound(buttontext){
    switch (buttontext) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonanimation(buttontext){
    var activebutton=document.querySelector("."+buttontext);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}


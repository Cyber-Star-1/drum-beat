var drumBeats = document.querySelectorAll(".drum").length;
for(i=0 ; i<drumBeats; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var innerhtml =this.innerHTML;
        makeSound(innerhtml);
        buttonAnimation(innerhtml);
    });
    
};
document.addEventListener("keypress",function(event){ 
    makeSound(event.key);
    buttonAnimation(event.key);
 });


function makeSound(key){
    switch (key) {
        case "w":
       var audio = new Audio("./sounds/tom-1.mp3");
       audio.play(); 
    break;
        case "a":
        var audio1 = new Audio("./sounds/tom-2.mp3");
        audio1.play(); 
    break;
        case "s":
        var audio2 = new Audio("./sounds/tom-3.mp3");
        audio2.play(); 
    break;
        case "d":
        var audio3 = new Audio("./sounds/tom-4.mp3");
        audio3.play(); 
    break;
        case "j":
        var audio4 = new Audio("./sounds/snare.mp3");
        audio4.play(); 
    break;
        case "k":
        var audio5 = new Audio("./sounds/crash.mp3");
        audio5.play(); 
    break;
        case "l":
        var audio6 = new Audio("./sounds/kick-bass.mp3");
        audio6.play(); 
        case "W":
       var audio = new Audio("./sounds/tom-1.mp3");
       audio.play(); 
    break;
        case "A":
        var audio1 = new Audio("./sounds/tom-2.mp3");
        audio1.play(); 
    break;
        case "S":
        var audio2 = new Audio("./sounds/tom-3.mp3");
        audio2.play(); 
    break;
        case "D":
        var audio3 = new Audio("./sounds/tom-4.mp3");
        audio3.play(); 
    break;
        case "J":
        var audio4 = new Audio("./sounds/snare.mp3");
        audio4.play(); 
    break;
        case "K":
        var audio5 = new Audio("./sounds/crash.mp3");
        audio5.play(); 
    break;
        case "L":
        var audio6 = new Audio("./sounds/kick-bass.mp3");
        audio6.play(); 

    default:
       console.log(innerhtml);
}
}
function buttonAnimation(currentkey) {
    var activekey = document.querySelector("."+currentkey);
    activekey.classList.add("pressed")   ;

    
    setTimeout (function(){
        activekey.classList.remove("pressed")
    }, "200")
}

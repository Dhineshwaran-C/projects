console.log("Happy to meet u");
console.log(document.getElementById("top"))
console.log(document.getElementsByClassName("container"))
console.log(document.getElementsByTagName("img"))

console.log(document.querySelectorAll('.header-text'))
console.log(document.querySelector('.header-text'))
console.log(document.querySelectorAll('#top'))


var countdownElement = document.getElementById('countdown')
var bgimage = document.querySelectorAll('bg-sec')
console.log(bgimage)
var initialCountdown = countdownElement.innerHTML
var initialbgimage = bgimage.innerCSS
var interval = setInterval(function() {
    initialCountdown = initialCountdown > 0 ? initialCountdown -= 1 : 0
    countdownElement.innerHTML = initialCountdown
    var bgimagepath = initialCountdown % 2 === 0 ? "images/header-bg.jpg" : "images/testimonial-bg.jpg"
    if (initialCountdown<=0){
        clearInterval(interval);
    }
},1000)

var countdownElement2 = document.getElementById('countdown2')
var initialCountdown2 = countdownElement2.innerHTML
var interval2 = setInterval(function(){
        initialCountdown2 = initialCountdown2 > 0 ? initialCountdown2 -= 1 : 0
        countdownElement2.innerHTML = initialCountdown2
        countdownElement2.style.fontSize = initialCountdown2 * 100 + "px"
        if (initialCountdown2<=0){
            clearInterval(interval2);
        }
},1000)

var button = document.getElementById("btn-click")
//button.onclick = function() {
//    alert("Button Clicked")
//}

function onBtnClick() {
    button.style.backgroundColor = "blue"
    alert("Button Clicked")
}
button.addEventListener('click',onBtnClick)

var button2 = document.getElementById("btn-click2")
var mainDiv = document.querySelector(".change")
console.log(mainDiv)
//function onBtnClick2() {
//    mainDiv.style.backgroundColor = "blue";
//}

//button2.addEventListener('click',onBtnClick2)
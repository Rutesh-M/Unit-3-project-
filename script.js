/* Declare variables below to save the different sections (divs) of your story*/


let option1button = document.querySelector(".option-one")

let option1screen = document.querySelector(".option-one-screen");
/*let option1button =document.querySelector(".option-one");
*/
let option2button = document.querySelector(".option-two");

let option2screen = document.querySelector(".option-two-screen");

let storyopen = document.querySelector(".story-opening");

let option3 = document.querySelector(".option-three");

let option4 = document.querySelector(".option-four");

let option5 = document.querySelector(".option-five");

let option6 = document.querySelector(".option-six");

let option7 = document.querySelector(".option-seven");

let option8 = document.querySelector(".option-eight");

let option9 = document.querySelector(".option-nine");

let option1end = document.querySelector(".option-one-end");

let option2end = document.querySelector(".option-two-end");

let option3end = document.querySelector(".option-three-end");

let button = document.querySelector(".buttons")

let button2 = document.querySelector(".buttons2")

let button3 = document.querySelector(".buttons3")

let button4 = document.querySelector(".buttons4")

let button5 = document.querySelector(".buttons5")
let com = document.querySelector(".compliment")

let title = document.querySelector(".title")

let body = document.querySelector(".body")
let jump = document.querySelector(".jump")
/*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
option1button.onclick = function() {
  option1screen.style.display = "block";
  storyopen.style.display = "none";
  button.style.display = "none";
};



option2button.onclick = function() {
  option2screen.style.display = "block"
  storyopen.style.display = "none";
  button.style.display = "none";
};

option3.onclick = function() {
  option1end.style.display = "block"
  option1screen.style.display = "none";
  button.style.display = "none";
};

option7.onclick = function() {
  storyopen.style.display = "block"
  option1end.style.display = "none";
  button.style.display = "block";
  setTimeout(() => {
    jump.style.display = "block";
    storyopen.style.display = "none"
    button.style.display = "none"
    title.style.display = "none"
    option1screen.style.display = "none"
    option2screen.style.display = "none"
    option1end.style.display = "none"
    option2end.style.display = "none"
    option3end.style.display = "none"
  }, 2000)
    ;
};

option4.onclick = function() {
  option2end.style.display = "block"
  option1screen.style.display = "none";
  button.style.display = "none";
  
};

option8.onclick = function() {
  storyopen.style.display = "block"
  option2end.style.display = "none";
  button.style.display = "block";
  setTimeout(() => {
    jump.style.display = "block";
    storyopen.style.display = "none"
    button.style.display = "none"
    title.style.display = "none"
    option1screen.style.display = "none"
    option2screen.style.display = "none"
    option1end.style.display = "none"
    option2end.style.display = "none"
    option3end.style.display = "none"
  }, 2000)
};

option6.onclick = function() {
  option3end.style.display = "block"
  option2screen.style.display = "none";
  button.style.display = "none";
  title.innerHTML = "Hell";

};

option9.onclick = function() {
  storyopen.style.display = "block"
  option3end.style.display = "none";
  button.style.display = "block";
  title.innerHTML = "The end"
  setTimeout(() => {
    jump.style.display = "block";
    storyopen.style.display = "none"
    button.style.display = "none"
    title.style.display = "none"
    option1screen.style.display = "none"
    option2screen.style.display = "none"
    option1end.style.display = "none"
    option2end.style.display = "none"
    option3end.style.display = "none"
  }, 2000)
    ;

};

;
console.log(option3end)

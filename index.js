// here the button is slected from the DOM and event listener is added in order to perfom the operation. so at first the code will search the buttion on first and perform the click and pass the handleClick from the function is created after the later time hence parenthesis is not used. 
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//   alert("i got clicked");
// }

//way of using the anonymous function. the anonymous function are the function that doesn't have name to be passed it can be directly pased as shown below of the above code. 
// document.querySelectorAll("button")[0].addEventListener("click", function () {
//   alert("i got clicked")
// });

// document.querySelectorAll("button")[1].addEventListener("click", function () {
//   alert("i got clicked")
// });

// document.querySelectorAll("button")[2].addEventListener("click", function handleClick() {
//   alert("i got clicked")
// });
// document.querySelectorAll("button")[3].addEventListener("click", function handleClick() {
//   alert("i got clicked")
// });
// document.querySelectorAll("button")[4].addEventListener("click", function handleClick() {
//   alert("i got clicked")
// });
// document.querySelectorAll("button")[5].addEventListener("click", function handleClick() {
//   alert("i got clicked")
// });
// document.querySelectorAll("button")[6].addEventListener("click", function handleClick() {
//   alert("i got clicked")
// });

//rather than typing this lots of times we will be using the loop:

var numberofDrumButtons = document.querySelectorAll(".drum").length; //class drum is slecected only for drum not button 

//using for loop so 
for (i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //this is the identity of the button that trigger the addeventlistener
    // console.log(this); //this will get the button object
    // console.log(this.innerHTML); //this  will gives us the inner html of the button on the click event
    // this.style.color = "white"; //changing the color simply clicking on it. 

    //for multiples cases we can use the switch statement so
    var buttonInnerHTML = this.innerHTML // this keyword will perform the button as it triggerd the inner html 
    makeSound(buttonInnerHTML);  //used for detching button click
    buttonAnimation(buttonInnerHTML);
    /* for creating the constuctor funciton we have the following syntax for audio:
    function Audio(fileLocation){
      this.fileLocation = fileLocation;
      this.play = function (){
        tap in the audio hardware
        check the file location at the file exists
      }
    }
    */
  });
}
//creating for the key press and event on the fucntion allows us to triggered the evnt in the eventlistner
document.addEventListener("keypress", function(event) {   //creating the annonymous function as well we have used for entire document not specific
  makeSound(event.key); //used for detching button key pressed
  // console.log(event);

  //crating the buttonkey for animation
  buttonAnimation(event.key);
});



// creating the main function for both key press and click for sound for drum 
function makeSound(key) {
  switch (key) {
    case "w":
      // //able to create the sounds
      var tom1 = new Audio('sounds/tom-1.mp3'); //creating the variable of object and passing the url of the object
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;   // will end the funtion after it is completed

    default:
      console.log(buttonInnerHTML)
  }
};

//creating the button to make flash as an animation
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed")  //adding the class in js

  //creating the timout for the flash or animation 
  setTimeout(function() {
    activeButton.classList.remove("pressed") //after press on the button will remove

  }, 100);  //time 100 milisecond is done

}
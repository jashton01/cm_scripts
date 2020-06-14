

/*
Test Event Handling

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');
console.log(myImage);
let myNavBar = document.querySelector('nav');
console.log(myNavBar);

/*
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cm.png') {
      myImage.setAttribute ('src','images/sailthru.png');
    } else {
      myImage.setAttribute ('src','images/cm.png');
    }
}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('p');



/*

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to CM, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cm.png') {
      myImage.setAttribute ('src','images/sailthru.png');
    } else {
      myImage.setAttribute ('src','images/cm.png');
    }
}
*/

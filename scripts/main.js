

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

let myDescriptionClass = document.querySelector('.description');
console.log(myDescriptionClass);

// Set up form interceptor
const form = document.querySelector('.btn btn-secondary btn-block')
console.log(form);

let data = { 'username': 'example' };

function myTestFunction() {
  fetch('https://example.com/movies.json')
  {mode: 'no-cors'}
  .then(response => response.json())
  .then(data => console.log(data))
  .then(data => console.log(response));
}


function myFunction() {
  fetch('first_cm_script.py', {
  method: 'POST',
  body': JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

document.getElementById("client_creator").addEventListener("submit", myFunction);





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

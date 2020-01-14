let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/EaglesLogo.jpeg') {
      myImage.setAttribute ('src','images/EaglesGame.jpg');
    } else {
      myImage.setAttribute ('src','images/EaglesLogo.jpeg');
    }
}

let myButton = document.querySelector('button');
let myGreeting = document.getElementById('greeting');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myGreeting.innerHTML = 'Hi, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myGreeting.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
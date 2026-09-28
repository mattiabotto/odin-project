const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPara = document.createElement('p');
redPara.style.color = 'red';
redPara.textContent = "Hey I'm red!";
container.appendChild(redPara);

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

const pinkDiv = document.createElement('div');
pinkDiv.setAttribute('style', 'border: 2px solid black; background-color: pink;');

const innerHeader = document.createElement('h1');
innerHeader.textContent = "I'm in a div";
pinkDiv.appendChild(innerHeader);
const innerPara = document.createElement('p');
innerPara.textContent = "ME TOO!";
pinkDiv.appendChild(innerPara);

container.appendChild(pinkDiv);

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Event set as onclick property in the JavaScript');

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Event set attaching an event listener to the DOM node');
});

// With function name (the name without parenthesis represents the code of the function)
// METHODS 2 & 3
// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// }

// METHOD 2
// btn2.onclick = alertFunction;

// METHOD 3
// btn3.addEventListener("click", alertFunction);

// the parameter e receive a reference to the event
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
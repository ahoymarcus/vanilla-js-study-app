// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore('element', 'location')

const resultElement = document.querySelector('#result');

const first = document.querySelector('.red');


// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);



const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');

heading.appendChild(headingText);
heading.classList.add('blue');

resultElement.appendChild(heading);


console.log(result.children);


const newElement = document.createElement('div');
const newElementText  = document.createTextNode('another insertion here!!!');
newElement.appendChild(newElementText);
newElement.classList.add('green');
document.body.insertBefore(newElement, resultElement);













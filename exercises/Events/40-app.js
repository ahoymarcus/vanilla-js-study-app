// allows select dynamic elements
// that is, to select elements without even targeting them 
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target


const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const heading2 = document.querySelector('h2');

// const heading = document.querySelector('.heading');
// console.log(heading);




function sayHello() {
    console.log('hello there');
}

heading2.addEventListener('click', sayHello);

// heading.addEventListener('click', sayHello);


btn.addEventListener('click', () => {
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = `I'm inside the container`;
    container.appendChild(element);
});


/* 
    Usar BUBBLING UP to reference a dynamic inserted element
*/
container.addEventListener('click', (e) => {
    console.log('Hellooooooo owooooo');
});







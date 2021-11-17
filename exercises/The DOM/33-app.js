// CSS 
// Advantages:
// 1. separation of concerns
//      CSS inside CSS
//      JS inside JS
// 2. 



const random = document.querySelector('.random');


console.log(random.style);


// with the style method its necessary 
// to style one property at a time
random.style.backgroundColor = 'green';
random.style.color = 'yellow';
random.style.fontSize = '2rem';
random.style.textTransform = 'capitalize';


const random2 = document.querySelector('.random2');

random2.classList.add('title');









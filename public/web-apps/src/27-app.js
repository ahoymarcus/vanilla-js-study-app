// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');



const classValue = first.className;
console.log(classValue);


// overrinding values
second.className = 'colors'
second.className = 'text';


// not overrinding values
second.className = 'colors text';


// not overrinding values
third.classList.add('colors');

let thirdClassValues = third.classList;
console.log(thirdClassValues);

third.classList.add('text');
thirdClassValues = third.classList;
console.log(thirdClassValues);


let classResult = third.classList.contains('colors');
if (classResult) {
    console.log('third element has the class colors');
} else {
    console.log("third element doesn't have the class collor");
}



const fourth = document.getElementById('fourth');
fourth.classList.add('colors', 'text');
let fourthClassValues = fourth.classList;
console.log(fourthClassValues);

fourth.classList.remove('text');
fourthClassValues = fourth.classList;

console.log(fourthClassValues);









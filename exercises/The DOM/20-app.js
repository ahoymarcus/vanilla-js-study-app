// Window object - the Browser API
// And this represents a Tab Instance 
// Besides, this is the loopup for the 
// browser JS

// console.log(window);
console.dir(document);


// querySelector('any css') - selects first single element
// querySelectorAll('any css') - selects all
// querySelectorAll() works as a array, with its methods like forEach
const ulIdResult = document.querySelector('#result');

ulIdResult.style.backgroundColor = 'blue';


const item = document.querySelector('.special');

console.log(item);


const lastItem = document.querySelector('li:last-child');

console.log(lastItem);


const list = document.querySelectorAll('.special');

console.log(list);

list.forEach((item) => {
    console.log(item);
    item.style.color = 'yellow';
});





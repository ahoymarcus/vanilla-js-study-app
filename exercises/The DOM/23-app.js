// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);


// watchout for the whitespaces
let second = first.nextSibling;
second = first.nextSibling.nextSibling;
console.log(second);

second.style.color = 'red';



const last = document.querySelector('#last');

console.log(last);

console.log(last.nextSibling);
console.log(last.nextSibling.nextSibling);

// watchout for the whitespaces
let third = last.previousSibling;
console.log(third);
third = last.previousSibling.previousSibling;
console.log(third);








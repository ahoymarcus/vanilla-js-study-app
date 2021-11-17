// getAttribute()
// setAttribute()


const first = document.querySelector('.first');
const resultClass = first.getAttribute('class');
console.log(resultClass);

const resultId = first.getAttribute('id');
console.log(resultId);


const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);


const lastLi = link.nextElementSibling;
lastLi.setAttribute('class', 'first');
lastLi.textContent = 'I also have a class of first now';
console.log(lastLi);


const firstClass = document.querySelectorAll('.first');

console.log(firstClass);


















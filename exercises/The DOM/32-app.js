// innerHTML
// textConte

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');


// works only with plain text
console.log(div.textContent);
console.log(list.textContent);


// works with the WHOLE HTML STRUCTURE
console.log(list.innerHTML);


// see how it was not necessary to 
// make the whole course to each 
// particular element being created 
// and appended, INCLUDING the CLASS
const ul = document.createElement('ul');
ul.innerHTML = `
    <li class="item">list item</li>
	<li>list item</li>
    <li class="item">list item</li>
	<li>list item</li>
    <li class="item">list item</li>
	<li>list item</li>
`;
document.body.appendChild(ul);






// nodeValue
// textContent

const item = document.getElementById('special');

let value = item.nodeValue;

// with nodeValue you have to iterate the array
console.log(value);
console.log(item.childNodes);
console.log(item.childNodes[0].nodeValue);

console.log(item.firstChild.nodeValue);

value = item.childNodes[0].nodeValue;
console.log(value);


// this one is more direct into the element value
let easyValue = item.textContent;
console.log(easyValue);









// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection
// ChildNodes - returns all childNode including WHITESPACES which is treated as a TEXT NODE
// children - only returns actual children
// firstChild
// lastChild

const resultId = document.querySelector('#result');


// ChildNodes - returns all childNode including WHITESPACES which is treated as a TEXT NODE
const allChildren = resultId.childNodes;
console.log(allChildren);


// children - only returns actual 
const children = result.children;
console.log(children);


// firstChild
// lastChild
console.log(resultId.firstChild);
console.log(result.lastChild);









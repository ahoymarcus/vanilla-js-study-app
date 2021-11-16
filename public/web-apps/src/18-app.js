// Window object - the Browser API
// And this represents a Tab Instance 
// Besides, this is the loopup for the 
// browser JS

// console.log(window);
console.dir(document);


// getElementsByTagName - return Node List that have indexes and length, 
// but not all array properties
const headings = document.getElementsByTagName('h2')

console.log(headings);

headings[0].style.color = 'red';

console.log(headings.length);

const items = document.getElementsByTagName('li');


// Uncaught TypeError: items.forEach is not a function
try {
    items.forEach((item) => {
        console.log(item);
    });

} catch (err) {
    console.log(err);
}


const betterItems = [...items];
betterItems.forEach((item) => {
    console.log(item);
});

items[2].style.color = 'red';


console.log(`Again, here the original Node List with Lis:`);
console.log(headings)

console.log(`And here the transformed Node List with spread operator:`);
console.log(betterItems);







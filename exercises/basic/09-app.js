// High Order Functions
function morning(name) {
    return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
    return `Good afternoon ${name.repeat(3)}`;
}



/* THE HIGH ORDER FUNCTION */
/* 
    Think of a generic function that receives specific logic from smaller functions...
*/
function greet(name, callback) {
    const myName = 'John';

    console.log(`${callback(name)}, my name is ${myName}`);
}

greet('billy', morning);
greet('peter', afternoon);




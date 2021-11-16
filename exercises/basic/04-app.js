
// storing dimensions in cm
function calculate(value) {
    return value * 2.54;
}

let width = calculate(100);
let height = calculate(80);


let dimensions = [];
dimensions.push(width, height);

console.log(dimensions);


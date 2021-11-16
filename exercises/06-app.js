let names = ['john', 'bobo', 'barry', 'olga', 'ben'];
const lastNames = ['pepper', 'onion', 'banana'];


console.log(names.length);
console.log(names[names.length - 1]);


// concat
const allNames = names.concat(lastNames);
console.log(allNames);

console.log(allNames.reverse());

// unshift - inserir no início 
// não é imutável
allNames.unshift('susy');
console.log(allNames);

// shift - retirar no início 
// não é imutável
allNames.shift();
console.log(allNames);

// push - inserir no final 
// não é imutável
allNames.push('susy');
console.log(allNames);

// pop - retirar no final 
// não é imutável
allNames.pop();
console.log(allNames);


console.log(allNames.slice(1, 5));

// splice - também não é imutável
const specificNames = allNames.splice(2, 1);

console.log(specificNames);
console.log(allNames);




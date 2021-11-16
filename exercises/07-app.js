
const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';


let newArray = [];


for (let i=0; i < names.length; i++) {
    newArray[i] = `${names[i]} ${lastName}`;
}


console.log(newArray);



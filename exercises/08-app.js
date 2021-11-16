
const gas = [20, 40, 100];
const food = [10, 40, 50];


function calculateTotal(arr) {
    let total = 0;
    let msg = '';

    for (let i=0; i < arr.length; i++) {
        total += arr[i];
    }

    if (total > 100) {
        msg = `Whoa! You are spending way too much!!!`;

        return { total, msg };
    }

    msg = `That's all right, the spending is Ok!`;

    return { total, msg };
}


const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
    totalGas: gasTotal,
    totalFood: foodTotal,
    totalRandom: randomTotal
});




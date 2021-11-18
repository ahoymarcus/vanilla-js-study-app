// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured


const p1 = document.querySelectorAll('.p1');
const p2 = document.querySelectorAll('.p2');



// usar e.currentTarget
p1.forEach((p) => {
    p.addEventListener('click', (e) => {
        //console.log(e);
        console.log('e.currentTarget ', e.currentTarget);

        e.currentTarget.style.color = 'darkgreen';
    });
});



// usar e.target
p2.forEach(function (p) {
    p.addEventListener('click', function (e) {
        //console.log(e);
        console.log('e.currentTarget ', e.currentTarget);
        console.log('e.target ', e.target);

        e.target.style.color = 'orangered';
    });
});















let num = [1,2,3,4,5];

const squares = num.map(square);

console.log(squares);

function square(element){
    return Math.pow(element,2);
}
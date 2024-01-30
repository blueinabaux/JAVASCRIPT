let num = [1,2,3,4,5];

const even = num.filter(isEven);

console.log(even);

function isEven(element){
    return element%2 === 0;
}
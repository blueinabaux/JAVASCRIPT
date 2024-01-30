let nums = [1,2,3,4,5];

const addition = nums.reduce(add);

console.log(addition);
function add(previous,next){
    return (previous+next);
}


let arr = [1,2,3,4,5];

arr.forEach(double);
arr.forEach(display);

function double(element,index,arr){
    arr[index] = element*2;
    
}

function display(element){
    console.log(element);
}
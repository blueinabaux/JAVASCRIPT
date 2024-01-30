

sum(display,1,2);

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result)
}
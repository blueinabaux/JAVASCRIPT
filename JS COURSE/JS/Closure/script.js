
function createCounter(){
    let count = 0;
    function myCounter(){
        count++;
        console.log(`The count is : ${count}`);
    }

    return {myCounter};
}

const counter = createCounter();
counter.myCounter();
counter.myCounter();
counter.myCounter();

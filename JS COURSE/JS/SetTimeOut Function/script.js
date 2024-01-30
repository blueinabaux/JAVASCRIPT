
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => window.alert("HELLO !"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
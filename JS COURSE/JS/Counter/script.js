const up = document.getElementById("upBtn");
const down = document.getElementById("downBtn");
const reset = document.getElementById("resetBtn");
const count = document.getElementById("count");

let c = 0;

upBtn.onclick = function(){
    c++;
    count.textContent = c;
}

downBtn.onclick = function(){
    c--;
    count.textContent = c;
}

resetBtn.onclick = function(){
    c = 0;
    count.textContent = c;

}
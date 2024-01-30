
let username;

document.getElementById("mySub").onclick = function(){
    username = document.getElementById("name").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
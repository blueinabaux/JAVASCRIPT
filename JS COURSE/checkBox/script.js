

const subs = document.getElementById("subs");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function(){

    if(subs.checked){
        console.log("SUBSCRIBED !!!");
    }
    else{
        console.log("not subscribed !!!");
    }

    if(visaBtn.checked){
        console.log("VISA PAYMENT");
    }
    else if(masterBtn.checked){
        console.log("MASTER CARD PAYMENT");

    }
    else if(paypalBtn.checked){
        console.log("PAYPAL PAYMENT");
    }

    else{
        console.log("select payment method !!!!");

    }
}
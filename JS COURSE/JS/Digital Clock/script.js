
function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minute}:${seconds}`;
    document.getElementById("counter").textContent = timeString;

}

updateClock();
setInterval(updateClock,1000);
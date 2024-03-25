let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

setInterval(()=>{
    let currentTime = new Date();

    hour.innerHTML = (currentTime.getHours() < 10 ? "0" : '') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : '') + currentTime.getSeconds();

    
    day.innerHTML = (currentTime.getDate() < 10 ? "0" : '') + currentTime.getDate();
    month.innerHTML = ((currentTime.getMonth() + 1) < 10 ? "0" : '')  + (currentTime.getMonth() + 1);
    year.innerHTML = currentTime.getFullYear();

},1000);

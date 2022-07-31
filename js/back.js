function changeBackground() {
    let background = "url('files/backgrounds/0"+(Math.floor(Math.random() * 9) + 1)+".png')";
    
    document.body.style.backgroundImage = background;
    document.getElementById("grid-panel").style.backgroundImage = background;
}

function setTime(){
    let now = new Date();

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("hour-number").innerHTML = now.getHours(); 

    let minute = now.getMinutes();
    if (minute < 10)
    {
        document.getElementById("minute-number").innerHTML = "0" + minute;
    }
    else
    {
        document.getElementById("minute-number").innerHTML = minute;
    }

    let second = now.getSeconds();
    if (second < 10)
    {
        document.getElementById("second-number").innerHTML = "0" + second;
    }
    else
    {
        document.getElementById("second-number").innerHTML = second;
    }

    document.getElementById("day-number").innerHTML = now.getDate();
    document.getElementById("month-number").innerHTML = now.getMonth() + 1; 
    document.getElementById("year-number").innerHTML = now.getFullYear();

    document.getElementById("weekday-name").innerHTML = weekDays[now.getDay()]; 
    document.getElementById("month-name").innerHTML = monthNames[now.getMonth()]; 
}

setInterval("setTime()", 1000);
 
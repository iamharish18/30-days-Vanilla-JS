
// Function to update time each second
setInterval(() => {
    const date = new Date();
    d = new Date();
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    // 
    hour_rotation = 30 * hour + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hours.style.transform = `rotate(${hour_rotation}deg)`;
    mins.style.transform = `rotate(${min_rotation}deg)`;
    secs.style.transform = `rotate(${sec_rotation}deg)`;

    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}, 1000)
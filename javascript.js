setInterval(() => {

    let a;
    let time;
    let date;
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
a = new Date();
time = a.getHours()+':'+ a.getMinutes()+':'+ a.getSeconds();
date = a.toLocaleDateString(undefined,options);

document.getElementById("time").innerHTML = time +" On "+ date;
    
}, 1000);
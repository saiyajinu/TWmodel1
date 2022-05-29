window.addEventListener("load", init);
let input;
let select;
let intervalId = null;
function init(){
    input = document.getElementById("date");
    select = document.getElementsByTagName('select')[0];
    input.value = new Date().toISOString().split('T')[0];
    const color = localStorage.getItem("color") || "red";
    input.style.color = color;
    select.value = color;
    intervalId = setInterval(colorchange, 3000);
    window.addEventListener("keypress", (e)=>{
        if(e.key == 's' && intervalId != null)
            clearInterval(intervalId);
    })
}

function colorchange(){
    console.log("interval");
    if(select.value == "red"){
        select.value = "green";
        input.style.color = "green";
        localStorage.setItem("color",input.style.color);
    }
    else if(select.value == "green"){
        select.value = "blue";
        input.style.color = "blue";
        localStorage.setItem("color",input.style.color);
    }
    else if(select.value == "blue"){
        select.value = "red";
        input.style.color = "red";
        localStorage.setItem("color",input.style.color);
    }
    console.log(input.style.color);
}


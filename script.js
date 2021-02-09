const active = document.querySelector(".active")
const startBtn = document.querySelector(".btn")
const playBtn = document.querySelector(".fa-play-circle")


const minutes = 25;
const seconds = "00";

const click = new Audio("click.mp3");


startBtn.addEventListener('click', () =>{
    playBtn.classList.toggle('active')
})

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    click.play();

    let minutes = 24;
    let seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;

    }

    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 57){
            if(minutes <= 24){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.querySelector(".done").innerHTML = "Session Completed!! Take a Break";
                document.querySelector(".done").classList.add("show_message");  
                
                
            }
            seconds = 60;
            document.getElementById("seconds").innerHTML = seconds;

            minutes = minutes - 1;
            document.getElementById("minutes").innerHTML = minutes;
        }
    }
}

let front_w_minutes = document.getElementById("w_minutes")
let front_w_seconds = document.getElementById("w_seconds")
let front_b_minutes = document.getElementById("b_minutes")
let front_b_seconds = document.getElementById("b_seconds")
let initial_w_minutes
let initial_b_minutes
let minutes = front_w_minutes
let seconds = front_w_seconds
let min
let sec = 5
let d_sec = 10
let t_sec
let t_min
let id_stop
let timer_status = false
let w_timer_status = false
let b_timer_status = false
let w_plus_button = document.getElementById("w_plus_button")
let w_minus_button = document.getElementById("w_minus_button")
let b_plus_button = document.getElementById("b_plus_button")
let b_minus_button = document.getElementById("b_minus_button")
let start_button_click = document.getElementById("start_button")
let start_button_img = document.getElementById("start_img")


function timer() {

    if (d_sec === 0 && sec !== 0) {
        sec -= 1
        d_sec = 10
    }
    else if (d_sec === 0 && sec === 0){
        d_sec = 10
        sec = 59
        min -= 1
    }

    if (sec < 10)
        t_sec = "0" + String(sec)
    else
        t_sec = String(sec)

    if (min < 10)
        t_min = "0" + String(min)
    else
        t_min = String(min)

    minutes.innerText = t_min
    seconds.innerText = t_sec

    if(min === 0 && sec === 1 && d_sec === 1 && w_timer_status && !b_timer_status){

        b_timer_status = true
        seconds.innerText = "00"
        minutes = front_b_minutes
        seconds = front_b_seconds
        min = initial_b_minutes - 1
        sec = 59
        d_sec = 10
        w_timer_status = false

    }
    else if(min === 0 && sec === 1 && d_sec === 2 && w_timer_status === false && b_timer_status){

        b_timer_status = false
        seconds.innerText = "00"
        minutes = front_w_minutes
        seconds = front_w_seconds
        min = initial_w_minutes - 1
        sec = 59
        d_sec = 10
        w_timer_status = true
    }
    else
        d_sec -= 1
}


function start(){
    if (front_w_minutes.innerText === "00" || front_b_minutes.innerText === "00"){
        alert("Time must be set more than zero")
    }
    else{
        if(front_w_minutes.innerText[0] === "0"){
            min = Number(front_w_minutes.innerText[1]) - 1
            initial_w_minutes = Number(front_w_minutes.innerText[1])
            console.log()
        }
        else{
            min = Number(front_w_minutes.innerText) - 1
            initial_w_minutes = Number(front_w_minutes.innerText)
        }
        if(front_b_minutes.innerText[0] === "0")
            initial_b_minutes = Number(front_b_minutes.innerText[1])
        else
            initial_b_minutes = Number(front_b_minutes.innerText)
        w_plus_button.style.visibility = "hidden"
        w_minus_button.style.visibility = "hidden"
        b_plus_button.style.visibility = "hidden"
        b_minus_button.style.visibility = "hidden"
        start_button_click.onclick = pause
        start_button_img.src = "img/Pause_button.png"
        timer_status = true
        w_timer_status = true
        id_stop = setInterval(timer, 100)
    }
}


function pause(){

    if (timer_status){
        start_button_img.src = "img/Start%20button.png"
        timer_status = false
        clearInterval(id_stop)
    }
    else{
        timer_status = true
        start_button_img.src = "img/Pause_button.png"
        timer()
        id_stop = setInterval(timer, 100)
    }

}


function stop() {

    if (w_timer_status || b_timer_status) {
        w_timer_status = false
        b_timer_status = false
        d_sec = 10
        sec = 59
        if (initial_w_minutes < 10)
            front_w_minutes.innerText = "0" + String(initial_w_minutes)
        else
            front_w_minutes.innerText = String(initial_w_minutes)
        if (initial_b_minutes < 10)
            front_b_minutes.innerText = "0" + String(initial_b_minutes)
        else
            front_b_minutes.innerText = String(initial_b_minutes)
        front_w_seconds.innerText = "00"
        front_b_seconds.innerText = "00"
        w_plus_button.style.visibility = "visible"
        b_plus_button.style.visibility = "visible"
        w_minus_button.style.visibility = "visible"
        b_minus_button.style.visibility = "visible"
        start_button_click.onclick = start
        start_button_img.src = "img/Start%20button.png"
        clearInterval(id_stop)
    }
    else
        alert("Iteration din't start")

}


function plus(text_minute) {

    if (text_minute.innerText[0] === "0" && text_minute.innerText[1] !== "9"){
        text_minute.textContent = "0" + String(Number(text_minute.innerText[1]) + 1)
    }
    else if (text_minute.textContent === "09"){
        text_minute.textContent = "10"
    }
    else if (text_minute.innerText[0] !== "0" && Number(text_minute.innerText) < 59){
        text_minute.textContent = String(Number(text_minute.innerText) + 1)
    }
    else
        alert("Minutes can't be set more than 59")
}


function minus(text_minute) {

    if (text_minute.innerText === "00")
        alert("Minutes can't be set less than zero")
    else if (text_minute.innerText[0] === "0")
        text_minute.textContent = "0" + String(Number(text_minute.innerText[1]) - 1)
    else if (text_minute.innerText === "10")
        text_minute.textContent = "0" + String(Number(text_minute.innerText) - 1)
    else
        text_minute.textContent = String(Number(text_minute.innerText ) - 1)

}
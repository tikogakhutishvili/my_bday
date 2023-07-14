let days = document.querySelector("#days")
let hours = document.querySelector("#hours")
let mins = document.querySelector("#mins")
let secs = document.querySelector("#secs")
const curdate = new Date().getFullYear()
console.log(curdate)
const mybday = new Date(`January 26 ${curdate + 1} 00:00:00`)
console.log(mybday)

function countdown(){
    const curtime = new Date()
    const dfr = mybday - curtime
    let dy = Math.floor(dfr/1000/60/60/24)
    let hr = Math.floor((dfr/1000/60/60)%24)
    let mn = Math.floor((dfr/1000/60)%60)
    let sc = Math.floor((dfr/1000)%60)
    days.innerHTML = dy
    hours.innerHTML = hr
    mins.innerHTML = mn
    secs.innerHTML = sc
}
setInterval(countdown, 1000)

const button = document.querySelector('button')
const input = document.querySelector('input')
const form = document.querySelector('form')
const main = document.querySelector('.main-content')
const heading = document.getElementById('main-heading')
const list = document.querySelector('.timer')
let intervalID;

button.addEventListener('click', (e) => {
    e.preventDefault()
    const iValue = input.value
    const year = parseInt(iValue.split('-')[0])
    const month = parseInt(iValue.split('-')[1])
    const day = parseInt(iValue.split('-')[2])


    if(isNaN(year) || isNaN(month) || isNaN(day)){
        heading.textContent = 'Enter Month, Day and Year Correctly'
        heading.style.color = 'red'
    }else{
        if (intervalID) {
            clearInterval(intervalID);
        }
        updateCountdown(year, month, day)

        intervalID = setInterval(function() {
            updateCountdown(year, month, day)
        }, 1000)
        list.style.visibility = "visible"
    }
    console.log(year, month, day);

})

function updateCountdown(y,m,d){
    const now = new Date()
    const nowYear = new Date().getFullYear()
    const newYear = new Date(now.getFullYear() + y-nowYear, m-1, d)
    const timeRemaining = newYear - now
    const goalDate = timeRemaining;

    const days = Math.floor(goalDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(goalDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor(goalDate % (1000 * 60 * 60) / (1000 * 60))
    const seconds = Math.floor(goalDate % (1000 * 60) / (1000))

    document.getElementById('days').textContent = padNumber(days)
    document.getElementById('hours').textContent = padNumber(hours)
    document.getElementById('minutes').textContent = padNumber(minutes)
    document.getElementById('seconds').textContent = padNumber(seconds);
}

function padNumber(number){
    return number < 10 ? "0" + number : number
}







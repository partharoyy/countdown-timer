let timer = setInterval(() => {
    let timeNow = new Date().getTime()
    let timeNewYear = new Date('January 1 2022 00:00:00').getTime()

    let timeDiff = timeNewYear - timeNow

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    let secs = Math.floor((timeDiff % (1000 * 60)) / 1000)

    let day = document.querySelector('.days')
    let hour = document.querySelector('.hours')
    let min = document.querySelector('.mins')
    let sec = document.querySelector('.secs')
    let timer = document.querySelector('.timer')

    day.textContent = days + '  days'
    hour.textContent = hours + '  hours'
    min.textContent = mins + '  mins'
    sec.textContent = secs + '  secs'

    if (timeDiff < 0) {
        clearInterval(timer)
        timer.innerHTML = 'Expired'

    }
}, 1000)



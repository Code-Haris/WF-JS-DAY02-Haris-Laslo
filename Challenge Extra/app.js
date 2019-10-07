let sloths = document.querySelectorAll('.sloth')
let score = document.querySelector('.score')
let scoreN = 0
let interval = window.setInterval(showSloth, 2000)

function showSloth() {
    let random = Math.floor(Math.random() * sloths.length )


    for( let i = 0; i < sloths.length; i++) {
        let randInt = Math.floor(Math.random() * 2500 + 1500 )
        i == random ? sloths[i].style.top = "0%" : null
        let timeout = window.setTimeout(hideSloth, randInt, sloths[i])
    }
    
}

for(sloth of sloths) {
    sloth.addEventListener('click', (e) => {
        console.log(e.target.style.top = "100%")
        scoreN++
        console.log(scoreN)
        score.innerHTML = scoreN
    })
}

function hideSloth(sloth) {
    try {
        sloth.style.top = "100%"
    } catch(err) {
        return null
    }
}
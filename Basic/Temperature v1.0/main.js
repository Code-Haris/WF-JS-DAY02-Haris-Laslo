let input = document.getElementById('input')
let output = document.getElementById('output')

input.addEventListener('keyup', (e) => {
    getWeather(e.target.value)
        .then(data => {
            output.innerHTML = `${data.main.temp} Celsius`
        })
})

async function getWeather(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1199983f4085f3e44371ec58505b147a`)
    let data = await res.json()
    return data
}
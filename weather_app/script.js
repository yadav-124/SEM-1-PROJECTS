
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23d85cd052mshe50ca47efef0ea4p11446fjsn5bded2636e78',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed2.innerHTML = response.wind_speed
		wind_degree.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		
	})
    .catch(err => console.error(err))
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Lucknow")







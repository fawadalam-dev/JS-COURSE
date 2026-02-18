async function getWeather() {
    const city = document.querySelector("#cityInput").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    try {
        const response = await fetch(
            `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
        );

        const data = await response.json();

        document.querySelector("#weather").innerHTML = `
                <h2 class="city"> City : ${data.location.name}</h2>
                <h1 class="temp">Now <br>${Math.round(data.current.temp_c)}°</h1>
                <h3> ${data.current.condition.text}</h3>
                <p> Feels Like : ${Math.round(data.current.feelslike_c)}°</p>

                <div class="details">
                    <div>Humidity : ${data.current.humidity}%</div>
                    <div>Wind : ${data.current.wind_kph} km/h</div>
                    <div>Time : ${data.location.localtime}
                </div>
            `;

    } catch (error) {
        document.querySelector("#weather").innerHTML = `<div class="details"> City not found.</div>`;
    }

}
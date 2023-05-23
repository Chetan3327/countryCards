const input = document.getElementById("input")
const btn = document.getElementById("button")

window.onload = function(){
    fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        console.log(payload);
        console.log(payload.location.country.name + ', ' + payload.location.city);
        input.value = payload.location.country.name
        btn.click()
    });
}
btn.addEventListener("click", () => {
    const name = input.value;
    url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
    fetch(url).then((response) => response.json()).then((data) => {
        console.log(data[0])
        const name = document.getElementById("country-name")
        const capital = document.getElementById("country-capital")
        const img = document.getElementById("country-image")
        const population = document.getElementById("country-population")
        const location = document.getElementById("location")
        const anchor = document.getElementById("same")
        img.src = data[0].flags.png;
        name.innerText = data[0].name.common;
        capital.innerText = data[0].capital[0];
        population.innerText = data[0].population;
        console.log(data[0].latlng[0])
        anchor.href = data[0].maps.googleMaps;
    })
})

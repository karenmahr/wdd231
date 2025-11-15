const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function spotlight() {
    const response = await fetch(url);
    const data = await response.json();
    const randomMembers = getRandomMembers(data.members, 3);
    displayMembers(randomMembers);
}
spotlight();

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const displayMembers = (members) =>
    members.forEach((member) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phonenumber = document.createElement("p");
        let website = document.createElement("p");
        let membershiplevel = document.createElement("p");

        address.textContent = member.address;
        address.classList.add("address");

        phonenumber.textContent = member.phonenumber;
        phonenumber.classList.add("phonenumber");

        website.innerHTML = member.website;
        website.classList.add("website");

        membershiplevel.innerHTML = member.membershiplevel;
        membershiplevel.textContent = `Membership Level: ${member.membershiplevel}`;
        membershiplevel.classList.add("membershiplevel");
        
        image.setAttribute("src", member.imageurl);
        image.setAttribute("alt", member.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(image)
        card.appendChild(address)
        card.appendChild(phonenumber)
        card.appendChild(website)
        card.appendChild(membershiplevel)

        cards.appendChild(card);
    });

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
};

const navButton = document.querySelector('#nav-button');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const navBar = document.querySelector('#nav-bar');

const today = new Date();

const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified: ${document.lastModified}`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const myKey = "9d445932cf52ea61079bcab9320c4a04"
const myLat = "-34.53"
const myLong = "-58.47"

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric` 

async function apiFetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}°C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
    highTemp.innerHTML = `${data.main.temp_max}°C`;
    lowTemp.innerHTML = `${data.main.temp_min}°C`;
    humidity.innerHTML = `${data.main.humidity} %`;
    sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
}

apiFetchWeather()

const forecast = document.querySelector("#today");
const wednesday = document.querySelector("#wednesday");
const thursday = document.querySelector("#thursday");

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    forecast.innerHTML = `${data.list[0].main.temp}°C`;
    wednesday.innerHTML = `${data.list[1].main.temp}°C`;
    thursday.innerHTML = `${data.list[2].main.temp}°C`};


apiFetchForecast();


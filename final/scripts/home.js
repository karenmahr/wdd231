const url = 'data/decorations.json';
const urlReceipts = 'data/receipts.json';

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


const cards = document.querySelector('#cardsHome');

async function spotlightDecorations() {
    const response = await fetch(url);
    const data = await response.json();
    const randomDecorations = getRandomDecorations(data.decorations, 2);
    displayDecorations(randomDecorations);
}
spotlightDecorations();

function getRandomDecorations(decorations, count) {
    const shuffled = decorations.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const displayDecorations = (decorations) =>
    decorations.forEach((decoration) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let description = document.createElement("p");

        title.textContent = decoration.title;
        title.classList.add("title");

        description.textContent = decoration.description;
        description.classList.add("description");

        image.setAttribute("src", decoration.imageurl);
        image.setAttribute("alt", decoration.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(description)

        cardsHome.appendChild(card);
    });

const cardsReceipts = document.querySelector('#cardsReceipts');

async function spotlightReceipts() {
    const response = await fetch(urlReceipts);
    const data = await response.json();
    const randomReceipts = getRandomReceipts(data.receipts, 2);
    displayReceipts(randomReceipts);
}
spotlightReceipts();

function getRandomReceipts(receipts, count) {
    const shuffled = receipts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const displayReceipts = (receipts) => {
    receipts.forEach((receipt) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let description = document.createElement("p");

        title.textContent = receipt.title;
        title.classList.add("title");

        description.textContent = receipt.description;
        description.classList.add("description");

        image.setAttribute("src", receipt.imageurl);
        image.setAttribute("alt", receipt.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(description)


        cardsReceipts.appendChild(card);
    })
};

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const myKey = "9d445932cf52ea61079bcab9320c4a04"
const myLat = "66.51"
const myLong = "25.71"

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
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
}

apiFetchWeather()

let currentYear = today.getFullYear();
let christmas = new Date(currentYear, 11, 25);

function updateCountdown() {
    const now = new Date();
    const diff = christmas - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").textContent =
        `${days} days left for Christmas!`;
}

updateCountdown();


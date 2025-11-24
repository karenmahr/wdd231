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

import { places } from '../data/places.mjs'
console.log(places)

const cards = document.querySelector("#cards");

const displayPlaces = (places) =>
    places.forEach((place) => {
        let card = document.createElement("div");

        let image = document.createElement("img");
        let title = document.createElement("h2");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        title.textContent = place.name;
        address.classList.add("title");

        image.setAttribute("src", place.imageurl);
        image.setAttribute("alt", place.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '300');
        image.setAttribute('height', '200'); 

        address.textContent = place.address;
        address.classList.add("address");

        description.textContent = place.description;
        address.classList.add("description");

        button.textContent = `Learn more`;
        button.classList.add("button");

        
        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(address)
        card.appendChild(description)
        card.appendChild(button)


        cards.appendChild(card);
    })

displayPlaces(places);


const storageKey = "lastVisit";
const msDay= 1000 * 60 * 60 * 24;

const previousVisit = localStorage.getItem(storageKey);
const footer = document.querySelector("footer");

function visitMessage(prev) {
    if (!prev) {
        return "Welcome! Let us know if you have any questions.";
    }

    const last = Number(prev);
    const now = Date.now();
    const diff = now - last;

    if (diff < msDay) {
        return "Back so soon! Awesome!";
    }

    const days = Math.floor(diff / msDay);
    const unit = days === 1 ? "day" : "days";

    return `You last visited ${days} ${unit} ago.`;
}

const message = visitMessage(previousVisit);

if (footer) {
    const p = document.createElement("p");
    p.textContent = message;
    footer.appendChild(p);
}

localStorage.setItem(storageKey, Date.now());



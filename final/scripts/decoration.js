import { decorations } from '../data/decorations.mjs'
console.log(decorations)

const cardsDecoration = document.querySelector('#cardsDecoration');

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

        cardsDecoration.appendChild(card);
    });
displayDecorations(decorations);

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





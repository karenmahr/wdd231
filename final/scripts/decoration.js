import { decorations } from '../data/decorations.mjs'
console.log(decorations)

const cards = document.querySelector('#cards');

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

        cards.appendChild(card);
    });

displayDecorations(decorations);

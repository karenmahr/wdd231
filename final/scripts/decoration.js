import { decorations } from '../data/decorations.mjs'
console.log(decorations)

const cards = document.querySelector('#homeCards');

async function spotlight() {
    const response = await fetch(url);
    const data = await response.mjs();
    const randomDecorations = getRandomDecorations(data.decorations, 2);
    displayDecorations(randomDecorations);
}
spotlight();

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

        cards.appendChild(card);
    });

displayDecorations(decorations);



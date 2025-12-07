const url = 'data/decorations.json';

const cards = document.querySelector('#cards');

async function getDecorationData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDecorations(data.decorations);
}
getDecorationData();

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





import { receipts } from '../data/receipts.mjs'
console.log(receipts)

const cards = document.querySelector('#cards');

const displayReceipts = (receipts) =>
    receipts.forEach((receipt) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let category = document.createElement("p");

        title.textContent = receipt.title;
        title.classList.add("title");

        description.textContent = receipt.description;
        description.classList.add("description");

        category.textContent = receipt.category;
        category.classList.add("category");

        image.setAttribute("src", receipt.imageurl);
        image.setAttribute("alt", receipt.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(description)
        card.appendChild(category)

        cards.appendChild(card);
    });

displayReceipts(receipts);

const appetizerbutton = document.querySelector("#appetizer");
const mainbutton = document.querySelector("#main");
const dessertbutton = document.querySelector("#dessert");
const display = document.querySelector("#cards");

appetizerbutton.addEventListener("click", () => {
    display.classList.add("appetizer");
    display.classList.remove("main");
    display.classList.remove("dessert");
});

mainbutton.addEventListener("click", () => {
    display.classList.add("main");
    display.classList.remove("appetizer");
    display.classList.remove("dessert");
});

dessertbutton.addEventListener("click", () => {
    display.classList.add("dessert");
    display.classList.remove("appetizer");
    display.classList.remove("main");
});

// listbutton.addEventListener("click", showList);

// function showList() {
//     display.classList.add("list");
//     display.classList.remove("grid");
// };
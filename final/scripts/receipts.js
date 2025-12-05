import { receipts } from '../data/receipts.mjs'
console.log(receipts)

const cards = document.querySelector('#cards');

const displayReceipts = (receipts) =>
    receipts.forEach((receipt) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let ingredients = document.createElement("p");
        let description = document.createElement("p");
        let category = document.createElement("p");

        title.textContent = receipt.title;
        title.classList.add("title");

        ingredients.textContent = receipt.ingredients;
        ingredients.classList.add("ingredients");

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
        card.appendChild(ingredients)
        card.appendChild(description)
        card.appendChild(category)

        cards.appendChild(card);
    });

displayReceipts(receipts);


const url = 'data/receipts.json';

const cards = document.querySelector('#cards');
let receipts = [];

async function getReceiptsData() {
    const response = await fetch(url);
    const data = await response.json();
    receipts = data.receipts; 
    displayReceipts(receipts);
}

getReceiptsData();

function getRandomCooking(receipts, count) {
    const shuffled = receipts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const displayReceipts = (receipts) => {
    cards.innerHTML = "";
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
}
function setFilter(filterName) {
    localStorage.setItem("selectedFilter", filterName);
}

const appetizer = document.querySelector("#appetizer");
appetizer.addEventListener("click", () => {
    displayReceipts(receipts.filter(receipt => receipt.category.includes("Appetizer")));
    setFilter("appetizer");
});

const dessert = document.querySelector("#dessert");
dessert.addEventListener("click", () => {
    displayReceipts(receipts.filter(receipt => receipt.category.includes("Dessert")));
    setFilter("dessert");
});

const main = document.querySelector("#main");
main.addEventListener("click", () => {
    displayReceipts(receipts.filter(receipt => receipt.category.includes("Main Course")));
    setFilter("main");
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
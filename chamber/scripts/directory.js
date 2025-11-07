const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
getMemberData();

const displayMembers = (members) =>
    members.forEach((member) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phonenumber = document.createElement("p");
        let website = document.createElement("p");

        address.textContent = member.address;
        address.classList.add("address");
        phonenumber.textContent = member.phonenumber;
        phonenumber.classList.add("phonenumber");
        website.innerHTML = member.website;
        website.classList.add("website");

        image.setAttribute("src", member.imageurl);
        image.setAttribute("alt", member.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '340');
        image.setAttribute('height', '440'); 

        card.appendChild(image)
        card.appendChild(address)
        card.appendChild(phonenumber)
        card.appendChild(website)

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

const today = new Date();

const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified: ${document.lastModified}`;
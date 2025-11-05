const url = "";

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch();
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

        image.setAttribute("src", member.imageurl);
        image.setAttribute("alt", members.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(website);

        cards.appendChild(card); 
    })
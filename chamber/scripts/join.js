const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const openButton4 = document.querySelector("#openButton4");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Non-profit (NP) Membership is free and gives organizations basic access to the community and resources at no cost.'
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Bronze members receive foundational benefits such as entry-level support or limited features.'
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Silver members gain more advantages, including expanded access, extra tools, or priority assistance.'
});

openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Gold members enjoy the highest level of benefits, typically offering full access, premium support, and the most exclusive'
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
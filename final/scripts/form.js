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


const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'You can use all features and content without restrictions. This means you’re free to explore everything at any time, as much as you want, with no limits on usage.'
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'You still get access to the platform, but only to certain features or a reduced amount of content. Some tools may be restricted, or you may only use them a limited number of times.'
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
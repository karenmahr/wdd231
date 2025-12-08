const getstring = window.location.search;
console.log(getstring);

const myInfo = new URLSearchParams(getstring);
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('organization'));
// console.log(myInfo.get('timestamp'));

document.querySelector("#results").innerHTML = `
    <p><strong>First Name:</strong> ${myInfo.get('first')}</p>
    <p><strong>Last Name:</strong> ${myInfo.get('last')}</p>
    <p><strong>Email address: </strong>${myInfo.get('email')}</p>
    <p><strong>Mobile Phone Number:</strong> ${myInfo.get('phone')}</p>
`

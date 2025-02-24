// insertBefore

const p = document.createElement("p");

console.log(p);

const header = title.parentElement;

header.insertBefore(p, title);

// appendeChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);
const ul = document.querySelector("ul");

const li = document.createElement("li");
li.innerHTML = "hello F24!";
ul.appendChild(li);

const gris = document.createElement("li");
gris.innerHTML = "gris";
ul.appendChild(gris);

console.log(ul.innerHTML);

const d = document.querySelector("div");
d.innerHTML = "Manipulera DOMen!!!";

let i = 0;

const something = (e) => {
	// console.log(e);
	i++;
	console.log(`Antal klick: ${i}`);
};

d.addEventListener("click", something);

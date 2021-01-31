let recupererH2 = document.querySelector("h2")
console.log(recupererH2.innerText);
console.log(recupererH2.innerText = "Exercice 1");


let recupererP = document.querySelector("p")
console.log(recupererP.innerText + "utilisé pour résoudre l'éxercice 2");

let section = document.querySelector("#users")
console.log(section.id);

let premierH1 = document.querySelector("#BONJOUR")
let premierH1Bis = document.querySelector("h1")
console.log(premierH1.id);
console.log(premierH1Bis.id);

let chaqueH1 = document.querySelectorAll("h1")
let arrayH1 = Array.from(chaqueH1)

arrayH1.forEach(element => {
    console.log(element.innerText);
});

let Premierinput = document.querySelector("input")
console.log(Premierinput.attributes);

let input2 = document.querySelector("input")
console.log(input2.getAttribute("type"));

let input3 = document.querySelector('input#inputPassword3')
input3.setAttribute('type', 'password')
console.log(input3);

input2.setAttribute('type', "color")
console.log(input2);
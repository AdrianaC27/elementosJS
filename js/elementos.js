let viagem = document.getElementById("sirius");
viagem.value = "Senac Largo Treze";



console.log(viagem.value);

//acessamdo o valor pelo nome

let moeda = document.getElementsByName("opt-moedas");
console.log(moeda[0].value);
console.log(moeda[1].value);
console.log(moeda[2].value);

//acessando o elemento pela Tag

let viajar = document.getElementsByTagName("span");

viajar.value = "Estou viajando para Parati";
console.log(viajar.value);
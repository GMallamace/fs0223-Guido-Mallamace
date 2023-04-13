/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);



/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);



/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.splice(0, 1, 'redfish');
pets.splice(3, 1, 'dog');
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]




/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Citroen",
  model: "C3",
  color: "yellow",
  trims: ["shine", "you", "elle"],
  licensePlate: "AB123YZ"
});

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []
  for (i = 0; i < cars.length; i++){
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)




/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.slice(0, 1) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

for(i = 0; i < numericArray.length; i++){
  do{
   console.log(numericArray[i]);
   f++;
  }
  while(numericArray[f] !==32){
   break;
  }
}



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

let alphabetArray  = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a": alphabetArray.push(0);
      break;
    case "b": alphabetArray.push(1);
      break;
    case "c": alphabetArray.push(2);
      break;
    case "d": alphabetArray.push(3);
      break;
    case "e": alphabetArray.push(4);
      break;
    case "f": alphabetArray.push(5);
      break;
    case "g": alphabetArray.push(6);
      break;
    case "h": alphabetArray.push(7);
      break;
    case "i": alphabetArray.push(8);
      break;
    case "j": alphabetArray.push(9);
      break;
    case "k": alphabetArray.push(10);
      break;
    case "l": alphabetArray.push(11);
      break;
    case "m": alphabetArray.push(12);
      break;
    case "n": alphabetArray.push(13);
      break;
    case "o": alphabetArray.push(14);
      break;
    case "p": alphabetArray.push(15);
      break;
    case "q": alphabetArray.push(16);
      break;
    case "r": alphabetArray.push(17);
      break;
    case "s": alphabetArray.push(18);
      break;
    case "t": alphabetArray.push(19);
      break;
    case "u": alphabetArray.push(20);
      break;
    case "v": alphabetArray.push(21);
      break;
    case "w": alphabetArray.push(22);
      break;
    case "x": alphabetArray.push(23);
      break;
    case "y": alphabetArray.push(24);
      break;
    case "z": alphabetArray.push(25);
      break;
  }
}
console.log(alphabetArray);


// 1 esercizio

// function controllaNumeri(numero1, numero2) {
//     return numero1 === 50 || numero2 === 50 || (numero1 + numero2) === 50;
// }


// console.log(controllaNumeri(5, 7));

// 2 esercizo

// function rimuoviQualcosa(stringa, posizione) {
//     if (posizione < 0 || posizione > stringa.length) {
//         console.log("non è una posizione valida");
//         return stringa;
//     }
//     else {
    //      qui prendo lafrase e la concateno rimuovendo il pezzo che seleziono con posizioneDaTogliere
//         return stringa.slice (0, posizione) + stringa.slice(posizione + 1);
//     }
// }

// let stringaDiPartenza = "ciao a tutti!"
// let posizioneDaTogliere = 5;

// let stringaEsempio = rimuoviQualcosa (stringaDiPartenza, posizioneDaTogliere);
// console.log(stringaEsempio); //rimuove la a



// 3 esercizio

// function controllaIntervalli(num1, num2) {
//     let condizione1 = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
//     let condizione2 = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);

//     return condizione1 || condizione2;
// }

// console.log(controllaIntervalli(45, 50));   

// 4 esercizio

// function verificaNomeCitta(nomeCitta) {
//     if (nomeCitta.toLowerCase().startsWith("los")) {
//         return nomeCitta;
//     } else if (nomeCitta.toLowerCase().startsWith("new")) {
//         return nomeCitta;
//     } else {
//         return false;
//     }
// }

// // prova
// console.log(verificaNomeCitta("Los Angeles"));   
// console.log(verificaNomeCitta("Paris"));          


// 5 eserczio

// function sommaArray(array) {
   

//     let somma = 0;
    
//     for (var i = 0; i < array.length; i++) {
//         somma += array[i];
//     }

//     return somma;
// }

// // Prova
// let arrayDiNumeri = [1, 2, 3, 4, 5];
// let risultato = sommaArray(arrayDiNumeri);
// console.log(risultato);  


// 6 esecizio

// function verificaArray(array) {
    

//     // verifico la presenza
//     let contiene1o3 = array.includes(1) || array.includes(3);

//     // Restituisce il risultato della verifica
//     return contiene1o3 === false;
// }

// // prova
// let array1 = [2, 4, 6, 8];
// console.log(verificaArray(array1));  



// 7 esercizio

// function tipoAngolo(gradi) {
//     //controllo
//     if (gradi < 0 || gradi > 180) {
//         console.log("Il valore dei gradi deve essere compreso tra 0 e 180.");
//         return null;
//     }

//     if (gradi < 90) {
//         return "Acuto";
//     } else if (gradi === 90) {
//         return "Retto";
//     } else if (gradi < 180) {
//         return "Ottuso";
//     } else {
//         return "Piatto";
//     }
// }

// // prova
// console.log(tipoAngolo(45));   


// 8 esercizio

// function creaAcronimo(frase) {
//     //divido in parole con split
//     let parole = frase.split(" ");
//     let acronimo = "";

//     for (var i = 0; i < parole.length; i++) {
//         //ora prendo la prima lettera
//         acronimo += parole[i].charAt(0).toUpperCase();
//     }

//     return acronimo;
// }

// // esempio
// let fraseCompleta = "Fabbrica Italiana automobili Torino";
// let risultato = creaAcronimo(fraseCompleta);
// console.log(risultato);  




//esercizi extra 1


// function caratterePiuUsato(stringa) {
//     // Creo un oggetto per conteggiare la frequenza di ciascun carattere
//     let conteggioCaratteri = {};

//     // Conto la frequenza di ciascun carattere nella stringa
//     for (let carattere of stringa) {
//         conteggioCaratteri[carattere] = (conteggioCaratteri[carattere] || 0) + 1;
//     }

//     // Trovo il carattere con la frequenza massima
//     let caratterePiuFrequente = '';
//     let frequenzaMassima = 0;

//     for (let carattere in conteggioCaratteri) {
//         if (conteggioCaratteri[carattere] > frequenzaMassima) {
//             frequenzaMassima = conteggioCaratteri[carattere];
//             caratterePiuFrequente = carattere;
//         }
//     }

//     return caratterePiuFrequente;
// }

// // Esempio di utilizzo
// let stringaInput = "in questa stringa dovrebbe uscire la lettera eee";
// let risultato = caratterePiuUsato(stringaInput);
// console.log("Il carattere più usato nella stringa è:", risultato);





let arr = [1, 2, 3, 4, 5];

//indexOf
let index = arr.indexOf(3); // Gibt 2 zurück
let nonExistentIndex = arr.indexOf(7); // Gibt -1 zurück, da 7 nicht im Array existiert
console.log(index);
console.log(nonExistentIndex);

//push/unshift
arr.push(6); // Fügt 6 am Ende des Arrays hinzu
arr.unshift(0); // Fügt 0 am Anfang des Arrays hinzu

//pop/shift
let lastElement = arr.pop(); // Entfernt das letzte Element und gibt es zurück
let firstElement = arr.shift(); // Entfernt das erste Element und gibt es zurück

//includes
let includesTwo = arr.includes(2); // Gibt true zurück, da 2 im Array existiert

//slice
let slicedArr = arr.slice(1, 3); // Gibt ein neues Array [2, 3] zurück

//splice
arr.splice(1, 2, 'a', 'b'); // Entfernt 2 Elemente ab Index 1 und fügt 'a' und 'b' ein

// of/in
for (let value of arr) {
  console.log(value); // Gibt jeden Wert im Array aus
}

for (let index in arr) {
  console.log(index); // Gibt jeden Index im Array aus
}

// map
let newArr = arr.map(value => `Hallo ${value}`); // Erstellt ein neues Array mit Hallo

// filter
let filteredArr = arr.filter(value => value > 2); // Erstellt ein neues Array mit Werten größer als 2

// split / join
let str = 'Hallo Welt';
let strArr = str.split(' '); // Teilt den String in ein Array ['Hallo', 'Welt'] weil auf Abstand getrennt wird.
let joinedStr = strArr.join(', '); // Verbindet das Array zu einem String 'Hallo, Welt'


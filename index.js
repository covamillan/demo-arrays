let fruits = [
  "banana",
  "melón",
  "fresa",
  "pera",
  "tomate",
  "mango",
  "melocotón",
];

// Buscar un elemento según su índice
console.log(`Este es el tercer elemento del array: ${fruits[2]}`);
console.log(
  `Este es el último elemento de un array: ${fruits[fruits.length - 1]}`
);

// INDEX OF:
console.log(`INDEXOF devuelve: ${fruits.indexOf("fresa")}`);

// INCLUDES:
let isThereABanana = fruits.includes("banana");
console.log(`INCLUDES devuelve: ${isThereABanana}`);

// FOR EACH : ejecuta la función indicada una vez por cada elemento del array.
fruits.forEach((_element, index) =>
  console.log(`Fruta: ${fruits[index]}. Índice: ${[index]}`)
);

//LENGTH: establece o devuelve la cantidad de elementos en esa matriz.
console.log(`LENGTH devuelve: ${fruits.length}`);

// POP: elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
let lastFruit = fruits.pop();
console.log(`POP devuelve: ${lastFruit}`);
console.log(`POP modifica el array original: ${fruits}`);

// UNSHIFT: agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
let addOneOrMoreFruitsToTheBeginning = fruits.unshift("cereza", "kiwi");
console.log(`UNSHIFT devuelve: ${addOneOrMoreFruitsToTheBeginning}`);
console.log(`UNSHIFT modifica el array original: ${fruits}`);

// SHIFT: elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
let deleteFirstFruit = fruits.shift();
console.log(`SHIFT devuelve: ${deleteFirstFruit}`);
console.log(`SHIFT modifica el array original: ${fruits}`);

// PUSH: añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
let addMoreFruitsToTheEnd = fruits.push("maracuyá", "uva");
console.log(`PUSH devuelve: ${addMoreFruitsToTheEnd}`);
console.log(`PUSH modifica el array original: ${fruits}`);

// SPLICE: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
let deleteFruitsByPosition = fruits.splice(0, 2);
console.log(`SPLICE devuelve: ${deleteFruitsByPosition}`);
console.log(`SPLICE modifica el array original: ${fruits}`);

// SOME: comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
let areThereAnyFruitsLongerThanSeven = fruits.some(
  (_element, index) => fruits[index].length > 7
);
console.log(`SOME devuelve: ${areThereAnyFruitsLongerThanSeven}`);

// EVERY: determina si todos los elementos en el array satisfacen una condición.
let areAllFruitsLongerThanSeven = fruits.every(
  (_element, index) => fruits[index].length > 7
);
console.log(`EVERY devuelve: ${areAllFruitsLongerThanSeven}`);

// FIND: devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
let firstFruitLongerThanSeven = fruits.find(
  (_element, index) => fruits[index].length > 7
);
console.log(`FIND devuelve: ${firstFruitLongerThanSeven}`);

// FILTER: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
let allFruitsLongerThanSeven = fruits.filter(
  (_element, index) => fruits[index].length > 7
);
console.log(`FIND devuelve: ${allFruitsLongerThanSeven}`);

// JOIN: une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
console.log(`JOIN devuelve: ${fruits.join("----")}`);

// MAP: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let numbers = [1, 2, 3, 4, 5];
let multiplyByTwo = numbers.map((_number, index) => numbers[index] * 2);
console.log(`MAP devuelve: ${multiplyByTwo}`);

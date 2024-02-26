export {};

// EXAMPLE 1 - Check if an Array contains a Value in TypeScript

const arr: string[] = ['bobby', 'hadz', 'com'];

if (arr.includes('bobby')) {
  // 👇️ this runs
  console.log('✅ The value is contained in array');
} else {
  console.log('⛔️ The value is NOT contained in array');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Check if an Array contains a String in a case-insensitive manner

// const arr: string[] = ['bobby', 'hadz', 'com'];

// const str = 'BOBBY';

// const found = arr.find((element) => {
//   return element.toLowerCase() === str.toLowerCase();
// });

// console.log(found); // 👉️ "bobby"

// if (found !== undefined) {
//   // 👇️ this runs
//   console.log('✅ the string is contained in the array');
// } else {
//   console.log('⛔️ the string is NOT contained in the array');
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Check if an Object is contained in an Array in TypeScript

// const arr: { id: number; name: string }[] = [
//   { id: 1, name: 'Tom' },
//   { id: 2, name: 'Alfred' },
//   { id: 3, name: 'Fred' },
// ];

// const found = arr.find((obj) => {
//   return obj.id === 2;
// });

// console.log(found); // 👉️ {id: 1, name: 'Alfred'}

// if (found !== undefined) {
//   // 👇️ this runs
//   console.log('✅ the object is contained in the array');
// } else {
//   console.log('⛔️ the object is NOT contained in the array');
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Check if an Object is contained in a TypeScript array using some()

// const arr: { id: number; name: string }[] = [
//   { id: 1, name: 'Tom' },
//   { id: 2, name: 'Alfred' },
//   { id: 3, name: 'Fred' },
// ];

// const result = arr.some((obj) => {
//   return obj.id === 2;
// });

// console.log(result); // 👉️ true

// if (result) {
//   console.log('✅ the object is contained in the array');
// } else {
//   console.log('⛔️ the object is NOT contained in the array');
// }

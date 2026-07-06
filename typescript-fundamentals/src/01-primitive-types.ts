// =============================
// 01-primitive-types.ts
// =============================

// string — for any text value
let firstName: string = "Jane";
console.log(firstName); // "Jane"

// number — for integers and decimals both
let age: number = 25;
let price: number = 9.99;
console.log(age, price); // 25 9.99

// boolean — only true or false
let isLoggedIn: boolean = false;
console.log(isLoggedIn); // false

// null — explicitly empty value
// you need to assign null, not just declare the type
let selectedItem: null = null;
console.log(selectedItem); // null

// undefined — variable declared but no value assigned yet
let someVal: undefined = undefined;
console.log(someVal); // undefined

// ⚠️ null vs undefined
// null   → you intentionally set it to empty
// undefined → value was never assigned

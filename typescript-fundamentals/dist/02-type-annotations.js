"use strict";
// =============================
// 02-type-annotations.ts
// =============================
// Typing function parameters and return type
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(45, 55)); // 100
// Typing a string parameter and return type
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Jason")); // "Hello, Jason"
// void — function that returns nothing
function logMessage(message) {
    console.log(message);
}
logMessage("nothing to return here");
// Type inference — TypeScript guesses the type automatically
// You don't always need to annotate explicitly
let city = "Chennai"; // TypeScript infers: string
let count = 10; // TypeScript infers: number
// But explicit annotation is better when intent matters
let score = 0;
//# sourceMappingURL=02-type-annotations.js.map
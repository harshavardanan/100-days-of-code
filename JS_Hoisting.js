//hoisting with var
console.log(a); // undefined
var a = "var hoisting";
console.log(a); // hello

//hoisting with let
console.log(b); // reference error
let b = "let hoisting";
console.log(b);

//hoisting with const
console.log(c); //reference error
const c = "const hoisting";
console.log(c);

//hoisting with function
hoistingFunction();

function hoistingFunction() {
  console.log("hoisting function");
}

//hoisting with function expression
hoistingFunctionExpression(); // TypeError: hoistingFunctionExpression is not a function
const hoistingFunctionExpression = function () {
  console.log("hoisting function expression");
};

//hoisting with arrow function
console.log(hoistingArrowFunction(2, 3)); // TypeError: hoistingArrowFunction is not a function
const hoistingArrowFunction = (a, b) => a + b;

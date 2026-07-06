// =============================
// 02-type-annotations.ts
// =============================

// -------------------------------------------------
// WHAT IS TYPE ANNOTATION?
// -------------------------------------------------
// Type annotation is when you explicitly tell TypeScript
// what type a variable, parameter, or return value should be.
// Syntax: variableName: type
// Example: let age: number = 25
// This helps TypeScript catch mistakes before your code runs.

// -------------------------------------------------
// 1. TYPING FUNCTION PARAMETERS & RETURN TYPE
// -------------------------------------------------
// Here we tell TypeScript:
//   - num1 and num2 must be numbers (parameters)
//   - the function must return a number (return type)
// If you pass a string or return a string, TypeScript errors immediately.
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sum(45, 55)); // 100

// -------------------------------------------------
// 2. TYPING STRING PARAMETER & RETURN TYPE
// -------------------------------------------------
// "name" must be a string, and the function must return a string.
// Notice: always use lowercase "string", not "String"
// lowercase "string" = TypeScript primitive type ✅
// uppercase "String" = JavaScript wrapper object ❌ avoid
function greet(name: string): string {
  return "Hello, " + name;
}
console.log(greet("Jason")); // "Hello, Jason"

// -------------------------------------------------
// 3. VOID RETURN TYPE
// -------------------------------------------------
// When a function doesn't return anything, annotate it as "void"
// These functions just perform an action (logging, updating, etc.)
// and don't produce a result you can use.
function logMessage(message: string): void {
  console.log(message);
}
logMessage("nothing to return here");

// -------------------------------------------------
// 4. TYPE INFERENCE vs EXPLICIT ANNOTATION
// -------------------------------------------------
// TypeScript can automatically guess (infer) the type
// from the value you assign — you don't always need to annotate.

let city = "Chennai"; // TypeScript infers: string
let count = 10; // TypeScript infers: number

// Both of these still throw an error if you try:
// city = 42    ❌ — inferred as string, can't assign number
// count = "hi" ❌ — inferred as number, can't assign string

// -------------------------------------------------
// 5. WHEN TO ANNOTATE EXPLICITLY
// -------------------------------------------------
// If you declare a variable WITHOUT assigning a value,
// TypeScript defaults to "any" — which is unsafe.
// Always annotate explicitly in this case.

let score: number; // ✅ TypeScript knows it's a number
score = 100; // safe assignment later

// Without annotation:
let total; // ⚠️ TypeScript infers "any" — dangerous!
total = 100; // works, but no type safety at all
total = "oops"; // also works — TypeScript won't catch this ❌

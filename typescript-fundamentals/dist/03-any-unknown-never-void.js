"use strict";
// =============================
// 03-any-unknown-never-void.ts
// =============================
// -------------------------------------------------
// 1. ANY
// -------------------------------------------------
// "any" completely turns off TypeScript's type checking
// for that variable. It can be a string, number, boolean,
// object — anything. TypeScript won't complain at all.
// ⚠️ Avoid using "any" in real projects — it defeats the
// purpose of TypeScript and hides potential bugs.
let someText = "Hi there";
someText = 23; // no error — was string, now number
someText = true; // no error — now boolean
someText.toUpperCase(); // no error — but risky! TypeScript
// won't catch if this fails at runtime
// -------------------------------------------------
// 2. UNKNOWN
// -------------------------------------------------
// "unknown" is the safer version of "any".
// Like "any", it can hold any type of value.
// BUT — TypeScript forces you to check what type it is
// before you can do anything with it.
// Use "unknown" when you don't know the type upfront
// (e.g. data from an API, user input, external libraries)
let someText2 = "Welcome";
someText2 = 22; // reassigning to a different type is fine
// ❌ This would cause a TypeScript error:
// someText2.toUpperCase() — can't operate on unknown directly
// ✅ Correct way — narrow the type first using typeof
// Once inside the if block, TypeScript knows it's a string
if (typeof someText2 === "string") {
    console.log(someText2.toUpperCase()); // safe to use string methods now
}
// -------------------------------------------------
// 3. VOID
// -------------------------------------------------
// "void" means the function does not return any value.
// Commonly used for functions that just log, update state,
// or perform an action without producing a result.
// In JavaScript, these functions return "undefined" implicitly —
// "void" is TypeScript's way of making that explicit.
function logMessage(msg) {
    console.log(msg); // just logs, returns nothing
}
// -------------------------------------------------
// 4. NEVER
// -------------------------------------------------
// "never" means the function NEVER successfully returns.
// This happens in two cases:
//   Case 1 — the function always throws an error
//   Case 2 — the function runs forever (infinite loop)
// Unlike "void" which returns undefined, "never" means
// execution of that function never completes normally.
// Case 1: always throws — control never reaches the end
function throwError(message) {
    throw new Error(message);
}
// Case 2: infinite loop — function never exits
function runForever() {
    while (true) {
        console.log("running...");
    }
}
// -------------------------------------------------
// QUICK SUMMARY
// -------------------------------------------------
// any     → no type checking at all — avoid it ❌
// unknown → no type checking until you verify — safe ✅
// void    → function runs but returns nothing
// never   → function never finishes executing
//# sourceMappingURL=03-any-unknown-never-void.js.map
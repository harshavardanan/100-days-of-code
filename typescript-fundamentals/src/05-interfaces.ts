// =============================
// 05-interfaces.ts
// =============================

// -------------------------------------------------
// WHAT IS AN INTERFACE?
// -------------------------------------------------
// An interface defines the "shape" of an object —
// what properties it must have and what types they are.
// Think of it as a contract — any object using this
// interface MUST follow the structure defined.

// -------------------------------------------------
// 1. BASIC INTERFACE
// -------------------------------------------------
// Defines what properties a User object must have.
// Any object typed as User must have both name and age.
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Jason",
  age: 25,
  // email: "j@mail.com" ❌ — not in interface, TypeScript errors
};

// -------------------------------------------------
// 2. OPTIONAL PROPERTIES — ?
// -------------------------------------------------
// Adding ? makes a property optional.
// The object can include it or leave it out — both are valid.
interface User1 {
  name: string;
  age: number;
  email?: string; // optional — can be string or undefined
}

const user2: User1 = { name: "Jane", age: 30 }; // ✅ no email, still valid
const user3: User1 = { name: "Bob", age: 22, email: "b@mail.com" }; // ✅ with email

// -------------------------------------------------
// 3. READONLY PROPERTIES
// -------------------------------------------------
// "readonly" means the property can be set once
// when the object is created, but never changed after.
// Useful for IDs, timestamps, or any immutable values.
interface User2 {
  name: string;
  age: number;
  readonly id: number; // cannot be changed after creation
}

const user4: User2 = { name: "Sam", age: 28, id: 101 };
// user4.id = 202; ❌ — TypeScript error: cannot assign to readonly property

// -------------------------------------------------
// 4. INTERFACE WITH A METHOD / FUNCTION
// -------------------------------------------------
// Interfaces can also define methods — what function
// a property should be, what parameters it takes,
// and what it returns.
interface Computer {
  brand: string;
  price: number;
  // getDiscount takes a percent number and returns the discounted price
  getDiscount(percent: number): number;
}

const myLaptop: Computer = {
  brand: "Dell",
  price: 80000,
  getDiscount(percent: number): number {
    return this.price - (this.price * percent) / 100;
  },
};

console.log(myLaptop.getDiscount(10)); // 72000

// -------------------------------------------------
// 5. EXTENDING AN INTERFACE — like inheritance
// -------------------------------------------------
// One interface can extend another to inherit all its
// properties and add new ones on top.
// Here Phone gets all Computer properties + deviceType.
// Any Phone object must satisfy BOTH interfaces.
interface Phone extends Computer {
  deviceType: string; // extra property only Phone has
}

const myPhone: Phone = {
  brand: "Samsung",
  price: 60000,
  deviceType: "smartphone",
  getDiscount(percent: number): number {
    return this.price - (this.price * percent) / 100;
  },
};

console.log(myPhone.getDiscount(5)); // 57000

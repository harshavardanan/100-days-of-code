// 1. Basic type alias — PascalCase naming convention
type User = {
  name: string;
  age: number;
  email?: string; // optional property
};

// 2. Type alias for an object shape
type Product = {
  id: number;
  title: string;
  price: number;
};

// 3. Type alias for union types
type Phone = "iphone" | "samsung" | "huawei";

// you can then use it like this:
type UserWithPhone = {
  name: string;
  phone: Phone; // only accepts the three values above
};

// 4. Type alias for a function signature
type AddNumbers = (a: number, b: number) => number;

// using it:
const add: AddNumbers = (a, b) => a + b;

// 5. Difference between type and interface

// --- EXTENDING ---
// interface uses "extends"
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// type uses "&" intersection
type AnimalType = {
  name: string;
};
type DogType = AnimalType & {
  breed: string;
};

// --- KEY DIFFERENCE: Declaration Merging ---
// interface supports it ✅
interface Car {
  brand: string;
}
interface Car {
  speed: number;
}
// Car is now { brand: string; speed: number; }

// type does NOT support it ❌
type Car = { brand: string };
type Car = { speed: number }; // Error: Duplicate identifier 'Car'

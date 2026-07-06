// 1. Array of strings
let aos: string[] = ["mon", "tue", "wed"];
console.log(aos);

// 2. Array of numbers
let aon: number[] = [1, 2, 3, 4];
console.log(aon);

// 3. Array of booleans
let aob: boolean[] = [true, false, false, true];
console.log(aob);

// 4. Array using generic syntax — Array<string>
let genericArr: Array<string> = ["one", "two", "three"];
console.log(genericArr);

// 5. Tuple — fixed length, fixed types in order
let tup: [number, boolean, string] = [23, true, "typescript is hard"];
console.log(tup);

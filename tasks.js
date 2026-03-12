//////////////////////////////////////////////////
// ТИПЫ ДАННЫХ (5 задач)
//////////////////////////////////////////////////

let x;
console.log(typeof x);

console.log(typeof 10, typeof "10");

console.log(typeof true, typeof false);

console.log(typeof null); // object

console.log("15" + 1); // "151"



//////////////////////////////////////////////////
// УСЛОВИЯ И ЦИКЛЫ (5 задач)
//////////////////////////////////////////////////

let n = -5;

if (n > 0) {
  console.log("positive");
} else if (n < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

let a = 12, b = 7;
console.log(Math.min(a, b));

let num = 15;
console.log(num % 3 === 0 ? "yes" : "no");

let N = 7;
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);

for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) console.log(i);
}



//////////////////////////////////////////////////
// ФУНКЦИИ (5 задач)
//////////////////////////////////////////////////

function sayHello() {
  console.log("Hello, JS!");
}
sayHello();

function greet(name) {
  return name ? `Hello, ${name}` : "Hello, stranger";
}
console.log(greet("Ivan"));
console.log(greet());

function square(x) {
  return x * x;
}
console.log(square(5));

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(10, 3));

const double = x => x * 2;
console.log(double(4));



//////////////////////////////////////////////////
// МЕТОДЫ СТРОК (5 задач)
//////////////////////////////////////////////////

let str = "JavaScript";
console.log(str.slice(4));

let file = "report.pdf";
console.log(file.startsWith("rep"), file.endsWith(".pdf"));

let animals = "I like cats";
console.log(animals.replace("cats", "dogs"));

let fruits = "apple,banana,orange,apple".split(",");
let count = fruits.filter(f => f === "apple").length;
console.log(count);

let text = "My phone number is 12345 and my code is 67890";
console.log(text.match(/\d+/g));



//////////////////////////////////////////////////
// МЕТОДЫ ОБЪЕКТОВ (10 задач)
//////////////////////////////////////////////////

let book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

console.log(book.title, book.author, book.year);

book.pages = 328;
console.log(book.pages);

delete book.year;

let student = {
  "full name": "Ivan Petrov"
};
console.log(student["full name"]);

let person = { name: "Ivan", age: 30 };
person.age++;
console.log(person.age);

let car = {
  engine: { power: 150, type: "diesel" }
};
console.log(car.engine.type);

console.log(car.owner?.name);

let user = { id: 1, login: "root", isAdmin: true };

for (let key in user) {
  console.log(key, user[key]);
}

let orders = {
  id1: { product: "Phone", price: 500 },
  id2: { product: "Laptop", price: 1500 }
};
console.log(orders.id2.price);

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue({ name: "Ivan", age: 25 }, "name"));



//////////////////////////////////////////////////
// МЕТОДЫ МАССИВОВ (10 задач)
//////////////////////////////////////////////////

let arr = [1, 2];
arr.push(3);
console.log(arr);

let letters = ["a", "b", "c"];
console.log(letters.pop());

console.log([10, 20, 30, 40].includes(100));

let nums = [5, 10, 15, 20, 25];
console.log(nums.slice(1, 4));

let spliceArr = [1, 2, 3, 4];
spliceArr.splice(1, 2, "X", "Y");
console.log(spliceArr);

let mult = [2, 4, 6].map(n => n * 10);
console.log(mult);

let even = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log(even);

let total = [10, 20, 30, 40].reduce((s, n) => s + n, 0);
console.log(total);

let users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Olga" }
];

console.log(users.find(u => u.name === "Ivan"));

let sortArr = [100, 5, 20, 15];
sortArr.sort((a, b) => a - b);
console.log(sortArr);

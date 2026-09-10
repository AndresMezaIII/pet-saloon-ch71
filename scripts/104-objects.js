//primitive or basic data types and creating them
let name = "Andres";
let lastName = "Meza";
let age = 44;
let isStudent = true;

let name1 = "Fernanda";
let lastName1 = "Murillo";
let age1 = 34;
let isStudent1 = false;

//non-primitives; advanced
//object-literal -- key value pairs
let studentOne = {
  name: "Cameron",
  lastName: "Corbin",
  age: 20,
  isStudent: true,
};

let studentTwo = {
  name: "Isaac",
  lastName: "Angulo",
  age: 28,
  isStudent: true,
};

//access to the values of an object literal -> .
//objectName.propertyName
console.log(studentTwo.name);
console.log(studentOne.isStudent);
console.log(studentOne.lastName);
console.log(studentTwo.isStudent);

//Interpolation
//template literals `${name} is a ${job}.`

console.log(
  `Hello, my name is ${studentOne.name} and I am ${studentOne.age} years old.`,
);

let p = document.getElementById("paragraph");

p.innerHTML += `Hello, my name is ${studentOne.name} and I am ${studentOne.age} years old.`;

let productOne = {
  name: "Model Car",
  color: "black",
  size: "small",
  price: 32,
};

let productTwo = {
  name: "Model Airplane",
  color: "red",
  size: "medium",
  price: 200,
};

let productThree = {
  name: "Dinosaur Toy",
  color: "green",
  size: "large",
  price: 65,
};

let p2 = document.getElementById("paragraph-2");

p2.innerHTML += `Our latest product is a ${productThree.name} which is $${productThree.price}. The toy is ${productThree.color} and it is a ${productThree.size} toy. One of our oldest products is a ${productOne.size} ${productOne.color} ${productOne.name}. It is $${productOne.price}. This months special is a ${productTwo.name} that will be seen all over the skies with it's bright ${productTwo.color} color. It's only of ${productTwo.size} size but it has a big ticket price, $${productTwo.price}! Better save that allowance boys and girls!`;

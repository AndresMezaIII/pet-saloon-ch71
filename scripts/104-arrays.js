let namesList = [
  "Andy", //0
  "Cameron", //1
  "Noah", //2
  "Isaac", //3
  "Angelina", //4
  "Prof. Fernanda", //5
];

//arrays are an ordered collection of different elements that are of the same data type. They are indexed starting at 0.

console.log(namesList[0]);
console.log(namesList[3]);

//update an element by assigning at a specific index
namesList[3] = "Tom";
console.log([namesList]);

for (let i = 0; i < namesList.length; i++) {
  console.log(namesList[i]);
}

let studentsList = [
  { name: "Andy M.", age: 44, isStudent: true },
  { name: "Angelina C.", age: 25, isStudent: true },
];

console.log(studentsList);

//display in console, first students name, second student isStudent status, first student age
console.log(studentsList[0].name);
console.log(studentsList[1].isStudent);
console.log(studentsList[0].age);

let tLiteralName = `Hey, this is ${studentsList[0].name} and I am ${studentsList[0].age}!`;

console.log(tLiteralName);

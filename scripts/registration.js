let registeredPets = [
  {
    Name: "Bowler",
    Age: 3,
    Gender: "male",
    Service: "nails",
    Breed: "Giant Schnauzer",
  },

  {
    Name: "Cerberus",
    Age: 4,
    Gender: "female",
    Service: "full",
    Breed: "Norwegian Lundehund",
  },

  {
    Name: "Sphinx",
    Age: 7,
    Gender: "female",
    Service: "brushing",
    Breed: "Maine Coon",
  },
];

//used summaries from Google to clarify using .createElement and .appendChild
const oList = document.getElementById("regPets");
const oPetList = document.createElement("ol");
const oLiOne = document.createElement("li");
const oLiTwo = document.createElement("li");
const oLiThree = document.createElement("li");

document.body.appendChild(oPetList);

oList.appendChild(oPetList);
oPetList.appendChild(oLiOne);
oPetList.appendChild(oLiTwo);
oPetList.appendChild(oLiThree);

oLiOne.textContent = `${registeredPets[0].Name} ${registeredPets[0].Age} year old ${registeredPets[0].Breed}`;
oLiTwo.textContent = `${registeredPets[1].Name} ${registeredPets[1].Age} year old ${registeredPets[1].Breed} `;
oLiThree.textContent = `${registeredPets[2].Name} ${registeredPets[2].Age} year old ${registeredPets[2].Breed}`;

function NewPetInfo(Name, Age, Breed, Gender, Service) {
  this.Name = Name;
  this.Age = Age;
  this.Breed = Breed;
  this.Gender = Gender;
  this.Service = Service;
}

let NewPetOne = new NewPetInfo(
  "Bullseye",
  3,
  "American Pit Bull",
  "male",
  "Ear Cleaning",
);
let NewPetTwo = new NewPetInfo(
  "Stretch",
  5,
  "Serval",
  "female",
  "Teeth Cleaning",
);
let NewPetThree = new NewPetInfo(
  "Dodge",
  2,
  "Border Collie",
  "male",
  "Full Service",
);

registeredPets.push(NewPetOne, NewPetTwo, NewPetThree);

const getTable = document.getElementById("tbody");
getTable.textContent = "";

//i used AI here to help me figure out my errors which were that I was creating my cells outside of the loop causing the loop to overwrite them, and also I assigned a class to tbody originally, not an id. I also used semicolons inside the array instead of commas in the for of (quite the nifty function). I learned the for of from ChatGPT as well.
function displayRow() {
  for (let i = 0; i < registeredPets.length; i++) {
    const tableRow = document.createElement("tr");
    const pet = registeredPets[i];

    for (const value of [
      pet.Name,
      pet.Age,
      pet.Breed,
      pet.Gender,
      pet.Service,
    ]) {
      const data = document.createElement("td");
      data.textContent = value;
      tableRow.appendChild(data);
    }
    getTable.appendChild(tableRow);
  }
}

displayRow();

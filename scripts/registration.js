let registeredPets = [
  {
    Name: "Bowler",
    Age: 3,
    Gender: "male",
    Service: "Nails",
    Breed: "Giant Schnauzer",
  },

  {
    Name: "Cerberus",
    Age: 4,
    Gender: "female",
    Service: "Full",
    Breed: "Norwegian Lundehund",
  },

  {
    Name: "Sphinx",
    Age: 7,
    Gender: "female",
    Service: "Brushing",
    Breed: "Maine Coon",
  },
];

//used summaries from Google to clarify using .createElement and .appendChild
const oList = document.getElementById("regPets");
const oPetList = document.createElement("ol");
const oLiOne = document.createElement("li");
const oLiTwo = document.createElement("li");
const oLiThree = document.createElement("li");

//I don't understand why using this line and the next is necessary vs. one over the other, but the code doesn't work without them both.
document.body.appendChild(oPetList);
oList.appendChild(oPetList);

oPetList.appendChild(oLiOne);
oPetList.appendChild(oLiTwo);
oPetList.appendChild(oLiThree);

oLiOne.textContent = `${registeredPets[0].Name}`;
oLiTwo.textContent = `${registeredPets[1].Name}`;
oLiThree.textContent = `${registeredPets[2].Name}`;

function PetInfo(Name, Age, Breed, Gender, Service) {
  this.Name = Name;
  this.Age = Age;
  this.Breed = Breed;
  this.Gender = Gender;
  this.Service = Service;
}

let PetOne = new PetInfo(
  "Bullseye",
  3,
  "American Pit Bull",
  "male",
  "Ear Cleaning",
);
let PetTwo = new PetInfo("Stretch", 5, "Serval", "female", "Teeth Cleaning");
let PetThree = new PetInfo("Dodge", 2, "Border Collie", "male", "Full Service");

registeredPets.push(PetOne, PetTwo, PetThree);

const getTable = document.getElementById("tbody");
getTable.textContent = "";

function importDataToRows() {
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

importDataToRows();

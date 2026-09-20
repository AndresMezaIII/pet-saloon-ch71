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
const OLIST = document.getElementById("regPets");
const OPETLIST = document.createElement("ol");
const OLIONE = document.createElement("li");
const OLITWO = document.createElement("li");
const OLITHREE = document.createElement("li");
const OLIFOUR = document.createElement("li");
const OLIFIVE = document.createElement("li");
const OLISIX = document.createElement("li");
//I don't understand why using this line and the next is necessary vs. one over the other, but the code doesn't work without them both.
document.body.appendChild(OPETLIST);
OLIST.appendChild(OPETLIST);

OPETLIST.appendChild(OLIONE);
OPETLIST.appendChild(OLITWO);
OPETLIST.appendChild(OLITHREE);
OPETLIST.appendChild(OLIFOUR);
OPETLIST.appendChild(OLIFIVE);
OPETLIST.appendChild(OLISIX);

OLIONE.textContent = `${registeredPets[0].Name}`;
OLITWO.textContent = `${registeredPets[1].Name}`;
OLITHREE.textContent = `${registeredPets[2].Name}`;

function PetInfo(Name, Age, Breed, Gender, Service) {
  this.Name = Name;
  this.Age = Age;
  this.Breed = Breed;
  this.Gender = Gender;
  this.Service = Service;
}

const PETONE = new PetInfo(
  "Bullseye",
  3,
  "American Pit Bull",
  "male",
  "Ear Cleaning",
);
const PETTWO = new PetInfo("Stretch", 5, "Serval", "female", "Teeth Cleaning");
const PETTHREE = new PetInfo(
  "Dodge",
  2,
  "Border Collie",
  "male",
  "Full Service",
);

OLIFOUR.textContent = `${PETONE.Name}`;
OLIFIVE.textContent = `${PETTWO.Name}`;
OLISIX.textContent = `${PETTHREE.Name}`;

registeredPets.push(PETONE, PETTWO, PETTHREE);

const GETTABLE = document.getElementById("tbody");
GETTABLE.textContent = "";

function importDataToRows() {
  for (let i = 0; i < registeredPets.length; i++) {
    const TABLEROW = document.createElement("tr");
    const PET = registeredPets[i];

    for (const value of [
      PET.Name,
      PET.Age,
      PET.Breed,
      PET.Gender,
      PET.Service,
    ]) {
      const DATA = document.createElement("td");
      DATA.textContent = value;
      TABLEROW.appendChild(DATA);
    }
    GETTABLE.appendChild(TABLEROW);
  }
}

importDataToRows();

function displayRow(event) {
  event.preventDefault();

  let name = document.getElementById("tdOne").value;
  let age = document.getElementById("tdTwo").value;
  let breed = document.getElementById("tdThree").value;
  let gender = document.getElementById("tdFour").value;
  let service = document.getElementById("tdFive").value;

  let newPet = new PetInfo(name, age, breed, gender, service);

  let tbody = document.getElementById("tbody");
  const ROW = document.createElement("tr");

  ROW.innerHTML += `
            <td> ${newPet.Name} </td>
            <td> ${newPet.Age} </td>
            <td> ${newPet.Breed} </td>
            <td> ${newPet.Gender} </td>
            <td> ${newPet.Service} </td>
            <td> <button class="btn btn-danger del-btn">Delete</button></td>
    `;

  // Detele Functionality
  ROW.querySelector(".del-btn").addEventListener("click", function () {
    let confirmation = confirm(
      "Are you sure you want to delete this reservation?",
    );

    if (confirmation) {
      ROW.remove();
    }
  });

  tbody.appendChild(ROW);
}

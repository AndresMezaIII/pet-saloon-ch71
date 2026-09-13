console.log("registration.js connected");

let registeredPets = [
  {
    Name: "Bowler",
    Age: 3,
    Gender: "male",
    Service: "nails",
    Breed: "Giant Schnauzer"
  },

  {
    Name: "Cerberus",
    Age: 4,
    Gender: "female",
    Service: "full",
    Breed: "Norwegian Lundehund"
  },

  {
    Name: "Sphinx",
    Age: 7,
    Gender: "female",
    Service: "brushing",
    Breed: "Maine Coon"
  }
];

let prefix = "";
function displayPets() {
  prefix = document.getElementById("regPets");
  return prefix;
};

displayPets();

prefix.innerHTML += `<ol>
                            <li>${registeredPets[0].Name}</li>
                            <li>${registeredPets[1].Name}</li>
                            <li>${registeredPets[2].Name}</li>
                    </ol>`;

const oPetList = document.createElement("ol");
const oLiOne = document.createElement("li");
const oLiTwo = document.createElement("li");
const oLiThree = document.createElement("li");

oPetList.appendChild(oLiOne);
oPetList.appendChild(oLiTwo);
oPetList.appendChild(oLiThree);

document.body.appendChild(oPetList);

function addPet () {
  let petName = document.getElementById("name").value;
  let petAge = document.getElementById("age").value;
  let petBreed = document.getElementById("breed").value;
  let petService = document.getElementById("services").value;
  let petGender = document.getElementById("gender").value;
  let petDemo = [];
  
  petDemo.push({Name: petName, Age: Number(petAge), Gender: petGender, Service: petService, Breed: petBreed});

  registeredPets = [...registeredPets, ...petDemo];
  
    
};


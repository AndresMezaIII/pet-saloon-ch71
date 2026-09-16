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

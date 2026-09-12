console.log("registration.js connected");

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

/*function displayPets() {
  return let prefix = document.getElementById("regPets");
}*/

prefix.innerHTML += `<ol>
                            <li>${registeredPets[0].Name}</li>
                            <li>${registeredPets[1].Name}</li>
                            <li>${registeredPets[2].Name}</li>
                      </ol>`;

displayPets();

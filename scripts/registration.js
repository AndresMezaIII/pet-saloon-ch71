console.log("registration.js connected");

let crestedCockatoo = {
  Name: "Bert",
  Age: 30,
  Gender: "female",
  Service: "none",
  Breed: "Sulphur-Crested Cockatoo",
};

let giantSchnauzer = {
  Name: "Bowler",
  Age: 3,
  Gender: "male",
  Service: "show dog",
  Breed: "Giant Schnauzer",
};

let maineCoon = {
  Name: "Sphinx",
  Age: 7,
  Gender: "female",
  Service: "none",
  Breed: "Maine Coon",
};

function displayPets() {
  let prefix = document.getElementById("regPets");

  prefix.innerHTML += `<ol>
                            <li>${crestedCockatoo.Name}</li>
                            <li>${giantSchnauzer.Name}</li>
                            <li>${maineCoon.Name}</li>
                        </ol>`;
}

displayPets();

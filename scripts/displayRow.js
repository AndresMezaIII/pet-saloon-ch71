const myForm = document.getElementById("form");
const tableBody = document.getElementById("tbody");
const petRow = document.createElement("tr");

function displayRow() {
  const petValues = new NewPetInfo(
    (this.Name = document.getElementById("tdOne").value),
    (this.Age = document.getElementById("tdTwo").value),
    (this.Breed = document.getElementById("tdThree").value),
    (this.Gender = document.getElementById("tdFour").value),
    (this.Service = document.getElementById("tdFive").value),
  );

  for (const value of [
    petValues.Name,
    petValues.Age,
    petValues.Breed,
    petValues.Gender,
    petValues.Service,
  ]) {
    const data = document.createElement("td");
    data.textContent = value;
    petRow.appendChild(data);
  }
  tableBody.appendChild(petRow);
}

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

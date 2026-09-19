const SALON = {
  salonName: "Pet Saloon",
  openHour: 9,
  closeHour: 5,
  address: "123 Main St. Orlando, FL 12345",
};

function displaySalonInfo() {
  const FINDTAG = document.getElementById("salon-info");
  FINDTAG.innerHTML += `
    <p> ${SALON.salonName} 
    Open from ${SALON.openHour} to ${SALON.closeHour}
    Address: ${SALON.address}</p>
    `;
}

displaySalonInfo();

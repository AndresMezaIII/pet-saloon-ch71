

function getValues() {
    let formProductName = document.getElementById("prodInput").value;
    let formPrice = document.getElementById("inputPrice").value;
    let formCategory = document.getElementById("catInput").value;
    
    alert(`Product: ${formProductName} - Price: ${formPrice} - Category: ${formCategory}`);
}


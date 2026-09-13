console.log("connected");

function getValues() {
    let formProd = document.getElementById("prodInput").value;
    let formPrice = document.getElementById("inputPrice").value;
    let formCat = document.getElementById("catInput").value;
    
    alert(`${formProd} ${formCat} $${formPrice}`);
}
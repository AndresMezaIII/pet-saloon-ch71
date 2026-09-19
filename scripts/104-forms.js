//object constructor
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

function getValues(event) {
  //Prevent refreshing of the browser
  event.preventDefault();
  //get values
  let formProductName = document.getElementById("prodInput").value;
  let formPrice = document.getElementById("inputPrice").value;
  let formCategory = document.getElementById("catInput").value;
  //alert properties
  //alert(`Product: ${formProductName} - Price: ${formPrice} - Category: ${formCategory}`);
  //use the values
  let product = new Product(formProductName, formPrice, formCategory);
  //alert(`${product.name} - $${product.price} - ${product.category}`);
  //display the product
  let container = document.getElementById("productsList");
  container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary"Card subtitle>${product.price}</h6>
                <p class="card-text">${product.category}</p>
            </div>
        </div>
    `;

  //Clear the form
}

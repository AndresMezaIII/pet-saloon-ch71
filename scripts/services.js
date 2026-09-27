//working with the register button
$("#registerService").click(function (event) {
  event.preventDefault();
  //1. get values
  let service = $("#serviceInput").val().trim();
  let description = $("#descriptionInput").val().trim();
  let price = $("#priceInput").val().trim();

  function Service() {
    this.Service = service;
    this.Description = description;
    this.Price = price;
  }

  let services = new Service(service, description, price);

  //2. Use the values
  if (service === "") {
    //change border
    $("#serviceInput").css("border", "solid 1px red");
  } else {
    localStorage.setItem("Service", service);
  }

  if (description === "") {
    $("#descriptionInput").css("border", "solid 1px red");
  }

  if (price === "") {
    $("#priceInput").css("border", "solid 1px red");
  }

  //3. add service
  $("#registerService").click(function () {
    localStorage.setItem("Service", service);
    let addService = localStorage.getItem("Service");
    $("#tdFive").html(`"<option>" + ${addService} + "</option"`);
  });
});

//clearing input
$("#clearForm").click(function (event) {
  event.preventDefault();
  $("#serviceInput").css("border", "").val("");
  $("#descriptionInput").css("border", "").val("");
  $("#priceInput").css("border", "").val("");
});

$("#toggle").click(function () {
  $("body").toggleClass("dark-mode");
});

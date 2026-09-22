//working with the register button
$("#registerService").click(function (event) {
  event.preventDefault();
  //1. get values
  let service = $("#serviceInput").val().trim();
  let description = $("#descriptionInput").val().trim();
  let price = $("#priceInput").val().trim();

  //2. Use the values
  if (service === "") {
    //change border
    $("#serviceInput").css("border", "solid 1px red");
  }

  if (description === "") {
    $("#descriptionInput").css("border", "solid 1px red");
  }

  if (price === "") {
    $("#priceInput").css("border", "solid 1px red");
  }
});

//clearing input
$("#clearForm").click(function (event) {
  event.preventDefault();
  $("#serviceInput").css("border", "").val("");
  $("#descriptionInput").css("border", "").val("");
  $("#priceInput").css("border", "").val("");
});

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
});

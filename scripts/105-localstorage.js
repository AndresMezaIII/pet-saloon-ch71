//SAVE
$("#saveBtn").click(function () {
  //alert("Are you sure you want to write to local storage?");
  //get the value
  let usernameValue = $("#username").val().trim();

  //use the value
  localStorage.setItem("usernameKey", usernameValue);
});
//GET
$("#getBtn").click(function (e) {
  e.preventDefault();
  //alert("Getting data from local storage.");
  let storedUserName = localStorage.getItem("usernameKey");
  $("#result").text(storedUserName ? storedUserName : "No data found.");
});

//DELETE
$("#deleteBtn").click(function () {
  //alert("Danger! Are you sure you want to delete data from local storage?");
  localStorage.clear();
});

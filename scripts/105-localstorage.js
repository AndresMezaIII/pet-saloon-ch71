//SAVE
$("#saveBtn").click(function () {
  //alert("Are you sure you want to write to local storage?");
  //get the value
  let userName = $("#username").val().trim();
  let name = $("#name").val().trim();
  let age = $("#age").val().trim();
  let email = $("#email").val().trim();
  //use the value
  let savedFlag = true;
  if (userName == "") {
    savedFlag = false;
  }

  if (name == "") {
    savedFlag = false;
  }

  if (age == "") {
    savedFlag = false;
  }

  if (email == "") {
    savedFlag = false;
  }

  if (savedFlag == true) {
    localStorage.setItem("User Name", userName);
    localStorage.setItem("E-mail", email);
    localStorage.setItem("Age", age);
    localStorage.setItem("Name", name);
    alert("Data was saved to local storage.");
  } else {
    alert("Please complete the form.");
  }
});
//GET
$("#getBtn").click(function (e) {
  e.preventDefault();
  //alert("Getting data from local storage.");
  let storedUserName = localStorage.getItem("User Name");
  let storedName = localStorage.getItem("Name");
  let storedAge = localStorage.getItem("Age");
  let storedEmail = localStorage.getItem("E-mail");
  $("#result").text(storedUserName ? storedUserName : "No data found.");
});

//DELETE
$("#deleteBtn").click(function (e) {
  e.preventDefault();
  let confirmation = confirmation("Are you sure you want to clear data?");
  if (confirmation) {
    localStorage.clear();
  }
  //alert("Danger! Are you sure you want to delete data from local storage?");
});

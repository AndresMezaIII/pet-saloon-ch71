/* JavaScript -> Vanilla
function sayHello() {
  alert("Hello!");
}*/

// jQuery Approach
// selector             .action
$("#triggerEventButton").click(function () {
  alert("Hello");
});

// === Practicing jQuery Actions === //

$("#showP").click(function () {
  $("p").show();
});

$("#hideP").click(function () {
  $("p").hide();
});

//can do .toggle() or .slideToggle()
$("#toggleP").click(function () {
  $("p").toggle();
});

//can do .text("text") or .html("<i>content</i>")
$("#changeText").click(function () {
  $("p").html("<i>Hello again!</i>");
});

//.css("property", "value")
//.css("property", "value");
//use .css to add other properties and end with a semicolon
$("#addCss").click(function () {
  $("p")
    .css("color", "red")
    .css("border", "2px solid black")
    .css("padding", "3px");
});

$("#addClass").click(function () {
  $("p").addClass("text-style");
});

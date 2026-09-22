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

$("#toggleP").click(function () {
  $("p").toggle();
});

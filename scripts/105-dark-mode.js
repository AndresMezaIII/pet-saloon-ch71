$("#change-mode").click(function () {
  $("body").toggleClass("dark-mode");
  //Is the class applied to the body?
  const ISDARK = $("body").hasClass("dark-mode");

  /*if (ISDARK) {
    $("h1").text("🌓 Dark Mode");
  } else {
    $("h1").text("☀️ Light Mode");
  }*/
  ISDARK ? $("h1").text("🌓 Dark Mode") : $("h1").text("☀️ Light Mode");
});

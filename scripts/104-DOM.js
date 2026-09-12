console.log("connected");

function update() {
  //alert("Clicked");
  //update h2 text using DOM API Methods (getElementById)
  let title = document.getElementById("subSection-1");
  title.textContent = "(Updated) Getting Elements"; 
  //update paragraphs using DOM API methods (getElementsByClassName) -- when console.logging, will return an array, will always return an array
  let paragraphs = document.getElementsByClassName("updParagraph");

  //access first paragraphand update text color

  paragraphs[0].style.color = "red";
  paragraphs[1].style.color = "blue";
//
  console.log(paragraphs);
// trigger an action onlick
}
function triggerAddAction() {
    //1. get the input input value (from text box)
    //2. remember to target the value not just the input field
    let valueInput = document.getElementById("inputText").value;
    //test if the value is being captured with alert(value);
    //put html ul in the html
    let uList = document.getElementById("uList");
    let listItem = document.createElement("li");
    listItem.innerHTML = valueInput;
    uList.appendChild(listItem);
    document.getElementById("inputText").value = "";
}
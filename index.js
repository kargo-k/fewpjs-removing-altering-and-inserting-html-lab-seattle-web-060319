// Write your code here!
document.querySelector("main").remove();
var newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = "YOUR-NAME is the champion";

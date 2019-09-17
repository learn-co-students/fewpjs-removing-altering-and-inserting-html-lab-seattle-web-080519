// creating DOM elements programmatically
document.querySelector("main#main").remove();
// adding elements to DOM
const newHeader = document.createElement("h1");
newHeader.id = "victory";
// updating elements via innerHTML
newHeader.innerHTML = "Grace is the champion";
// change properties on DOM nodes
newHeader.className = "victory";
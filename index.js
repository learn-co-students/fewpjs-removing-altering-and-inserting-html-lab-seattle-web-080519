// Write your code here!

document.querySelector('main').remove();
let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Joseph is the champion";
let mainNode = document.querySelector('main');
mainNode.appendChild(newHeader);
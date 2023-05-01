let container = document.querySelector(".container");
let children;
let child;
function createDiv() {
  for (let i = 0; i < 256; i++) {
    child = document.createElement("div");
    child.classList.add("child");
    container.appendChild(child);
    children = document.querySelectorAll(".child");
  }
}
function changeColor() {
  for (let i = 0; i < children.length; i++) {
    const element = children[i];
    element.addEventListener("mouseover", function () {
      element.classList.add("hover");
    });
  }
}
createDiv();
changeColor();

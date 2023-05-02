let container = document.querySelector(".container");
let children;
let child;
let size = 16;

function createDiv() {
  for (let i = 0; i < size * size; i++) {
    child = document.createElement("div");
    child.classList.add("child");
    child.style.width = `calc(500px / ${size})`;
    child.style.height = `calc(500px / ${size})`;
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
function getSize() {
  let select = document.querySelector("#Select");
  let message = document.querySelector(".message");
  select.addEventListener("click", () => {
    size = prompt("Enter a number between 1 and 100");
    if (!isNaN(size) && size >= 1 && size <= 100) {
      container.innerHTML = "";
      createDiv();
      changeColor();
    } else {
      return (message.textContent =
        "Please enter a valid number between 1 and 100.");
    }
  });
}
getSize();
createDiv();
changeColor();

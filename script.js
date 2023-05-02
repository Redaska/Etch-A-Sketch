let container = document.querySelector(".container");
let children;
let child;
let size = 16;
let currentColor = "black";

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
      if (currentColor === "rainbow") {
        element.style.backgroundColor = `hsl(${
          Math.random() * 360
        }, 100%, 50%)`;
      } else {
        element.style.backgroundColor = currentColor;
      }
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

function setBlackColor() {
  currentColor = "black";
}

function setRandomColor() {
  currentColor = "rainbow";
}
function resetColors() {
  for (let i = 0; i < children.length; i++) {
    const element = children[i];
    element.style.backgroundColor = "white";
  }
}

document.querySelector(".Reset").addEventListener("click", resetColors);
document.querySelector(".Black").addEventListener("click", setBlackColor);
document.querySelector(".Rainbow").addEventListener("click", setRandomColor);
getSize();
createDiv();
changeColor();

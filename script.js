let container = document.querySelector(".container");
let child;
for (let i = 0; i < 256; i++) {
  child = document.createElement("div");
  child.classList.add("child");
  container.appendChild(child);
}

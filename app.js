let addBtn = document.getElementById("addBtn");
let arr = [];
window.addEventListener("load", () => {
  let Data = JSON.parse(localStorage.getItem("todo"));
  render(Data);
});

addBtn.addEventListener("click", () => {
  let Data = document.getElementById("userData");
  arr = JSON.parse(localStorage.getItem("todo"));
  arr.push(Data.value);
  localStorage.setItem("todo", JSON.stringify(arr));
  addList(Data.value);
});

function render(arr) {
  const Lists = document.getElementById("list");
  arr.map((el) => {
    const item = document.createElement("li");
    item.innerText = el;
    Lists.appendChild(item);
  });
}

function addList(value) {
  const Lists = document.getElementById("list");
  const item = document.createElement("li");
  item.innerText = value;
  Lists.appendChild(item);
}

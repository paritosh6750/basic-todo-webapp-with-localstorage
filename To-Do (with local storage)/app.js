// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//   if (inp.value === "") {
//     return;
//   }
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delBtn = document.createElement("button");
//   delBtn.innerText = "Delete";
//   delBtn.classList.add("delete");

//   ul.appendChild(item);
//   item.appendChild(delBtn);
//   inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//   if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//   }
// });

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Load items from localStorage when the page loads
window.addEventListener("DOMContentLoaded", function () {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  items.forEach(function (text) {
    addItemToDOM(text);
  });
});

btn.addEventListener("click", function () {
  if (inp.value === "") {
    return;
  }
  addItemToDOM(inp.value);
  saveItemToLocalStorage(inp.value);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    let text = listItem.firstChild.textContent; // get the text part
    listItem.remove();
    removeItemFromLocalStorage(text);
  }
});

// Helper function to add an item to the DOM
function addItemToDOM(text) {
  let item = document.createElement("li");
  item.innerText = text;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
}

// Helper function to save an item to localStorage
function saveItemToLocalStorage(text) {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  items.push(text);
  localStorage.setItem("todoList", JSON.stringify(items));
}

// Helper function to remove an item from localStorage
function removeItemFromLocalStorage(text) {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  let index = items.indexOf(text);
  if (index > -1) {
    items.splice(index, 1);
  }
  localStorage.setItem("todoList", JSON.stringify(items));
}

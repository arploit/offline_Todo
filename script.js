const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const listBlock = document.getElementById("listBlock");
listBlock.style.visibility = "hidden";

//variables

let inputBoxValue = "";
// functions

inputBox.setAttribute("placeholder", "Input a List Items");

let addItems = (value, id) => {
  return `
    <div class="list_div" id="listItemBlock-${id}">
      <div class="listItem_Block" id = "${id}-lib" onClick="handleCheckboxClick(${id})">
        <input type="checkbox" id="${id}-input"/>
        <li id="${id}-li">${value}</li>
      </div>
      <button class="destroyItem" id="${id}-destroyItem" onClick="destroyListItem(${id})">-</button>
    <div>
    `;
};

const addListItem = () => {
  if (inputBoxValue.trim().length) {
    list.innerHTML += addItems(inputBoxValue, new Date().getTime());
    // Todo Create a Data Structure that will store all the data in local storage
    // allTodoItems.push(inputBoxValue);
  }

  if (list.childElementCount) {
    listBlock.style.visibility = "visible";
  }
  inputBox.value = "";
  inputBoxValue = "";
};

inputBox.addEventListener("input", (e) => {
  inputBoxValue = e.target.value;
});

addButton.addEventListener("click", addListItem);

const getListDiv = (id) => {
  return document.getElementById(`listItemBlock-${id}`);
};

const handleCheckboxClick = (id) => {
  let checkBox = document.getElementById(`${id}-input`);
  let listItem = document.getElementById(`${id}-li`);
  let listDiv = document.getElementById(`${id}-lib`);
  if (checkBox.getAttribute("checked")) {
    listItem.classList.remove("done");
    checkBox.removeAttribute("checked");
    listDiv.classList.remove("completed");
  } else {
    listItem.classList.add("done");
    listDiv.classList.add("completed");
    checkBox.setAttribute("checked", true);
  }
};

const destroyListItem = (id) => {
  let listItem = getListDiv(id);
  list.removeChild(listItem);
};

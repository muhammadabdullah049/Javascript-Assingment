

// script.js
var todoValue = document.getElementById("todoText");
var todoAlert = document.getElementById("Alert");
var listItems = document.getElementById("list-items");
var addUpdate = document.getElementById("AddUpdateClick");
var loginPage = document.getElementById("login-page");
var todoApp = document.getElementById("todo-app");

var userEmail = localStorage.getItem("userEmail");
var todo = JSON.parse(localStorage.getItem("todo-list")) || [];

function checkUserLogin() {
  var emailInput = document.getElementById("emailInput").value;
  if (emailInput.trim() !== "") {
    localStorage.setItem("userEmail", emailInput);
    userEmail = emailInput;
    loginPage.style.display = "none";
    todoApp.style.display = "block";
    displayNotes();
  } else {
    alert("Please enter your email.");
  }
}

function CreateToDoItems() {
  if (todoValue.value.trim() === "") {
    todoAlert.innerText = "Please enter your todo text!";
    todoValue.focus();
  } else {
    let IsPresent = false;
    todo.forEach((element) => {
      if (element.item == todoValue.value) {
        IsPresent = true;
      }
    });

    if (IsPresent) {
      setAlertMessage("This item already present in the list!");
      return;
    }

    let li = document.createElement("li");
    const todoItems = `<div title="Double click to mark as completed" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);

    let itemList = { item: todoValue.value, status: false };
    todo.push(itemList);
    setLocalStorage();
    todoValue.value = "";
    setAlertMessage("Todo item created successfully!");
  }
}

function displayNotes() {
  listItems.innerHTML = "";
  todo.forEach((element) => {
    let li = document.createElement("li");
    let style = element.status ? 'style="text-decoration: line-through"' : "";
    const todoItems = `<div ${style} title="Double click to mark as completed" ondblclick="CompletedToDoItems(this)">${element.item}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" /><img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
  });
}

function UpdateToDoItems(e) {
  if (e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
    todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
    updateText = e.parentElement.parentElement.querySelector("div");
    addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdate.setAttribute("src", "/images/refresh.png");
    todoValue.focus();
  }
}

function UpdateOnSelectionItems() {
  let IsPresent = false;
  todo.forEach((element) => {
    if (element.item == todoValue.value) {
      IsPresent = true;
    }
  });

  if (IsPresent) {
    setAlertMessage("This item already present in the list!");
    return;
  }

  todo.forEach((element) => {
    if (element.item == updateText.innerText.trim()) {
      element.item = todoValue.value;
    }
  });
  setLocalStorage();

  updateText.innerText = todoValue.value;
  addUpdate.setAttribute("onclick", "CreateToDoItems()");
  addUpdate.setAttribute("src", "/images/plus.png");
  todoValue.value = "";
  setAlertMessage("Todo item updated successfully!");
}

function DeleteToDoItems(e) {
  let deleteValue = e.parentElement.parentElement.querySelector("div").innerText;
  if (confirm(`Are you sure you want to delete this ${deleteValue}?`)) {
    e.parentElement.parentElement.setAttribute("class", "deleted-item");
    todoValue.focus();

    todo = todo.filter((element) => element.item !== deleteValue.trim());

    setTimeout(() => {
      e.parentElement.parentElement.remove();
    }, 1000);

    setLocalStorage();
    setAlertMessage("Todo item deleted successfully!");
  }
}

function CompletedToDoItems(e) {
  const itemText = e.parentElement.querySelector("div").innerText;
  e.parentElement.querySelector("div").style.textDecoration = "line-through";

  todo.forEach((element) => {
    if (element.item === itemText) {
      element.status = true;
    }
  });
  setLocalStorage();
  setAlertMessage("Todo item marked as completed!");
}

function setLocalStorage() {
  localStorage.setItem("todo-list", JSON.stringify(todo));
}

function setAlertMessage(message) {
  todoAlert.innerText = message;
  setTimeout(() => {
    todoAlert.innerText = "";
  }, 2000);
}

function logout() {
  localStorage.removeItem("userEmail");
  loginPage.style.display = "block";
  todoApp.style.display = "none";
  todo = [];
  todoValue.value = "";
  setAlertMessage("Logged out successfully!");
}

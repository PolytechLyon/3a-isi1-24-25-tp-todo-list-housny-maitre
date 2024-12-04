document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todo-list");
  const newTodoInput = document.getElementById("new-todo-item-title");
  const newTodoAddButton = document.getElementById("new-todo-item-add");
  const editPanel = document.getElementById("edit-item");
  const editInput = document.getElementById("edit-todo-item-title");
  const confirmEditButton = document.getElementById("edit-todo-item-confirm");
  const cancelEditButton = document.getElementById("edit-todo-item-cancel");
  const newItemPanel = document.getElementById("new-item");

  let currentEditItem = null;

  newTodoAddButton.addEventListener("click", () => {
    const title = newTodoInput.value.trim();
    if (title) {
      addTodoItem(title);
      newTodoInput.value = "";
    }
  });

  function addTodoItem(title) {
    const listItem = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.textContent = title;
    listItem.appendChild(textSpan);

    const editButton = createButton("Edit", () => activateEditMode(listItem, textSpan.textContent));
    const deleteButton = createButton("Delete", () => listItem.remove());

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }

  function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }

  function activateEditMode(item, currentText) {
    currentEditItem = item;
    editInput.value = currentText;
    editPanel.hidden = false;
    newItemPanel.hidden = true;  // Masquer le panneau d'ajout de tâche
  }

  confirmEditButton.addEventListener("click", () => {
    if (currentEditItem) {
      currentEditItem.querySelector("span").textContent = editInput.value.trim();
      deactivateEditMode();
    }
  });

  cancelEditButton.addEventListener("click", deactivateEditMode);

  function deactivateEditMode() {
    editPanel.hidden = true;
    newItemPanel.hidden = false;  // Afficher de nouveau le panneau d'ajout de tâche
    currentEditItem = null;
  }
});

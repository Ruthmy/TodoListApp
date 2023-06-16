// editTaks.js

// Edit functionality
function editTask(indexTask, taskDescription, ItemsArray) {
  // Update the task description in the array
  ItemsArray[indexTask].description = taskDescription;
  localStorage.setItem('tasks', JSON.stringify(ItemsArray));
}

export default editTask;
// changeTaskStatus.js
// Tasks on the local storage

function changeTaskStatus(taskIndex, taskStatus, ItemsArray) {
  // Update the status of the task in the array
  ItemsArray[taskIndex].completed = taskStatus;
  localStorage.setItem('tasks', JSON.stringify(ItemsArray));
}

export default changeTaskStatus;
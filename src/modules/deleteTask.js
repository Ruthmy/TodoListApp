// deleteTasks.js
// Tasks on the local storage
const ItemsArray = JSON.parse(localStorage.getItem('tasks')) || [];

function deleteTask(taskIndex) {
  ItemsArray.splice(taskIndex - 1, 1);

  // Update the index property of the remaining tasks
  ItemsArray.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(ItemsArray));
}

export default deleteTask;
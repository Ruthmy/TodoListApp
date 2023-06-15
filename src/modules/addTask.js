// addTasks.js
// Tasks on the local storage
const ItemsArray = JSON.parse(localStorage.getItem('tasks')) || [];

// Add functionality
function addTask() {
  const input = document.getElementById('add-item');
  const description = input.value;
  const index = ItemsArray.length + 1;
  const completed = false;
  const newItem = { index, description, completed };
  ItemsArray.push(newItem);
  localStorage.setItem('tasks', JSON.stringify(ItemsArray));
  document.getElementById('add-form').reset();
}

export default addTask;
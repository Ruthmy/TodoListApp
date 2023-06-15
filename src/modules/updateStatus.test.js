/**
 * @jest-environment jsdom
 */

import deleteCompletedTasks from './deleteCompletedTasks.js';
// import displayTasks from './crud.js';

describe('deleteCompletedTasks', () => {
  test('should remove completed tasks from the ItemsArray and update the local storage', () => {
    // Arrange
    const ItemsArray = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: true },
      { index: 3, description: 'Task 3', completed: false },
    ];
    const expectedItemsArray = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 3', completed: false },
    ];
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Act
    deleteCompletedTasks(ItemsArray);

    // Assert
    const updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toEqual(expectedItemsArray);
  });
});

/*
describe('editTask', () => {
  test('should edit a task from the ItemsArray and update the local storage', () => {
    // isolated tasks
    // document.body.innerHTML = '<li class="item"><input type="checkbox" name="item" id="item-1" data-index="3"><label for="item-3">Nex task</label><button class="btn"></button><button class="btn-delete"></button></li>';
    document.body.innerHTML = '<div id="checklist"><div class="header"><h1>Today\'s To Do</h1></div><div id="items"><form id="add-form" class="add-form"><label for="add-item"><input type="text" name="add-item" id="add-item" class="add-form__input" placeholder="Add a new item to the list..." required="" autofocus=""></label><button type="button" id="add-button"></button><div id="error"></div></form><ul id="list"></ul></div><div id="clear"><button type="button" id="clear-button">Clear all completed</button></div></div>';

    // Arrange
    const ItemsArray = [];
    const expectedItemsArray = { index: 1, description: 'New Task Added', completed: true };
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Wait for the tasks to be rendered
    setTimeout(() => {
      // Simulate a click on the checkbox for Task 1
      const checkbox = document.querySelector('#item-1');
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('click'));

      // Check that the completed state of Task 1 was updated in localStorage
      const updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
      expect(updatedItemsArray[0].completed).toBe(true);
      // done();
    }, 1000);
  });
});


describe('editTask', () => {
  test('should update the description of a task', () => {
    // Arrange
    const task = { index: 1, description: 'Task 1', completed: false };
    const updatedDescription = 'Updated Task 1';
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const editButton = document.createElement('button');
    const expectedTask = { index: 1, description: updatedDescription, completed: false };

    // Set up the initial state
    label.textContent = task.description;
    li.appendChild(label);
    li.appendChild(editButton);

    // Mock the necessary functions and properties
    li.replaceChild = jest.fn();
    localStorage.setItem = jest.fn();
    displayTasks = jest.fn(); // Assuming displayTasks is defined globally

    // Act
    label.dispatchEvent(new Event('dblclick'));

    // Simulate editing
    input.value = updatedDescription;
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    // Assert
    expect(li.replaceChild).toHaveBeenCalledWith(expect.any(Object), label);
    expect(localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify([expectedTask]));
    expect(displayTasks).toHaveBeenCalled();
  });
});


describe('changeStatus', () => { });
*/
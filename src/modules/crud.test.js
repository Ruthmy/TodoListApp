/**
 * @jest-environment jsdom
 */

import deleteTask from './deleteTask.js';
import addTask from './addTask.js';
import deleteCompletedTasks from './deleteCompletedTasks.js';

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

describe('addTask', () => {
  test('should add a new task to the ItemsArray and update the local storage', () => {
    // Arrange
    // isolated enviroment with no tasks
    document.body.innerHTML = '<div id="checklist"><div class="header"><h1>Today\'s To Do</h1></div><div id="items"><form id="add-form" class="add-form"><label for="add-item"><input type="text" name="add-item" id="add-item" class="add-form__input" placeholder="Add a new item to the list..." required="" autofocus=""></label><button type="button" id="add-button"></button><div id="error"></div></form><ul id="list"></ul></div><div id="clear"><button type="button" id="clear-button">Clear all completed</button></div></div>';

    const ItemsArray = [];
    const newItem = { index: 1, description: 'New Task Added', completed: false };
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Create the element
    const newTask = document.createElement('label');
    newTask.setAttribute('id', 'add-item');
    // Add the value
    const input = document.querySelector('#add-item');
    input.value = 'New Task Added';

    // Act
    addTask();

    // Assert
    const updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toContainEqual(newItem);
  });
});

describe('deleteTask', () => {
  test('should remove a task from the ItemsArray and update the local storage', () => {
    // Arrange
    // Create a new task to delete later
    const ItemsArray = [];
    const newItem = { index: 1, description: 'New Task Added', completed: false };
    const expectedItemsArray = [];
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Create the element
    const newTask = document.createElement('label');
    newTask.setAttribute('id', 'add-item');
    // Add the value
    const input = document.querySelector('#add-item');
    input.value = 'New Task Added';

    // Act & Assert
    addTask();
    // check the task is added to the ItemsArray
    let updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toContainEqual(newItem);

    deleteTask(1);
    // Check the task is deleted from the ItemsArray
    updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toEqual(expectedItemsArray);
    expect(updatedItemsArray).not.toContainEqual(newItem);
  });
});

describe('changeStatus', () => { });

/*
*/

describe('editTask', () => {
  test('should edit a task from the ItemsArray and update the local storage', () => {
    // isolated tasks
    document.body.innerHTML = '<li class="item"><input type="checkbox" name="item" id="item-1" data-index="3"><label for="item-3">Nex task</label><button class="btn"></button><button class="btn-delete"></button></li>';

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

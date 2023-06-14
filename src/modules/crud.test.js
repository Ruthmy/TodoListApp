/**
 * @jest-environment jsdom
 */
/*
import {
  displayTasks, addTask, addButton, clearButton,
} from './crud.js';
*/
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
    const ItemsArray = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: true },
      { index: 3, description: 'Task 3', completed: false },
    ];
    const newItem = { index: 4, description: 'New Task Added', completed: false };
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Act
    addTask();

    // Assert
    const updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toContainEqual(newItem);
  });
});


/*


// Test for tha add function
describe('Task Functions', () => {
  // isolated enviroment with no tasks
  document.body.innerHTML = '<div id="checklist"><div class="header"><h1>Today\'s To Do</h1></div><div id="items"><form id="add-form" class="add-form"><label for="add-item"><input type="text" name="add-item" id="add-item" class="add-form__input" placeholder="Add a new item to the list..." required="" autofocus=""></label><button type="button" id="add-button"></button><div id="error"></div></form><ul id="list"></ul></div><div id="clear"><button type="button" id="clear-button">Clear all completed</button></div></div>';

  // select the tasks list container inside the html
  const container = document.querySelector('#list');

  let ItemsArray;

  beforeEach(() => {
    ItemsArray = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: true },
      { index: 3, description: 'Task 3', completed: false },
    ];
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));
  });

  afterEach(() => {
    localStorage.removeItem('tasks');
  });

  describe('addTask', () => {
    test('should add a new task', () => {
      // Arrange
      const input = document.querySelector('#add-item');
      input.value = 'New Task Added';
      const newItem = { index: 4, description: 'New Task Added', completed: false };

      // This module has a side-effect
      require('./crud.js');

      // Act
      displayTasks();
      addTask();

      // Assert
      setTimeout(() => {
        expect(container.children.length).toEqual(4);
        expect(ItemsArray).toContainEqual(newItem);
      }, 1000);
    });
  });
});
*/
/**
 * @jest-environment jsdom
 */

import changeTaskStatus from './changeTaskStatus.js';
import editTask from './editTask.js';

describe('changeTaskStatus', () => {
  test('should update the status of a task', () => {
    // Arrange
    const taskIndex = 0;
    const taskStatus = true;
    const ItemsArray = [
      { index: 1, description: 'New Task Added', completed: false },
    ];
    const expectedItemsArray = [
      { index: 1, description: 'New Task Added', completed: true },
    ];
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Act
    changeTaskStatus(taskIndex, taskStatus, ItemsArray);

    // Assert
    const updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toEqual(expectedItemsArray);
  });
});

describe('editTask', () => {
  test('should edit a task from the ItemsArray and update the local storage', () => {
    // Arrange
    const taskIndex = 0;
    const taskDescription = 'New Task';
    const ItemsArray = [
      { index: 1, description: 'New Task Added', completed: false },
    ];
    const expectedItemsArray = [
      { index: 1, description: 'New Task', completed: false },
    ];
    localStorage.setItem('tasks', JSON.stringify(ItemsArray));

    // Act
    editTask(taskIndex, taskDescription, ItemsArray);

    // Assert
    const updatedItemsArray = JSON.parse(localStorage.getItem('tasks'));
    expect(updatedItemsArray).toEqual(expectedItemsArray);
  });
});

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
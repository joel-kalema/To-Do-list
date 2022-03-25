import 'lodash';
import './style.css';
import TodoList from './todoTask.js';

const list = document.querySelector('.lists');
const addTodo = document.querySelector('.form');
const descript = document.querySelector('#title');
const remoTasks = document.querySelector('.remouveAll');

const todoList = new TodoList();

addTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  if (descript.value.trim()) {
    todoList.addTask(descript.value);
    todoList.setStorage();
    todoList.displayToDo(list);
    addTodo.reset();
  }
});

remoTasks.addEventListener('click', () => {
  todoList.removeAll();
  todoList.setStorage();
  todoList.displayToDo(list);
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('delete')) {
    const id = parseInt(e.target.parentElement.id, 10);
    todoList.removeList(id);
    todoList.setStorage();
    todoList.displayToDo(list);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  todoList.getStorage();
  todoList.displayToDo(list);
});
import 'lodash';
import './style.css';
import TodoList from '../modules/todoTask.js';

const list = document.querySelector('.lists');
const addTodo = document.querySelector('.form');
const descript = document.querySelector('#title');

const todoList = new TodoList();

addTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  if (descript.value.trim()) {
    todoList.addTask(descript.value);
    todoList.setStorage();
    todoList.displayToDO(list);
    addTodo.reset();
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('delete')) {
    const id = parseInt(e.target.parentElement.id, 10);
    todoList.removeList(id);
    todoList.setStorage();
    todoList.displayToDO(list);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  todoList.getStorage();
  todoList.displayToDO(list);
});
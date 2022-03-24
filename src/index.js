import 'lodash';
import './style.css';
import TodoList from '../modules/todoTask.js';

const list = document.querySelector('.lists');
const addTodo = document.querySelector('.add');
const descript = document.querySelector('#title');

const TodoL = new TodoList();

addTodo.addEventListener('click', (e) => {
  e.preventDefault();
  if (descript.value.trim()) {
    TodoL.addTask(descript.value);
    TodoL.setStorage();
    TodoL.displayToDO(list);
  }
});
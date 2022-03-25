export default class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const completed = false;
    const id = this.tasks.length + 1;
    const task = {
      id,
      description,
      completed,
    };
    this.tasks.push(task);
  }

  removeList = (id) => {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      }
    });
  }

  displayToDo(list) {
    list.innerHTML = '';
    this.tasks.forEach((task) => {
      const li = `<div id="${task.id}" class="list">
      <input
        type="checkbox"
        id="${task.id}"
        name="task"
        value="task"
        class="checkbox"
      />
      <input
        type="text" id="${task.id}" class="text-area" name="task" value="${task.description}" />
      <button class="delete">Delete</button>
    </div>`;
      list.innerHTML += li;
    });
    const checkedbox = document.querySelectorAll('.checkbox');
    checkedbox.forEach((check) => {
      check.addEventListener('change', () => {
        if (check.checked) {
          check.nextElementSibling.style.textDecoration = 'line-through';
        } else {
          check.nextElementSibling.style.textDecoration = 'none';
        }
      });
    });

    const textArea = document.querySelectorAll('.text-area');

    textArea.forEach((area) => {
      area.addEventListener('change', () => {
        const result = this.tasks.filter((task) => task.id === Number(area.id));
        this.tasks[result[0].id - 1].description = area.value;
      });
    });
  }

  resetIndex = () => {
    let initialIndex = 1;
    this.tasks.forEach((task) => {
      task.id = initialIndex;
      initialIndex += 1;
    });
  }

  showCompleted = () => {
    this.tasks.forEach((task) => {
      task.completed = true;
    });
  }

  setStorage = () => {
    const formData = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', formData);
  };

  getStorage = () => {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  };
}
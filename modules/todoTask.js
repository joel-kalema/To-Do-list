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

  removeList(id) {
    this.tasks = this.tasks.filter((task) => {
      if (task.id !== id) return task;
    });
  }

  displayToDO(list) {
    list.innerHTML = '';
    this.tasks.forEach((task) => {
      const li = `<div id="${task.id}" class="list">
      <input
        type="checkbox"
        id="task"
        name="task"
        value="task"
        class="checkbox"
      />
      <input
        type="text" id="text-area" name="task" value="${task.description}" />
      <button class="delete">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>`;
      list.innerHTML += li;
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
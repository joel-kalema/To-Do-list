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

  removeBook(id) {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      }
    });
  }

  displayToDO(list) {
    list.innerHTML = '';
    this.tasks.forEach((task) => {
      const li = `<div class="list">
      <input
        type="checkbox"
        id="task"
        name="task"
        value="task"
        class="checkbox"
      />
      <div class="text-area">${task.description}</div>
      <i class="fa fa-trash-o delete" aria-hidden="true"></i>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>`;
      list.innerHTML += li;
    });
  }

  setStorage = () => {
    const formData = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', formData);
  };

  getStorage = (key) => {
    this.tasks = JSON.parse(localStorage.getItem(key));
    return this.tasks;
  };
}
import TodoList from './TodoTask.js';

describe('my TodoList class ', () => {
  let kk;
  beforeEach(() => {
    kk = new TodoList();
  })
  test("add a new task", () => {
    let lengthArry = kk.tasks.length;
    kk.addTask("add the task");
    expect(kk.tasks).toHaveLength(++lengthArry);
  });
  
  test("remove a task", () => {
    let lengthArry = kk.tasks.length;
    kk.removeTask(1);
    expect(kk.tasks).toHaveLength(--lengthArry);
  });
});

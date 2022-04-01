import TodoList from './TodoTask.js';

describe('my TodoList class ', () => {
  let kk;
  beforeEach(() => {
    kk = new TodoList();
  });
  test('add a new task', () => {
    const lengthArry = kk.tasks.length;
    kk.addTask('add the task');
    expect(kk.tasks).toHaveLength(lengthArry + 1);
  });
  test('remove a task', () => {
    kk.addTask('add the task');
    const lengthArry = kk.tasks.length;
    kk.removeList(1);
    expect(kk.tasks).toHaveLength(lengthArry - 1);
  });
});

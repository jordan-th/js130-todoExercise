const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("list has a size of three", () => {
    expect(list.size()).toBe(3);
  });

  test("toArray returns a shallow copy todos array", () => {
    expect(list.toArray()).toEqual(list.todos);
    expect(list.toArray()).not.toBe(list.todos);
  });

  test("calling first returns the first item on the todo item", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("itemAt takes an idx and returns the todo", () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt(4)).toThrow(ReferenceError);
  });

  test("markDoneAt works", () => {
    list.markDoneAt(0);
    expect(todo1.done).toBe(true);
    expect(() => list.markDoneAt(4)).toThrow(ReferenceError);
  });

  test("removeAt", () => {
    list.removeAt(1);
    expect(list).not.toContain(todo2);
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
  });

  test("forEach", () => {
    let example = [];
    list.forEach(elem => example.push(elem));

    expect(example).toContain(todo1);
    expect(example).toContain(todo2);
    expect(example).toContain(todo3);
  })

  test("filter filters", () => {
    todo1.done = true;
    let example = list.filter(elem => elem.done);

    expect(example.todos).toEqual([todo1]);
  })
});
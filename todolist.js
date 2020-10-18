const Todo = require('./todo.js');
class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(item) {
    if (!(item instanceof Todo)) {
      throw new TypeError("can only add todo objects")
    }

    this.todos.push(item);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(idx) {
    this._validateIndex(idx);
    return this.todos[idx];
  }

  _validateIndex(idx) {
    if (!(idx in this.todos)) {
      throw new ReferenceError(`invalid index: ${idx}`);
    }
  }

  markDoneAt(idx) { 
    this.itemAt(idx).markDone();
  }

  markUndone(idx) {
    this.itemAt(idx).markUndone();
  }

  isDone() {
    return this.todos.every(item => item.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) { 
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    return `---- ${this.title} ----\n${this._compileStrings()}`;
  }

  _compileStrings() {
    return this.todos.map(itemObj => itemObj.toString()).join(`\n`);
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    let doneTasks = new TodoList(this.title);
    this.forEach(task => {
      if (callback(task)) {
        doneTasks.add(task);
      }
    })
    return doneTasks;
  }

  findByTitle(title) {
    return this.filter(task => task.getTitle() === title).first();
  }

  allDone() {
    this.filter(task => task.isDone());
  }

  allNotDone() {
    this.filter(task => !task.isDone());
  }

  markDone(title) {
    let item = this.findByTitle(title);
    if (item instanceof Todo) {
      markDone();
    };
  }

  markAllDone() {
    this.forEach(task => task.markDone());
  }

  markAllUndone() {
    this.forEach(task => task.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

module.exports = TodoList;
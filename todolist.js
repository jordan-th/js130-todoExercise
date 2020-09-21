//Each instance of a "todo" will have two own properties: title (string) and done (boolean)
//it will have access to methods toString, markDone, markUndone, isDone, and getTitle
class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.done ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

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

  markDone(idx) { 
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

  removeAt() { 
    //removes the Todo object with the specified index number. It returns a 
    //the deleted Todo object. It raises an error if the index is omitted or invalid.
    
  }
}

let list = new TodoList('name')
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
console.log(list.itemAt(0));

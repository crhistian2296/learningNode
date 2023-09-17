const { v4: uuidv4 } = require('uuid');
const { Todo } = require('./todo');
const fs = require('fs');

/**_list:
 * {'uuid-1234-1234-2: {id: 12, desc:'asdfa', complete: true}'}
 */
class TodoList {
  constructor() {
    this._list = {};
  }

  get listLog() {
    const keyList = [];

    Object.keys(this._list).forEach((key) => keyList.push(this._list[key]));

    return keyList;
  }

  get printTodos() {
    console.log();
    this.listLog.forEach((todo, i) => {
      const index = String(i + 1);
      const { desc, complete } = todo;
      const print = `${index.magenta}. ${desc}:: ${complete ? 'complete'.green : 'incomplete'.red}`;
      console.log(print);
    });
  }

  loadTodos(db = []) {
    db.forEach((todo) => (this._list[todo.id] = todo));
  }

  createTodo(desc = '') {
    const newTodo = new Todo();
    newTodo.desc = desc;
    this._list[newTodo.id] = newTodo;
  }
}

module.exports = { TodoList };
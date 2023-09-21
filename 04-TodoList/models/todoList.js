const { Todo } = require('./todo');

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

  deleteTodo(id = '') {
    if (this._list[id]) delete this._list[id];
  }

  checkTodo(list = []) {
    for (const todo of this.listLog) {
      if (!list.includes(todo.id)) todo.complete = null;
    }
    list.forEach((todoID) => {
      if (todoID in this._list && this._list[todoID]['complete'] === null)
        this._list[todoID]['complete'] = new Date().toISOString();
    });
  }

  printTodos(list = this.listLog) {
    console.log();
    list.forEach((todo, i) => {
      const index = String(i + 1);
      const { desc, complete } = todo;
      const print = `${index.magenta}. ${desc} :: ${complete ? complete.green : 'incomplete'.red}`;
      console.log(print);
    });
  }

  /**
   * A funtion that prints only one type of Todos. Only acept 'complete' or 'incomplete' as params.R
   * @param {String} typeList complete/incomplete
   * @returns void
   */
  printCompleteIncomplete(typeList = 'complete') {
    if (typeList !== 'complete' && typeList !== 'incomplete') {
      console.log('Invalid argument');
      return null;
    }
    if (typeList === 'complete') typeList = true;
    if (typeList === 'incomplete') typeList = false;

    const filteredList = this.listLog.filter((todo) => {
      let { complete } = todo;
      complete = Boolean(complete);
      return (complete && typeList) || (!complete && !typeList);
    });
    this.printTodos(filteredList);
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

const { v4: uuidv4 } = require('uuid');

/**
 * Recieves a task
 * @param {String} description
 */
class Todo {
  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.complete = null;
  }
}

module.exports = { Todo };

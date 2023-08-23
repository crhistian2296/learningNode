const { v4: uuidv4 } = require('uuid');

/**_list:
 * {'uuid-1234-1234-2: {id: 12, desc:'asdfa', complete: true}'}
 */
class Todos {
  constructor() {
    this._list = {};
  }
}

module.exports = { Todos };

require('colors');

const { saveToDB, readtoDB } = require('./helpers/dbInteractions');
const { inquirerMenu, pause, readInput } = require('./helpers/inquierer');
const { Todo } = require('./models/todo');
const { TodoList } = require('./models/todoList');
// const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
  let opt = '';
  const todoList = new TodoList();

  const db = readtoDB();

  if (db) todoList.loadTodos(db);

  do {
    opt = await inquirerMenu();
    // console.log(opt);

    switch (opt) {
      case '1':
        const desc = await readInput('Description: ');
        todoList.createTodo(desc);
        console.log(desc);
        break;
      case '2':
        todoList.printTodos;
        break;
      case '0':
        console.log('\nBye!!\n'.green);
        break;
    }

    saveToDB(JSON.stringify(todoList.listLog, null, 2));

    // const todoList = new TodoList();
    // const todo = new Todo('Eat with Karen');
    // console.log(todo);

    if (opt !== '0') await pause();
  } while (opt !== '0');
};

main();

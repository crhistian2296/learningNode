require('colors');

const { saveToDB, readtoDB } = require('./helpers/dbInteractions');
const {
  inquirerMenu,
  pause,
  readInput,
  deleteAndPrint,
  confirm,
  todoListCheck,
} = require('./helpers/inquierer');
const { Todo } = require('./models/todo');
const { TodoList } = require('./models/todoList');
// const { showMenu, pause } = require('./helpers/messages');

const main = async () => {
  let opt = '';
  const todoList = new TodoList();

  // load data (pesistence)
  const db = readtoDB();
  if (db) todoList.loadTodos(db);

  do {
    // show menu
    opt = await inquirerMenu();

    switch (opt) {
      case '1': //add todo
        const desc = await readInput('Description: ');
        todoList.createTodo(desc);
        console.log(desc);
        break;
      case '2': //show todos
        todoList.printTodos();
        break;
      case '3': //show complete todos
        todoList.printCompleteIncomplete('complete');
        break;
      case '4': //show incomplete todos
        todoList.printCompleteIncomplete('incomplete');
        break;
      case '5': //check todos
        const ids = await todoListCheck(todoList.listLog);
        todoList.checkTodo(ids);
        break;
      case '6': //delete todos
        const id = await deleteAndPrint(todoList.listLog);
        if (id === '0') break;

        const ok = await confirm('You sure?');
        if (!ok) break;

        todoList.deleteTodo(id);
        console.log('Todo deleted');
        break;
      case '0': //exit
        console.log('\nBye!!\n'.green);
        break;
    }
    // save changes
    saveToDB(JSON.stringify(todoList.listLog, null, 2));

    if (opt !== '0') await pause();
  } while (opt !== '0');
};

main();

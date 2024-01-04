const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let todos = [];
let continueLoop = true;
// UI in terminal
/* ask user to add or pop a todo item
on enter show whole list
ask to add or pop an item*/
function getUserInput(question) {
    return new Promise((resolve) => {
      rl.question(question, (userInput) => {
        resolve(userInput.toLowerCase());
      });
    });
  }

  async function main() {
    while (continueLoop) {
      console.log("Press 'I' to insert, 'D' to delete the first added todo item, or 'X' to exit");
  
      const sanitizedInput = await getUserInput('Enter something: ');
  
      switch (sanitizedInput) {
        case 'i':
          const todoItem = await getUserInput('Enter todo item: ');
          todos.push(todoItem);
          console.log('Todo added:', todoItem);
          console.log('Todos:', todos);
          break;
        case 'd':
          console.log('Done todo item:', todos.pop());
          console.log('Todos:', todos);
          break;
        case 'x':
          console.log('Exiting.');
          continueLoop = false;
          break;
        default:
          console.log('Invalid input. Try again.');
          break;
      }
    }
  
    rl.close();
  }
  
  main();

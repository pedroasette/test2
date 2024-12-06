const todoList = [{
  name: 'make dinner', 
  dueDate: '2022-12-22'
}, {
   name: 'wash dishes',
   dueDate: '2022-12-22'
  }];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    const name = todoObject.name;
    const date = todoObject.dueDate;
    const HTML = `<p>
    ${name} ${date}
      <button onclick="
       todoList.splice(${i}, 1);
       renderTodoList();
      ">delete</button>
      </p>`;
    todoListHTML += HTML;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(`.js-name-input`);
  const name = inputElement.value;
  
  const dateInput = document.querySelector(`.js-date-input`);
  const dueDate = dateInput.value;

  todoList.push({
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}


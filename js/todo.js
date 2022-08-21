const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const deleteTodo = e => {
  const li = e.target.parentElement;
  li.remove();
};

const paintTodo = newTodo => {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
};

const handleTodoSubmit = e => {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = '';
  paintTodo(newTodo);
};

todoForm.addEventListener('submit', handleTodoSubmit);

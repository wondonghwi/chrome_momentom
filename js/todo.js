const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

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
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
};

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodo = JSON.parse(savedTodos);
  todos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}

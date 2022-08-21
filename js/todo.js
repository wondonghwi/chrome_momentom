const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let todoArray = [];

const saveTodos = todos => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const deleteTodo = e => {
  const li = e.target.parentElement;
  li.remove();

  const getTodos = localStorage.getItem(TODOS_KEY);
  const filteredTodo = JSON.parse(getTodos).filter(todo => todo.id !== parseInt(li.id, 10));
  saveTodos(filteredTodo);
};

const paintTodo = newTodo => {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
};

const handleTodoSubmit = e => {
  e.preventDefault();

  const inputValue = todoInput.value;
  todoInput.value = '';

  const newTodo = {
    id: Date.now(),
    text: inputValue,
  };

  todoArray.push(newTodo);
  paintTodo(newTodo);

  saveTodos(todoArray);
};

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodo = JSON.parse(savedTodos);
  todoArray = parsedTodo;

  parsedTodo.forEach(paintTodo);
}

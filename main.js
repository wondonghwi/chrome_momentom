const loginForm = document.querySelector('#login-form');
const name = document.querySelector('.name');
const logout = document.querySelector('.logout');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'usernameKey';

const savedUsername = localStorage.getItem(USERNAME_KEY);

const removeNameAndLogoutClassName = () => {
  name.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
};

const onLoginSubmit = e => {
  e.preventDefault();
  const username = e.target.inputName.value;

  name.textContent = username;
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  removeNameAndLogoutClassName();
};

const onLogOut = () => {
  localStorage.removeItem(USERNAME_KEY);

  logout.classList.add(HIDDEN_CLASSNAME);
  name.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
};

if (savedUsername) {
  removeNameAndLogoutClassName();
  name.textContent = savedUsername;
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener('submit', onLoginSubmit);
}

logout.addEventListener('click', onLogOut);

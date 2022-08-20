const loginForm = document.querySelector('#login-form');
const username = loginForm.querySelector('input[name="username"]');
const title = document.querySelector('.title');
const logout = document.querySelector('.logout');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'usernameKey';

const savedUsername = localStorage.getItem(USERNAME_KEY);

const removeNameAndLogoutClassName = () => {
  title.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
};

const paintingUsername = username => {
  title.textContent = username;
};

const onLoginSubmit = e => {
  e.preventDefault();
  const username = e.target.username.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintingUsername(username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  removeNameAndLogoutClassName();
};

const onLogOut = () => {
  username.value = '';

  localStorage.removeItem(USERNAME_KEY);

  logout.classList.add(HIDDEN_CLASSNAME);
  title.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
};

if (savedUsername) {
  removeNameAndLogoutClassName();
  paintingUsername(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener('submit', onLoginSubmit);
}

logout.addEventListener('click', onLogOut);

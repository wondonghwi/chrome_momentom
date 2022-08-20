const clock = document.querySelector('#clock');

const getClock = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const getTime = `${hours}:${minutes}:${seconds}`;
  clock.innerText = getTime;
};

window.addEventListener('load', getClock);
setInterval(getClock, 1000);

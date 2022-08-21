const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const randomImageNumber = Math.floor(Math.random() * images.length);

const chosenImage = images[randomImageNumber];

const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

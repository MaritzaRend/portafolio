

const PI = 3.1416;

let areaCirculo ;



let radio = 4;
areaCirculo = PI *(radio* radio);
document.write(areaCirculo);

radio= 10;
areaCirculo = PI *(radio* radio);
document.write(areaCirculo);

const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
});

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1100)
  .typeString('Maritza Rendon')
  .pauseFor(300)
  .deleteChars(10)
  .start();
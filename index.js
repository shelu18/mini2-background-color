
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
var audio1 = new Audio('musics/audio1.wav');
var audio2 = new Audio('musics/audio2.wav');
var audio3 = new Audio('musics/audio3.wav');
var audio4 = new Audio('musics/audio4.wav');


buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      audio1.play();
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      audio2.play();
    }
    if (e.target.id === 'blue') {
     
      body.style.backgroundColor = e.target.id;
      audio3.play();
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      audio4.play();
    }
    
  });
});
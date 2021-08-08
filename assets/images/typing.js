var i = 0;
var txt = document.getElementById("txt-rotate").data-rotate;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed-output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
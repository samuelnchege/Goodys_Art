// for typewiter
var goody = 0;
var txt = 'Uchechukwu Goodness Wisdom,'; /* The text */
var txtspeed = 120; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    var char = txt.charAt(goody);
    document.getElementById("goody").innerHTML += char;
    goody++;
    setTimeout(typeWriter, txtspeed);
  }
  setTimeout(typeWriter, 4300);

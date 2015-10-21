/*
 * Alicht
 * https://github.com/archost/alicht
 * Copyright (c) 2015 William Dorffer [:schoewilliam]
 * MIT License
 */

function fadeOut(el) {
  el.style.opacity = 1;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity - (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
    else {
      el.style.display = 'none';
    }
  };

  tick();
}

var dismissables = document.querySelectorAll(".dismissable");
for (var i = 0; i < dismissables.length; i++) {
  thelink = document.createElement("a");
  thelink.className += ' dismissbtn';

  thelink.onclick = function() {
    fadeOut(this.parentNode);
  }

  dismissables[i].insertBefore(thelink, dismissables[i].firstChild);
}

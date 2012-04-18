autoAdvanceTimeout = null;
autoAdvanceDuration = 10000;

autoAdvance = function() {
 if(w3c_slidy.slide_number < w3c_slidy.slides.length - 1) {
  w3c_slidy.next_slide(true);
  autoAdvanceTimeout = setTimeout(autoAdvance, autoAdvanceDuration);
 } else {
  w3c_slidy.first_slide();
  autoAdvanceTimeout = setTimeout(autoAdvance, autoAdvanceDuration*3);
 }
 return w3c_slidy.cancel(event);
};

disableAutoAdvance = function() {
 if(autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
 autoAdvanceTimeout = null;
};

enableAutoAdvance = function() {
 autoAdvanceTimeout = setTimeout(autoAdvance, autoAdvanceDuration);
};

onAutoAdvanceKeyPress = function(event) {
 // disable on any keypress (reload to restart autoAdvance)
 alert("Stopping auto advance");
 if(autoAdvanceTimeout) {
  disableAutoAdvanceTimeout();
 }
}

document.addEventListener("keypress", onAutoAdvanceKeyPress, false);

enableAutoAdvance();

// menu variables
var navMain = document.querySelector(".site-list");
var navToggle = document.querySelector(".site-list__toggle");
// modal window variables
var button = document.querySelectorAll(".button--modal");
var modal = document.querySelector(".modal");
var bgLayer = document.querySelector(".bg-layer");

//menu action

navMain.classList.remove("site-list--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("site-list--closed")) {
    navMain.classList.remove("site-list--closed");
    navMain.classList.add("site-list--opened");
    navToggle.classList.remove("logo__toggle--open");
    navToggle.classList.add("logo__toggle--close");
  } else {
    navMain.classList.add("site-list--closed");
    navMain.classList.remove("site-list--opened");
    navToggle.classList.remove("logo__toggle--close");
    navToggle.classList.add("logo__toggle--open");
  }
});

//modal action

for (var i = 0; i < button.length; i++) {
  var buttonCurrent = button[i];
  buttonCurrent.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal--disable");
    bgLayer.classList.remove("bg-layer--disable");
  });
}

bgLayer.addEventListener("click", function(evt) {
  evt.preventDefault();
  bgLayer.classList.add("bg-layer--disable");
  modal.classList.add("modal--disable");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!bgLayer.classList.contains("bg-layer--disable")) {
      bgLayer.classList.add("bg-layer--disable");
      modal.classList.add("modal--disable");
    }
  }
});

var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

//sub-nav button clicks and image display
//Hides the sub-nav from view. 

$("document").ready(function() {

  $( ".sub-articles" ).click(function(){
    $( ".sub-nav ul" ).toggleClass("articles");
    $( ".sub-nav ul" ).toggleClass("articles-style");
  });

});


//http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
    console.log('close it!');
    document
      .querySelector('body')
      .classList
      .toggle('nav-open');
});

var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
  // to capture IE10
  vidFade();
});

pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
  if (vid.paused) {
vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
  }
})






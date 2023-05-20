AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  //data-aos="fade-up"

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// Get Modal
var modal = document.getElementById('myModal');
    
// Get pseudoelement to open Modal
var btn = document.getElementById("sized");

// Get the <span> element to close Modal
var span = document.getElementsByClassName("close")[0];

// When user clicks button, open Modal
btn.onclick = function() {
   modal.style.display = "block";
   };

// When user clicks Close (x), close Modal
span.onclick = function() {
   modal.style.display = "none";
   };

// When user clicks anywhere outside of the Modal, close Modal
 window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
       }
    };



let btnselector = document.getElementsByClassName(".navbar-toggler-icon")


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
  var menulist = document.getElementById("menuList");
  menulist.style.maxHeight = "0px";


  function togglemenu(){
    if(menulist.style.maxHeight == "0px")
  {
    menulist.style.maxHeight = "130px";
  }
  else{
      menulist.style.maxHeight = "0px";
  }
  }

  
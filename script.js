
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var whiteSwatch = document.getElementById("white");
var image = document.getElementById("product-photo");


var price = document.getElementById("price");


yellowSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatchyellow.jpg";
  price.innerHTML = "$2.01";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});


yellowSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});


blueSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatchblue.jpg";
  price.innerHTML = "$1.99";
  price.style.color = "black";
});

blueSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});


redSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatchred.jpg";
  price.innerHTML = "$2.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});

whiteSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatchpink.jpg";
  price.innerHTML = "$1.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});

redSwatch.addEventListener("mouseover", function() {
  resetPrice();
});

// Get the swatches and the image element
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var image = document.getElementById("product-photo");

// Get the price element
var price = document.getElementById("price");

// Add an event listener to the yellow swatch that shows the lemon flavor and updates the price when the swatch is hovered over
yellowSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatch-lemon@2x.jpg";
  price.innerHTML = "$0.99";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});

// Add an event listener to the yellow swatch that resets the price when the swatch is not hovered over
yellowSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Add an event listener to the blue swatch that shows the blue raspberry flavor and updates the price when the swatch is hovered over
blueSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatch-blue-raspberry@2x.jpg";
  price.innerHTML = "$1.99";
  price.style.color = "black";
});

// Add an event listener to the blue swatch that resets the price when the swatch is not hovered over
blueSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Add an event listener to the red swatch that shows the cherry flavor and updates the price when the swatch is hovered over
redSwatch.addEventListener("mouseover", function() {
  image.src = "sourpatch-cherry@2x.jpg";
  price.innerHTML = "$0.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});

// Add an event listener to the red swatch that resets the price when the swatch is not hovered over
redSwatch.addEventListener("mouseover", function() {
  resetPrice();
});

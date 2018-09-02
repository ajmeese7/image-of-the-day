// https://www.nasa.gov/multimedia/imagegallery/iotd.html
function nasaParent() {
  // NOTE: After NatGeo works, use the same scraping technique here
  var url = "";
  nasa(url);
}

// IDEA: Decompose further?
function nasa(url) {
  var image = document.getElementById("image");
  image.src = url;
  image.height = screen.height;

  $.ajax({
    url: url,
    success: function(result) {

    }
  });
}

function nasa() {
  var url = "http://dynamic-page-retrieval.herokuapp.com/scrape?URL=https://www.nasa.gov/multimedia/imagegallery/iotd.html";

  // Get HTML from page
  $.get(url, function(res) {
      // Loop through elements you want to scrape content from
      var gallery = $(res.html).find("#gallery-list");
      var imageOfDay = $(gallery).children(0).children(0).children(0).children(0).children(0)[0];

      var source = $(imageOfDay).attr("src");
      source = source.slice(source.indexOf("image/") + 6); // Gets everything after "image/" in the URL
      source = "https://www.nasa.gov/sites/default/files/thumbnails/image/" + source; // Makes it show the full res image

      var image = document.getElementById("image");
      image.src = source;
      image.height = screen.height;
  });
}

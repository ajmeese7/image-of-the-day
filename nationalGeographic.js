function nationalGeographic() {
  var url = "http://dynamic-page-retrieval.herokuapp.com/scrape?URL=https://www.nationalgeographic.com/photography/photo-of-the-day/";

  // Get HTML from page
  $.get(url, function(res) {
      var imageOfDay = $(res.html).find("picture")[0].firstChild.attributes[0].nodeValue; // Navigate the HTML tree
      imageOfDay = imageOfDay.split(',')[7].substr(1).slice(0, -5); // Get high res URL, remove leading whitespace, remove trailing resolution notation

      var image = document.getElementById("image");
      image.src = imageOfDay;
      image.width = screen.width;
      //image.height = screen.height;
  });
}

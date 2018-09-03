function nasa() {
  var url = "https://www.nasa.gov/multimedia/imagegallery/iotd.html";

  /*$.ajax({
    url: url,
    success: function(result) {
      var image = document.getElementById("image");
      //image.src = result;
      image.height = screen.height;
    }
  });*/

  var source = "https://www.nasa.gov/sites/default/files/styles/full_width_feature";

  // Get HTML from page
  $.get(url, function(html) {
    // Loop through elements you want to scrape content from
    var code = $.parseHTML(html);
    console.log(html);
    console.log(code);

    $(html).find("#gallery-list").children(".image").first().each(function() {
      var source = "https://www.nasa.gov";
      source += $(this).attr("src");

      var image = document.getElementById("image");
      image.src = source;
      image.height = screen.height;
    })
  });
}

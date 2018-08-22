// NOTE: Does NOT work yet. Not even close
function nationalGeographic() {
  var url = "https://www.nationalgeographic.com/photography/photo-of-the-day/";
  $.ajax({
    url: url,
    success: function(result) {
      var image = document.getElementById("image");
      /*image.src = result.url;*/
      image.height = screen.height;
    }
  });
}

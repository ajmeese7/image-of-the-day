// NOTE: Does NOT work yet. Not even close
function nationalGeographic() {
  var url = "https://www.nationalgeographic.com/photography/photo-of-the-day/";
  $.get(url, function(result) {
    var image = document.getElementById("image");
    /*image.src = result.url;*/
    image.height = screen.height;

    // NOTE: After redirect, the image src is here:
    // $("div.primary_photo img").attr("src");
    // According to the unofficial NodeJS API
  });
}

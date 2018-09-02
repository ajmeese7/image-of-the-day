function nationalGeographic() {
  var url = encodeURIComponent("https://www.nationalgeographic.com/photography/photo-of-the-day/");
  var settings = { "async": true, "crossDomain": true, "url": "https://api.urlmeta.org/?url=" + url, "method": "GET", };
  $.ajax(settings).done(function (response) {
    var image = document.getElementById("image");
    image.src = response.meta.image;
    image.height = screen.height;
  });
}

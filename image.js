//updateWallpaper();
nasa();
setTimeout(nasa, 3600000); // Runs every hour

/*
var source = "NASA";
function updateWallpaper() {
  if (source == "NASA") {
    nasa();
  } else if (source == "NatGeo") {
    nationalGeographic();
  }
}
*/


function nasa() {
  var url = "https://api.nasa.gov/planetary/apod?api_key=TyZmQlFdDkH1zJXhmMDnPKZxdF3yJLL0JF8ov7ur";
  $.ajax({
    url: url,
    success: function(result) {
      // Currently ignoring days with videos
      if (result.media_type == "image") {
        var image = document.getElementById("image");
        image.src = result.url;
        image.height = screen.height;
      } else {
        // TODO: Add `go back` setting for when media is video
      }
    }
  });
}

function nationalGeographic() {
  var url = "https://www.nationalgeographic.com/photography/photo-of-the-day/";
  $.ajax({
    url: url,
    success: function(result) {
      document.getElementById("container").innerHTML += result;
    }
  });
}



/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        /*if (properties.source) {
            var source = properties.source.value;
            if (source === 1) {
              nasa();
            } else if (source === 2) {
              nationalGeographic();
            }
        }*/
    }
};

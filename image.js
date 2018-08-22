//updateWallpaper();
nasaParent();
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

// IDEA: Decompose into different files?
function nasaParent() {
  var url = "https://api.nasa.gov/planetary/apod?api_key=TyZmQlFdDkH1zJXhmMDnPKZxdF3yJLL0JF8ov7ur";
  nasa(url);
}

function nasa(url) {
  $.ajax({
    url: url,
    success: function(result) {
      // Currently ignoring days with videos (going back to a day with an image)
      if (result.media_type == "image") {
        var image = document.getElementById("image");
        image.src = result.url;
        image.height = screen.height;
      } else {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month.toString().length < 2) {
          // Sets data in NASA-specied format
          month = "0" + month;
        }
        var day = date.getDate();

        // SUBSTRING END IS EXCLUSIVE, NOT INCLUSIVE!
        if (url.length == 84) { // If first retry
          var parameter = "&date=" + year + "-" + month + "-" + day;
          url += parameter;
        } else { // If greater than first retry
          // Substrings picks apart previous URL for previous date used
          day = url.substring(98);
          day--;
          if (day == 0) {
            month = url.substring(95, 97);
            month--;
            // Gets last day of month:
            // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
            day = new Date(year, parseInt(month), 0);

            if (month == 0) {
              year = url.substring(90, 94);
              year--;       // Previous year
              month = "12"; // December
              day = "31";   // 31st
            }
          }

          var parameter = "&date=" + year + "-" + month + "-" + day;
          url = url.substring(0, 84) + parameter;
        }

        nasa(url);
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

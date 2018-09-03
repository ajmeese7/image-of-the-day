
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.source) {
            var source = properties.source.value;
            if (source === 1) {
              astronomyParent();
            } else if (source === 2) {
              nasa();
            } else if (source === 3) {
              nationalGeographic();
            }
        }
    }
};

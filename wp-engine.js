
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.source) {
            var source = properties.source.value;
            if (source === 1) {
              nasaParent();
            } else if (source === 2) {
              nationalGeographic();
            }
        }
    }
};

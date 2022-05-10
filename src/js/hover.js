function highlightAllOnMouseover(className){
    $(className).mouseover(function() {
  $(className).css("opacity", 0.3); 
  $(className).css("opacity", 1);
}).mouseleave(function() { 
    $(className).css("opacity", 0.3);
});
}
highlightAllOnMouseover(".first-icons");
highlightAllOnMouseover(".second-icons");
highlightAllOnMouseover(".third-icons");



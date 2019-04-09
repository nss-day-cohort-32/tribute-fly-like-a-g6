// $('.robin-png').hide();

// $( ".summary-image" ).hover(function() {
//     $( '.robin-png' ).toggle();
//   });

$(document).ready(function(){
	randomlyMoveImage();
});

function randomlyMoveImage(){
    var width = $(document).width();
    var height = $(document).height();
    
    var x = Math.floor((Math.random() * width) + 1);
    var y = Math.floor((Math.random() * height) + 1);
      $( ".robin-png" ).animate({
    left: x,
          top: y
  }, 0, function() {
    // Animation complete.
  });

    setTimeout(randomlyMoveImage, 2500);
}
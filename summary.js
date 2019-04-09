
// MAKES ROBIN HEADS APPEAR
$( ".button" ).click(function() {
    $('.summary-portrait').ready(function(){
        randomlyMoveImage();
    });

    function randomlyMoveImage(){
        var width = $('.summary-portrait').width();
        var height = $('.summary-portrait').height();
        
        var x = Math.floor((Math.random() * width) + 1);
        var y = Math.floor((Math.random() * height) + 1);
        $( "#robin-png" ).animate({
        left: x,
            top: y
    }, 0, function() {
        // Animation complete.
    });

        setTimeout(randomlyMoveImage, 2500);
    }
});
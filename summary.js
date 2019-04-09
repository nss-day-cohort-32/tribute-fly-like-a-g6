
// var robinHead = document.createElement("img");
// robinHead.src = '/images/Robin.png';

// $( ".button" ).click(function() {

// });


// $('.robin-png').hide();

// $( ".summary-image" ).hover(function() {
//     $( '.robin-png' ).toggle();
//   });

// FIRST JQUERYYYYY
// $(document).ready(function(){
// 	randomlyMoveImage();
// });

// function randomlyMoveImage(){
//     var width = $(document).width();
//     var height = $(document).height();
    
//     var x = Math.floor((Math.random() * width) + 1);
//     var y = Math.floor((Math.random() * height) + 1);
//       $( ".robin-png" ).animate({
//     left: x,
//           top: y
//   }, 0, function() {
//     // Animation complete.
//   });

//     setTimeout(randomlyMoveImage, 2500);
// }

// // SECOND JQUERYYYYY
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
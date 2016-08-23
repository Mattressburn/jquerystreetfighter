$(document).ready(function() {
    $('.ryu').mouseenter(function() {
       $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
        
    })

    .mousedown(function() {
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show()
  			.animate(
    		{'left': '1020px'},
    		500,
    		function() {
      			$('.hadouken').hide();
      			$('.hadouken').css('left', '630px');
    	})
  	})
     .mouseup(function() {
    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
    });
    

     $("body").keydown(function(event) {
    if (event.which == 88) {
        event.preventDefault()
        playCool();

            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
        }
    });
    $("body").keyup(function(event) {
        $('#cool')[0].pause();
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();


    });
    

    $('#cool')[0].volume = 0.5;
    $('#cool')[0].load();
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
});

function playHadouken() {
    $('#hadouken-sound')[0].play();
}

function playCool() {
    $('#cool')[0].play();
}
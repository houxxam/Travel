$(document).ready(function(){
    //slick slider
    $('.level-slider').slick({
      dots : true,
      slidesToShow : 2,
      slidesToScroll: 1,
      arrows : false,
      arrows : true,
      autoplay: true,
    });
    //DatePicker
    $( function() {
        $( "#input-check-in" ).datepicker();
    } );
    $( function() {
        $( "#input-check-out" ).datepicker();
    } );

    function videoToggle(){
        video = $('.level-video').get(0);
        if(video.paused){
            video.play();
            $('.video-control-play').hide();
            $('.video-control-pause').show();
        }else{
            video.pause();
            $('.video-control-play').show();
            $('.video-control-pause').hide();
        }
    }
    $('.video-control-play').click(()=>{
        videoToggle();
    });
    $('.video-control-pause').click(()=>{
        videoToggle();
    });
});
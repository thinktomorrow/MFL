$(document).on('click', '.MFL', function(e){
    e.preventDefault();
    togglePlay();
});

var playing = 0;
function togglePlay(){
    if(playing == 0){
        play();
        playing++;
        return playing;
    }else{
        stop();
        playing--;
        return playing;
    }
}

 function play(){
    $('#audio').get(0).play();
 }
 function stop(){
     $('#audio').get(0).pause();
 }
 $('.key a').click(function(e){
    $(this).toggleClass('activate');
    checkAll();
 });

var checkAll = function() {
    var allDivs = $(".key a");
    var classedDivs = $(".key a.activate");
    var allDivsHaveClass = (allDivs.length === classedDivs.length);

    if (allDivsHaveClass) {
        $('.sliding-doors').addClass('opened');
        $('body').addClass('warning');
        // Slight delay
        setTimeout(function(){
            $('.grabber').addClass('glitch');
            $('#launchtime').css('z-index', '5');
            $('#launchtime').css('background-color', '#191919');
            isTheSafetyReallyOff();
        }, 1300);
    }else{
        $('body').removeClass('warning');
        $('.sliding-doors').removeClass('opened');
        $('.grabber').removeClass('glitch');
        $('#launchtime').css('z-index', '-5');
        stop();
        playing = 0;
        return playing;
    }
}

function isTheSafetyReallyOff(){
    var allDivs = $(".key a");
    var classedDivs = $(".key a.activate");
    var allDivsHaveClass = (allDivs.length === classedDivs.length);
    if(!allDivsHaveClass){
        $('.sliding-doors::before').css('z-index', '6');
        $('.sliding-doors::after').css('z-index', '5');
         $('#launchtime').css('z-index', '-1');
    }
}

var jsConfetti = new JSConfetti();

var clicked = false;

$(document).on('click', '.MFL', function(e){

    // Do not click more than once dog.
    if(clicked) return;
    clicked = true;

    e.preventDefault();
    $('#audio').get(0).play();

    setTimeout(function(){
       $('#iframe').toggleClass('hidden');
       $('#audio').get(0).pause();
       $('#suspense').get(0).pause();

        $('#winning').get(0).play();
        sprinkleConfetti();

    },4000);
    // redirect();
});

function sprinkleConfetti()
{
    var max = 50;

    setInterval(function(){

        if(max === 0) return;
        max -= 1;
        console.log(max);

        jsConfetti.addConfetti({
            confettiNumber: Math.round(Math.random() * 300),
        });
    }, 600)

}



 function redirect(){
    var delay = 5000;
    var url = 'https://kalibermaatwerk.be'
    setTimeout(function(){ window.location = url; }, delay);
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
    setTimeout(function(){
        $('#launchtime').css('z-index', '5');
        $('.sliding-doors').css('background-color', '#191919');
        $('#suspense').get(0).play();
    }, 1300);
}else{
    $('body').removeClass('warning');
    $('#launchtime').css('z-index', '-5');
    $('.sliding-doors').removeClass('opened');
    $('.sliding-doors').css('background-color', 'transparent');
    $('#suspense').get(0).pause();
    stop();
}
};

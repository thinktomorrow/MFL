$(document).on('click', '.MFL', function(e){
    e.preventDefault();
    play();
    redirect();
});

 function play(){
    $('#audio').get(0).play();
 }
 function stop(){
     $('#audio').get(0).pause();
 }

 function redirect(){
    var delay = 12000;
    var url = 'https://samensmaakmaken.be'
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
    }, 1300);
}else{
    $('body').removeClass('warning');
    $('#launchtime').css('z-index', '-5');
    $('.sliding-doors').removeClass('opened');
    $('.sliding-doors').css('background-color', 'transparent');
    stop();
}
};

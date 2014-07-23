$( document ).ready(function(){
    var backselect = Math.floor((Math.random() * 3) + 1);
    $('html').css('background-image', 'url(/IMG/BACKGROUND_'+backselect+'.jpg)', 'no-repeat center center fixed');
    $('html').css('background-size', 'cover');
});
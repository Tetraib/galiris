$( document ).ready(function(){
    //Random pick of background image
    var backselect = Math.floor((Math.random() * 11) + 1);
    $('html').css('background-image', 'url(/IMG/BACKGROUND_'+backselect+'.jpg)', 'no-repeat center center fixed');
    $('html').css('background-size', 'cover');
});
$(document).ready(function() {
    //Random pick of background image
    var dateObj = new Date();
    var day = dateObj.getUTCDate();
    var backselect = day % 10;
    $('html').css('background-image', 'url(/IMG/BACKGROUND_' + backselect + '.jpg)', 'no-repeat center center fixed');
    $('html').css('background-size', 'cover');
});

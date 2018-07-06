$(function () {

    $(document).keydown(function (e) {

        if (e.which === 66) {

            e.preventDefault();

            if ($('#overlay').css('visibility') === 'hidden') {
                $('#overlay').css('visibility', 'visible');
            } else {
                $('#overlay').css('visibility', 'hidden');
            }

        }

    });

    $('body').append("<div id='overlay' style='position:fixed;top:0;right:0;bottom:0;left:0;background-color:black;z-index:1'></div>");

    $('#overlay').css('visibility', 'hidden');

    console.log("present");

});

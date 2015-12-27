/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var active = false;
var page = 1;

function DopPoleActivation() {
    if (!active) {
        $('#dop_pole').css({'display': 'block'});
        $('#dop_polebutton').css({'background-color': 'rgb(91,169,245)'});
        $('.arrow').replaceWith("<img class=\"arrow\" src=\"img/arrowdownactive.png\">");
        $('.next').css({'margin': '20px 0 0 -2px'});
        active = true;
    }
    else {
        $('#dop_pole').css({'display': 'none'});
        $('#dop_polebutton').css({'background-color': 'rgb(134,139,144)'});
        $('.arrow').replaceWith("<img class=\"arrow\" src=\"img/arrowdown.png\">");
        $('.next').css({'margin': '159px 0 0 -2px'});
        active = false;
    }
}
function dale() {
    page++;
    switch (page) {
        case 2:
            $(".first").removeClass("active");
            $(".second").addClass("active");
            break;
        case 3:
            $(".second").removeClass("active");
            $(".third").addClass("active");
            break;
        case 4:
            $(".third").removeClass("active");


            $(".fours").addClass("active");
            break;
    }


}
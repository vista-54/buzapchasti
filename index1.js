/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var active = false;
var page = 1;
var service = false;
var img = 1;
var counts = 0;
var countp = 0;
var open_page = [];
var data = {};
function  generateYears() {
    var date = new Date();
    var year = date.getFullYear();
    var start = 1980;
    var years = '';
    for (var i = year; i >= start; i--) {
        // years+="<li >"+i+"<input type=\"radio\" name=\"yearul\" value="+i+"></li>";
        years += "<li onclick=\"enter('" + i + "')\" class=\"getYear\"><a >" + i + "</a></li>";
    }
    $("#yearul").append(years);
//<a onclick=\"close()\">Отмена</a>");
}
function enter(year) {
    $("#year").val(year);
    $("#yeas_list").hide();

}
function closeform() {
    $('#yeas_list').hide();
}
function DopPoleActivation() {
    if (!active) {
        $('#dop_pole').css({'display': 'block'});
        $('#dop_polebutton').css({'background-color': 'rgb(91,169,245)'});
        $('#dop_polebutton').css({'border-top': '2px solid rgb(47,126,238)'});
        $('.arrow').replaceWith("<img class=\"arrow\" src=\"img/arrowdownactive.png\">");
        $('.next').css({'margin': '20px 0 0 -2px'});
        active = true;
    }
    else {
        $('#dop_pole').css({'display': 'none'});
        $('#dop_polebutton').css({'background-color': 'rgb(134,139,144)'});
        $('#dop_polebutton').css({'border-top': '2px solid rgb(86,82,97)'});
        $('.arrow').replaceWith("<img class=\"arrow\" src=\"img/arrowdown.png\">");
        $('.next').css({'margin': '70px 0 0 -2px'});
        active = false;
    }

    $('#Vdvc').autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc", // url-адрес
        minLength: 0 // минимальное количество для совершения запроса
    }).focus(function () {
        $(this).autocomplete('search', '')
    })

    $("#Tdvc").autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=Tdvc", // url-адрес
        minLength: 0 // минимальное количество для совершения запроса
    }).focus(function () {
        $(this).autocomplete('search', '')
    })
    $("#power").autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=power", // url-адрес
        minLength: 0 // минимальное количество для совершения запроса
    }).focus(function () {
        $(this).autocomplete('search', '')
    })
    /*
     $("#privod").autocomplete({
     source: "http://buzapchasti.ru/mobile/request.php?id=privod", // url-адрес
     minLength: 1 // минимальное количество для совершения запроса
     });
     $("#kuzov").autocomplete({
     source: "http://buzapchasti.ru/mobile/request.php?id=kuzov", // url-адрес
     minLength: 1 // минимальное количество для совершения запроса
     });
     $("#kpp").autocomplete({
     source: "http://buzapchasti.ru/mobile/request.php?id=kpp", // url-адрес
     minLength: 1 // минимальное количество для совершения запроса
     });*/
}
function dale() {
    page++;
    switch (page) {
        case 2:
            data.year = $("#year").val();
            data.marka = $("#marka").val();
            data.model = $("#model").val();
            if (data.year.length == 0) {
                $("#year").addClass("error");
                page--;
                return false;
            } else
            if (data.marka.length == 0) {
                $("#marka").addClass("error");
                page--;
                return false;
            } else
            if (data.model.length == 0) {
                $("#model").addClass("error");
                page--;
                return false;
            }

            /* data.Vdvc=$("#Vdvc").val();
             data.Tdvc=$("#Tdvc").val();
             data.power=$("#power").val();
             data.privod=$("#privod").val();
             data.kuzov=$("#kuzov").val();
             data.kpp=$("#kpp").val();
             data.kod_kuzov=$("#kod_kuzov").val();
             data.kod_dvc=$("#kod_dvc").val();
             data.kod_kpp=$("#kod_kpp").val();
             data.rinok_sbita=$("#rinok_sbita").val();*/


            $('.next').css({'margin': '70px 0 0 -2px'});
            $(".first").removeClass("active");
            $(".second").addClass("active");
            loadContent(2);
            if (open_page.indexOf(1) == -1) {
                open_page.push(1);
            }
            if (open_page.indexOf(2) == -1) {
                open_page.push(2);
            }


            break;
        case 3:
            $(".second").removeClass("active");
            $(".third").addClass("active");
            loadContent(3);
            if (open_page.indexOf(3) == -1) {
                open_page.push(3);
            }

            break;
        case 4:
            var phone = $("#phone").val();
            phonemessage(phone);
            loadContent(4);
            $(".third").removeClass("active");
            $(".fours").addClass("active");
            if (open_page.indexOf(4) == -1) {
                open_page.push(4);
            }

            break;
    }


}
function startApp() {

    $("#marka").autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=marka", // url-адрес
        minLength: 0 // минимальное количество для совершения запроса
    }).focus(function () {
        getModel();
        $(this).autocomplete('search', '')
    })
        $("#model").autocomplete({
            source: result, // url-адрес
            minLength: 0 // минимальное количество для совершения запроса
        }).focus(function () {
        $(this).autocomplete('search', '')
    });
}

function getModel() {
    var year = $('#year').val();
    var marka = $('#marka').val();
    var od = {};
    od.id = "getModel";
    od.year = year;
    od.marka = marka;
    $.get("http://buzapchasti.ru/mobile/request.php?id=getModel", od, function (result) {
        //alert( "success" );
        console.log(result);
        //  var obj=result.data;

        //  $('#content').append(obj.nametitle+"<br>"+obj.lastname+"<br>"+obj.firstname+"<br><button>Acept</button><button onclick=\"Reject()\">Reject</button>");
    }, "json");
}

function loadContent(page) {
    if (page === 1) {
        $(".second").removeClass("active");
        $(".first").addClass("active");
        $('.next').css({'margin': '70px 0 0 -2px'});
        $('#page').load('index.html #pageone', function () {
//=============
// массив строк
            startApp();
//====
        });
    }
    if (page === 2) {
        $('#page').load('1.html #pagetwo', function () {
//=============
            $(".first").removeClass("active");
            $(".second").addClass("active");
            $(".third").removeClass("active");
            // массив строк

            $(".input").autocomplete({
                source: "http://buzapchasti.ru/mobile/request.php?id=Spares", // url-адрес
                minLength: 4 // минимальное количество для совершения запроса
            });
//====
        });
    }
    if (page === 3) {
        $('#page').load('1.html #pagethree', function () {
            $(".second").removeClass("active");
            $(".fours").removeClass("active");
            $(".third").addClass("active");
            $("#city").autocomplete({
                source: "http://buzapchasti.ru/mobile/request.php?id=city", // url-адрес
                minLength: 1 // минимальное количество для совершения запроса
            });
        });
    }
    if (page === 4) {


        $('#page').load('1.html #pagefour', function () {
            $(".third").removeClass("active");
            $(".fours").addClass("active");
        });
    }
}
function add_service() {
    if (!service) {
        $('#add_service').css({'display': 'block'});
        service = true;
    }
    else {
        $('#add_service').css({'display': 'none'});
        service = false;
    }
}
function addFieldService() {
    counts++;
    $('#servicesinput').append("<li id=" + counts + " > <input class=\"input\" size=\"2\" name=" + "s" + counts + " id=" + counts + " placeholder=\"Введите название услуги\"></li>");
}
function addFieldPart() {
    countp++;
    $('#name_parts').append("<li id=" + countp + " > <input class=\"input\" size=\"2\" name=" + "p" + countp + " id=" + countp + " placeholder=\"Введите название запчасти\"></li>");
    $(".input").autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=Spares", // url-адрес
        minLength: 4 // минимальное количество для совершения запроса
    });
}
//function image() {
//    var uploadFile = document.getElementById("img");
//    var u = uploadFile.files[0].name;
//    $("#pict").replaceWith("<div id=\"pict\"><img src=" + u + "></div>");
//}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        switch (img) {
            case 1:
                reader.onload = function (e) {
                    $("#imagelist").append("<img class=\"image\" id=\"img1\" src=" + e.target.result + ">");
//            $('#img1').attr('src', e.target.result);
                    $('#add_img').css({'margin': '-60px 0 -40px -101px'});
                    img++;
                };
                break;
            case 2:
                reader.onload = function (e) {
//            $('#img2').attr('src', e.target.result);
                    $("#imagelist").append("<img class=\"image\" id=\"img2\" src=" + e.target.result + ">");
                    img++;
                };
                $('#add_img').css({'margin': '-60px 0 -40px 44px'});
                break;
            case 3:
                reader.onload = function (e) {
//            $('#img3').attr('src', e.target.result);
                    $("#imagelist").append("<img class=\"image\" id=\"img3\" src=" + e.target.result + ">");
                    img++;
                    $('#add_img').css({'display': 'none'});
                };
                break;
        }


        reader.readAsDataURL(input.files[0]);
    }
}
function getyear() {
    $('#list').load('1.html #yeas_list', function () {
        generateYears();
    });
}




$(function () {

    $("#swipe").swipe({
//Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
//$(this).text("You swiped " + direction ); 
            console.log("You swiped " + direction);
            if (direction == "left")
            {

                if (open_page.indexOf(page + 1) != -1)
                {
                    page = page + 1;
                    loadContent(page);
                }

            }

            if (direction == "right")
            {
                page = page - 1;
                loadContent(page);
            }/*
             if (direction == "up")
             {
             
             $('#page').off('swipe');
             $('#page').scroll();
             }
             if (direction == "down")
             {
             $('#page').off('swipe');
             $('#page').scroll();
             
             }*/

        }
    });
});
function  phonemessage(phones) {
    od = {};
    od.id = "sms";
    od.phones = phones;
    $.get("http://buzapchasti.ru/mobile/request.php", od, function (result) {
        //alert( "success" );
        console.log(result);
        /*    for (var i in result)
         {
         var obj = result.data[i];
         var page = "<p><img src=" + url + obj.img + "></p><h1>" + obj.title + "</h1><p>" + obj.desc + "</p><p>" + obj.massa + "/" + obj.price + "   <button onclick=\"buy()\">В корзину</button></p>";
         $("#cont").append(page);
         }*/


    }, "json");
}
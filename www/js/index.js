/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var phone;
var marka_main = ['Acura', 'Alfa Romeo', 'Audi', 'Bentley', 'BMW', 'Cadillac', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Daewoo', 'Dodge', 'Fiat', 'Ford', 'Geely', 'GMC', 'Great Wall', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'MINI', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Saab', 'SEAT', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo', 'ВАЗ (Lada)', 'ГАЗ', 'Москвич', 'ТагАЗ', 'УАЗ'];
var counts = 0; //счетчик полей сервисов
var countp = 0; //счетчик полей запчастей
var page = 1;
var t = 0;
var p = 0;
var img = 1; //счетчик загруженных картинок, макс.3
var arrModel = [];
var arrVdvc = [];
var arrPower = [];
var active = false;
var open_page = [];
var marka_main = ['Акура', 'Альфа Ромео', 'Ауди', 'Бентли', 'БМВ', 'Кадилак', 'Чери', 'Шевроле', 'Крайслер', 'Ситроен', 'Дэу', 'Додж', 'Фиат', 'Форд', 'Джили', 'Джи Эм Си', 'Грейт Волл', 'Хонда', 'Хаммер', 'Хёндай', 'Инфинити', 'Исузу', 'Ягуар', 'Джип', 'Киа', 'Ленд Ровер', 'Лексус', 'Линкольн', 'Мазда', 'Мерседес Бенс', 'Мини', 'Митсубиши', 'Ниссан', 'Опель', 'Пежо', 'Плимут', 'Понтиак', 'Порше', 'Рено', 'Ровер', 'Сааб', 'Сеат', 'Шкода', 'Смарт', 'Ссанг Йонг', 'Субару', 'Сузуки', 'Тойота', 'Фольксваген', 'Вольво', 'ВАЗ', 'ГАЗ', 'Москвич', 'ТагАЗ', 'УАЗ'];
//var marka_replace=[]
var yearsArr = [];
var regions = ['Европа', 'Япония', 'Россия', 'США', 'Корея', 'Китай', 'Великобритания', 'ОАЭ'];
var kpp = ['Автомат', 'Робот', 'Вариатор', 'Механика'];
var actuality = ['24 часа', '3 дня', '7 дней'];
var dvs_type = ['Бензин', 'Дизель', 'Гибрид', 'Электро'];
var privod = ['Передний', 'Задний', 'Полный'];
var kuzov = ['Седан', 'Хэтчбек 5 дв.', 'Хэтчбек 3 дв.', 'Внедорожник 5 дв.', 'Внедорожник 3 дв.', 'Универсал', 'Купе', 'Минивен', 'Пикап', 'Лимузин', 'Фургон', 'Кабриолет'];
/*
 $(document).ready(function () {
 
 
 });*/

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log('Device is ready');

    screen.lockOrientation('portrait');
    deviceIsReady = true;
    document.addEventListener("backbutton", function (e) {

        //            navigator.app.backHistory();
        page = page - 2;
        dale();

    }, false);
    $('.input ').keyup(function (eventObject) {
//        if (eventObject.which === 13)
//        {
//            dale();
//
//        }
    }).keydown(function (event) {
        if (event.which === 13) {
            $(this).blur();
            $(this).next().focus();
            event.preventDefault();
        }
    });
    ;

}
//============get year=======================
function getyear() {

    $("#yeas_list").show();
    generateYears();
}

function  generateYears() {
    yearsArr = [];
    var date = new Date();
    var year = date.getFullYear();
    var start = 1980;
//    var years = '';
    for (var i = year; i >= start; i--) {

        yearsArr.push("" + i + "");
        // years += "<li onclick=\"enter('" + i + "')\" class=\"getYear\"><a >" + i + "</a></li>";
    }
// $("#yearul").append(years);
}
function enter(year) {
    $("#year").val(year);
    $("#yeas_list").hide();
}
function closeform() {
    $('#yeas_list').hide();
}
//============get year END=======================
//==============init autocomplite 1st page===============
function startApp() {
    activeTopMenuButton('1', 'Plus');
//$(".subheader .MenuTopPlace").load("1.html #subMenu");

    $('[data-number="1"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="1"');
        page = 0;
        dale();

    });
    $('[data-number="2"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="2"');
    });
    $('[data-number="3"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="3"');
    });
    $('[data-number="4"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="4"');
    });
    $('[data-number="5"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="5"');
    });
    $('[data-number="6"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="6"');
    });

    $("#year").autocomplete({
// source: "http://buzapchasti.ru/mobile/request.php?id=marka", // url-адрес
        source: yearsArr,
        minLength: 0, // минимальное количество для совершения запроса

        response: function (event, ui) {
            $('#ui-id-1').addClass("autocompleteSize");
            window.scrollTo(0, $(this)[0].offsetTop);
        },
        close: function (event, ui) {
            if ($("#year").val().length > 3) {
//                        showAlert($("#guid").val().length, 'Message');
                setTimeout(function () {
                    cordova.plugins.Keyboard.close();
                }, 500);
            }
        }
        /*create: function( event, ui ) {
         alert("cr");
         }*/

    }).focus(function () {



        $(this).autocomplete('search', '');
        setTimeout(function () {
            cordova.plugins.Keyboard.close();
        }, 1000);


    });
    /* $('#year').keyup(function (eventObject) {
     if (eventObject.which == 13)
     {
     dale();
     }
     });*/
    //var input = document.getElementById('year');
//    input.oninput = function () {

    //};//
    $("#marka").autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=marka", // url-адрес
//        source:marka_main,
        minLength: 0,
        response: function (event, ui) {
            window.scrollTo(0, $(this)[0].offsetTop);
            $("#model").val("");

            $('#ui-id-2').addClass("autocompleteSize");
        }// минимальное количество для совершения запроса
    }).focus(function () {

        $(this).autocomplete('search', '');

    });
    /*$('#marka').keyup(function (eventObject) {
     if (eventObject.which == 13)
     {
     dale();
     }
     });*/
    $("#model").autocomplete({
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getModel",
                    marka: $("#marka").val(),
                    year: $("#year").val()
//            term: request.term
                },
                // обработка успешного выполнения запроса
                success: function (data) {
                    // приведем полученные данные к необходимому формату и передадим в предоставленную функцию response
                    response($.map(data, function (item) {
                        return{
                            value: item
                        };
                    }));
                }
            });
        }, // url-адрес
        minLength: 0, // минимальное количество для совершения запроса
        response: function (event, ui) {
            window.scrollTo(0, $(this)[0].offsetTop);
            $('#ui-id-3').addClass("autocompleteSize");
            $("#Vdvc").val("");
            $("#power").val("");
        }
    }).focus(function () {

        $(this).autocomplete('search', '');

    });
    /*  $('#model').keyup(function (eventObject) {
     if (eventObject.which == 13)
     {
     dale();
     }
     });*/
}/*
 function getModel() {
 /*t = obj + 1;
 if (t > 2) {
 t = 0;
 return false;
 }
 arrModel = [];
 //    var year = $('#year').val();
 var marka = $('#marka').val();
 var od = {};
 od.id = "getModel";
 //    od.year = year;
 od.marka = marka;
 $.get("http://buzapchasti.ru/mobile/request.php", od, function (result) {
 console.log(result);
 return result;
 /*  arrModel = result;
 $("#model").one("focus");
 $("#model").trigger("focus");
 $("#model").autocomplete({
 source: result,
 minLength: 0
 }).focus(function () {
 $("#model").autocomplete('search', '');
 });
 }, "json");
 }*//*
  function getVdvc(obj) {
  p = obj + 1;
  if (p > 2) {
  p = 0;
  return false;
  }
  arrVdvc = [];
  var od = {};
  od.id = "getV";
  od.model = $('#model').val();
  $.get("http://buzapchasti.ru/mobile/request.php", od, function (result) {
  console.log(result);
  arrVdvc = result;
  $("#Vdvc").one("focus");
  $("#Vdvc").trigger("focus");
  $("#Vdvc").autocomplete({
  source: result,
  minLength: 0
  }).focus(function () {
  $("#Vdvc").autocomplete('search', '');
  });
  }, "json");
  }*/
function DopPoleActivation() {
    if (!active) {
        initAutoComplete();
        //getVdvc();
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


}/*
 function getPower(obj) {
 p = obj + 1;
 if (p > 2) {
 p = 0;
 return false;
 }
 arrPower = [];
 var od = {};
 od.id = "getP";
 od.vdvc = $('#Vdvc').val();
 od.model = $('#model').val();
 $.get("http://buzapchasti.ru/mobile/request.php", od, function (result) {
 console.log(result);
 arrPower = result;
 $("#power").one("focus");
 $("#power").trigger("focus");
 $("#power").autocomplete({
 source: result,
 minLength: 0
 }).focus(function () {
 $("#power").autocomplete('search', '');
 });
 }, "json");
 }*/
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//  if(scrolled==$(window)[0].scrollY){
//      alert("END");
//  }
};
function initAutoComplete() {

    $('#Vdvc').autocomplete({
//        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc&model=" + $("#model").val(), // url-адрес
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getV",
                    model: $("#model").val(),
                    year: $("#year").val()
//            term: request.term
                },
                // обработка успешного выполнения запроса
                success: function (data) {
                    // приведем полученные данные к необходимому формату и передадим в предоставленную функцию response
                    response($.map(data, function (item) {
                        return{
                            value: item
                        }
                    }));
                }
            });
        }, // url-адрес
        minLength: 0, // минимальное количество для совершения запроса
        response: function (event, ui) {
            // $("#model").val("");
            $('#ui-id-5').addClass("autocompleteSize");
        }

    }).focus(function () {
        // getVdvc(p);
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')

    })

    $("#Tdvc").autocomplete({
        source: dvs_type, // url-адрес
//        source: "http://buzapchasti.ru/mobile/request.php?id=Tdvc", // url-адрес
        minLength: 0 // минимальное количество для совершения запроса
    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')

    })
    $("#power").autocomplete({
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getP",
                    model: $("#model").val(),
                    year: $("#year").val()
//            term: request.term
                },
                // обработка успешного выполнения запроса
                success: function (data) {
                    // приведем полученные данные к необходимому формату и передадим в предоставленную функцию response
                    response($.map(data, function (item) {
                        return{
                            value: item
                        }
                    }));
                }
            });
        }, // url-адрес // url-адрес
        minLength: 0,
        response: function (event, ui) {
            // $("#model").val("");
            $('#ui-id-6').addClass("autocompleteSize");
        }
    }).focus(function () {
//        getPower(p);
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '');
    })
//    /*
    $("#privod").autocomplete({
//     source: "http://buzapchasti.ru/mobile/request.php?id=privod", // url-адрес
        source: privod, // url-адрес
        minLength: 0 // минимальное количество для совершения запроса
    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });
    $("#kuzov").autocomplete({
        source: kuzov, // url-адрес
//     source: "http://buzapchasti.ru/mobile/request.php?id=kuzov", // url-адрес
        minLength: 0,
        response: function (event, ui) {
            $('#ui-id-8').addClass("autocompleteSize");
        }
    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });
    $("#kpp").autocomplete({
//     source: "http://buzapchasti.ru/mobile/request.php?id=kpp", // url-адрес
        source: kpp, // url-адрес
        minLength: 0// минимальное количество для совершения запроса
    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });

    $("#rinok_sbita").autocomplete({
//     source: "http://buzapchasti.ru/mobile/request.php?id=kpp", // url-адрес
        source: regions, // url-адрес
        minLength: 0,
        response: function (event, ui) {
            $('#ui-id-10').addClass("autocompleteSize");
        }
    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });
}
//====================init END==============================
function activatePage(pageId) {
    $("#pageone").hide();
    $("#pagetwo").hide();
    $("#pagethree").hide();
    $("#pagefour").hide();
    $("#" + pageId).show();
}
function activateMarker(markerClass) {
    $(".first").removeClass("active");
    $(".second").removeClass("active");
    $(".third").removeClass("active");
    $(".fours").removeClass("active");
    $("." + markerClass).addClass("active");
}
function activeTopMenuButton(num, alt) {
    $('[data-number="1"]').attr('src', 'img/subMenuPlus.png');
    $('[data-number="2"]').attr('src', 'img/subMenuAllRequest.png');
    $('[data-number="3"]').attr('src', 'img/subMenuHistory.png');
    $('[data-number="4"]').attr('src', 'img/subMenuMessagess.png');
    $('[data-number="5"]').attr('src', 'img/subMenuGarage.png');
    $('[data-number="6"]').attr('src', 'img/subMenuSettings.png');
    $("[data-number=" + num + "]").attr('src', "img/subMenu" + alt + "Active.png");
}
//переключатель страниц
function dale() {

    page++;
    switch (page) {
        case 1:

//            $("#pageone").show();
//            $("#pagetwo").hide();
            activatePage('pageone');
//            $(".second").removeClass("active");
//            $(".first").addClass("active");
            activateMarker('first');
            break;
        case 2:
            //проверка заполнения обязательных полей
            if ($("#year").val().length == 0) {
                $("#year").addClass("error");
                window.scrollTo(0, 0);
                page--;
                return false;
            } else
            if ($("#marka").val().length == 0) {
                $("#marka").addClass("error");
                window.scrollTo(0, 0);
                page--;
                return false;
            } else
            if ($("#model").val().length == 0) {
                $("#model").addClass("error");
                window.scrollTo(0, 0);
                page--;
                return false;
            }
//===конец проверки
//меняем квадратики страниц
            $('.next').css({'margin': '70px 0 0 -2px'});
//            $(".first").removeClass("active");
//            $(".second").addClass("active");
//            $(".third").removeClass("active");
            activateMarker('second');
            //loadContent(2);
//            $("#pageone").hide();
//            $("#pagetwo").show();
//            $("#pagethree").hide();
            activatePage('pagetwo');
            //заполняем массив страниц на которых мы побывали
            if (open_page.indexOf(1) == -1) {
                open_page.push(1);
            }
            if (open_page.indexOf(2) == -1) {
                open_page.push(2);
            }
//инициализируем автозаполнение запчастей
            /*   $(".name_part").autocomplete({
             source: "http://buzapchasti.ru/mobile/request.php?id=Spares", // url-адрес
             minLength: 4 // минимальное количество для совершения запроса
             });*/
//            $('.input ').keyup(function (eventObject) {
//                if (eventObject.which == 13)
//                {
//                    dale();
//                }
//            });
            break;
        case 3:
            jQuery(function ($) {
                $("#phone").mask("+7(999)999-99-99");
            });
            if (($("#name_part").val().length == 0) && (($("#service").val().length == 0))) {
                if ($("#name_part").val().length == 0) {
                    $("#name_part").addClass("error");
                    window.scrollTo(0, 0);
                    page--;
                    return false;
                }
                if ($("#service").val().length == 0) {
                    $("#service").addClass("error");
                    window.scrollTo(0, 0);
                    page--;
                    return false;
                }
            }
//            $(".second").removeClass("active");
//            $(".third").addClass("active");
//            $(".fours").removeClass("active");
            activateMarker('third');
            activatePage('pagethree');
//            $("#pagetwo").hide();
//            $("#pagethree").show();
//            $("#pagefour").hide();
            /*   
             $("#city").autocomplete({
             source: "http://buzapchasti.ru/mobile/request.php?id=city", // url-адрес
             minLength: 0 // минимальное количество для совершения запроса
             }).focus(function () {
             $(this).autocomplete('search', '')
             });*/
            $("#actuality").autocomplete({
                source: actuality, // url-адрес
                minLength: 0 // минимальное количество для совершения запроса

            }).focus(function () {
                $(this).autocomplete('search', '')
            });
            $("#actuality").blur(function () {
                if (actuality.indexOf($(this).val()) == -1) {
                    $("#actuality").focus();
                }
            });
            if (open_page.indexOf(3) == -1) {
                open_page.push(3);
            }
            break;
        case 4:
            phone = $("#phone").val().replace("(", "");
            phone = phone.replace(")", "");
            phone = phone.replace("-", "");
            phone = phone.replace("-", "");
            if ((phone.length != 12) || (($("#city").val().length == 0))) {
                if ($("#city").val().length == 0) {
                    $("#city").addClass("error");
                    window.scrollTo(0, 0);
                    page--;
                    return false;
                }
                if (phone.length != 12) {
                    $("#phone").addClass("error");
                    window.scrollTo(0, 0);
                    page--;
                    return false;
                }

            }

            if (phone.indexOf('+7') == -1) {
                $("#phone").addClass("error");
                window.scrollTo(0, 0);
                page--;
                return false;
            }
//var phone = $("#phone").val();

            var data = $(".inputForm").serialize();
            console.log(data);
            endreg(data);
//            $(".third").removeClass("active");
//            $(".fours").addClass("active");
            activateMarker('fours');
            if (open_page.indexOf(4) == -1) {
                open_page.push(4);
            }

            break;
        case 5:
            var p = phone;
            var c = $("#code").val();
            confirm(p, c);
            break;
    }


}
//Добавление полей на второй странице
function addFieldService() {

    counts++;
    $('#servicesinput').append("<li id=" + counts + " > <input class=\"input\" size=\"2\" name=\"service[" + counts + "]" + "\" id=" + counts + " placeholder=\"Введите название услуги\"><button class=\"minusService\" onclick=\"$(this.parentNode).remove()\">-</button></li>");
}
function delField(id) {
    $(id).remove();
}

function addFieldPart() {
    countp++;
    $('#name_parts').append("<li id=" + countp + " > <input class=\"input name_part\" size=\"2\" name=\"name_part[" + countp + "]" + "\" id=" + countp + " placeholder=\"Введите название запчасти\"><button class=\"minusService\" onclick=\"$(this.parentNode).remove()\">-</button></li></li>");
    $(".name_part").autocomplete({
        source: "http://buzapchasti.ru/mobile/request.php?id=Spares", // url-адрес
        minLength: 4 // минимальное количество для совершения запроса
    });
}
//= загрузка картинок
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
//================= отправка смсм с кодом
function  endreg(data) {

    data += "&id=sms";
    $.get("http://buzapchasti.ru/mobile/request.php", data, function (result) {

        console.log(result);
        if (result === 1) {
//            $("#pagethree").hide();
//            $("#pagefour").show();
            activatePage('pagefour');

        }
        else {
            alert("При регистрации возникла ошибка. Возможно вы уже зарегестрированы.");
            page = page - 2;
            dale();

            return false;
        }

    }, "json");
}
function confirm(phone, code) {
    data = {};
    data.id = "confirm";
    data.code = code;
    data.phone = phone;
    $.get("http://buzapchasti.ru/mobile/request.php", data, function (result) {
        //alert( "success" );
        console.log(result);
        if (result == 1) {
            alert("Поздравляем вы успешно зарегестрированы");
            $("#code").hide();
        } else {
            alert("Ошибка регистрации повторите попытку позже");
            page--;
        }

    }, "json");
}
$(function () {
    console.log("ready!");
    generateYears();
//                loadData();
    startApp();
    /* var nextorno = true;
     swiper = new Swiper('.swiper-container', {
     // Optional parameters
     direction: 'horizontal',
     //        noSwiping:false,
     //        nextButton: '#button_right',
     //        prevButton: '#button_left',
     onSlideNextStart:function(e){
     
     },
     onSlideChangeStart: function (e) {
     if (open_page.indexOf(page + 1) != -1)
     {
     
     nextorno=true;
     }
     else{
     this.slidePrev();
     e.preventDefault();
     }
     //                    $("#contentContainer").css({'height': '100%'});
     //                    window.scrollTo(0, 0);
     },
     allowSwipeToNext:nextorno,
     allowSwipeToPrev:true
     
     });*/


    $("#swipe").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (open_page.indexOf(page + 1) != -1)
            {

                dale();
            }
        },
        swipeRight: function (event, direction, distance, duration, fingerCount, fingerData) {
            page = page - 2;
            dale();
        },
        threshold: 75,
        allowPageScroll: 'auto'
    });
});
/*
 //===============swipe
 $(function () {
 
 $("#swipe").swipe({
 swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
 console.log("You swiped " + direction);
 if (direction == "left")
 {
 if (open_page.indexOf(page + 1) != -1)
 {
 
 dale();
 }
 }
 if (direction == "right")
 {
 page = page - 2;
 dale();
 }
 
 
 }
 });
 });*/

var topMenu = false;
/*Top menu*/
function TopMenuShow() {
    var menu = $("#menuBlock");
    if (!topMenu) {
        menu.load("1.html #menuList ", function () {
            menu.animate({'left': 0}, 300);
            topMenu = true;
            activateMenuLinks();
        });
    }
    else {
        menu.animate({'left': -100 + '%'}, 300);
        setTimeout(function () {
            menu.empty();
            topMenu = false;
        }, 302);

    }
}
//function activateMenuLinks() {
//    var Upblock = $("#Upblock");
//    $('[data-number="1"]').click(function () {
//        TopMenuShow();
//        Upblock.animate({'left': -150 + '%'}, 300);
//    });
//    $('[data-number="2"]').click(function () {
//
//        LoginFormActive();
//    });
//    $('[data-number="2"]').click(function () {
//
//        console.log("data2");
//        // loadContent("navigation");
//    });
//}
function LoginFormActive() {
    TopMenuShow();
    var Upblock = $("#Upblock");
    Upblock.animate({'left': 0}, 300);
    Upblock.load("1.html #loginForm ", function () {

    });
}
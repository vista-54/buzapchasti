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
var RequestDataArray = [];
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
//
//==============init autocomplite 1st page===============
function InitSubMenuButtons() {
    var body = $("#body");
    var header = $("header");
    $('[data-number="1"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        header.load("newRequest.html .head");
//        var MainPage = $("#MainPage");
//        MainPage.show();
//        body.load("newRequest.html #newRequest", function () {
//            InitSubMenuButtons();
//            
//        });
        console.log('data-number="1"');
//        page = 0;
//        dale();
    });
    $('[data-number="2"]').click(function () {

        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
        console.log('data-number="2"');
        GetAllRequets();
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
        InitAuth();
        console.log('data-number="6"');
    });
    $('[data-number="7"]').click(function () {
        activeTopMenuButton($(this).attr('data-number'), $(this).attr('alt'));
//        InitAuth();
        console.log('data-number="7"');
    });
}
function startApp() {
    activeTopMenuButton('1', 'Plus');
    InitSubMenuButtons();
//$(".subheader .MenuTopPlace").load("1.html #subMenu");

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
    }).focus(function () {
        $(this).autocomplete('search', '');
        setTimeout(function () {
            cordova.plugins.Keyboard.close();
        }, 1000);
    });
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
    $("#model").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getModel",
                    marka: $("#marka").val(),
                    year: $("#year").val(),
                    term: request.term
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
}
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


}
//window.onscroll = function () {
//    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
////  if(scrolled==$(window)[0].scrollY){
////      alert("END");
////  }
//};
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
                    year: $("#year").val(),
                    term: request.term
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
        $(this).autocomplete('search', '');
    });
    $('#Tdvc').autocomplete({
//        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc&model=" + $("#model").val(), // url-адрес
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getT",
                    model: $("#model").val(),
                    year: $("#year").val(),
                    term: request.term
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
            // $("#model").val("");
            $('#ui-id-5').addClass("autocompleteSize");
        }

    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '');
    });
    $("#power").autocomplete({
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getP",
                    model: $("#model").val(),
                    year: $("#year").val(),
                    term: request.term
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
    });
//    /*
    $('#privod').autocomplete({
//        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc&model=" + $("#model").val(), // url-адрес
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getPrivod",
                    model: $("#model").val(),
                    year: $("#year").val(),
                    term: request.term
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
            // $("#model").val("");
            $('#ui-id-5').addClass("autocompleteSize");
        }

    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });
    $("#kuzov").autocomplete({
//        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc&model=" + $("#model").val(), // url-адрес
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getKuzov",
                    model: $("#model").val(),
                    year: $("#year").val(),
                    term: request.term
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
            // $("#model").val("");
            $('#ui-id-5').addClass("autocompleteSize");
        }

    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });
    $("#kpp").autocomplete({
//        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc&model=" + $("#model").val(), // url-адрес
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getKpp",
                    model: $("#model").val(),
                    year: $("#year").val(),
                    term: request.term
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
            // $("#model").val("");
            $('#ui-id-5').addClass("autocompleteSize");
        }

    }).focus(function () {
        window.scrollTo(0, $(this)[0].offsetTop);
        $(this).autocomplete('search', '')
    });
    $("#kod_dvc").autocomplete({
//        source: "http://buzapchasti.ru/mobile/request.php?id=Vdvc&model=" + $("#model").val(), // url-адрес
        source: function (request, response) {

            $.ajax({
                url: "http://buzapchasti.ru/mobile/request.php",
                dataType: "json",
                // параметры запроса, передаваемые на сервер (последний - подстрока для поиска):
                data: {
                    id: "getKodDvc",
                    model: $("#model").val(),
                    year: $("#year").val(),
                    term: request.term
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
            // $("#model").val("");
            $('#ui-id-5').addClass("autocompleteSize");
        }

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
    $('[data-number="7"]').attr('src', 'img/subMenuShop.png');
    $('[data-page="1"]').hide();
    $('[data-page="2"]').hide();
    $('[data-page="3"]').hide();
    $('[data-page="4"]').hide();
    $('[data-page="5"]').hide();
    $('[data-page="6"]').hide();
    $('[data-page="7"]').hide();
    $("[data-page=" + num + "]").show();
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
        if (result.data === 1) {
//            $("#pagethree").hide();
//            $("#pagefour").show();
            activatePage('pagefour');
        }
        else {
            if (result.data === 3) {
//            $("#pagethree").hide();
//            $("#pagefour").show();
                alert("Ваш запрос успешно добавлен!");
                page = page - 2;
                dale();
                return false;
            }
            else {
                alert("При регистрации возникла ошибка. Возможно вы уже зарегестрированы.");
            }

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
    initUser();
    generateYears();
    startApp();
//    $("#body").load('newRequest.html #newRequest', function () {
//        
//
//    });
//                loadData();

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
function GetAllRequets() {
    RequestDataArray = [];
    console.log('GetAllRequets');
    var cont = $("#OtherPageLoader");
    var header = $("header");

//    var MainPage = $("#MainPage");
//    MainPage.hide();
    cont.load("RequestsList.html #RequestsList", function () {
        $("#RequestsList").css({'height': $(window).height() - $("header").height() - $("#subMenu").height(), 'overflow-y': 'scroll'});
        console.log("page RequestsList loaded");
//        InitSubMenuButtons();
    });
    header.load("RequestsList.html .requests");
    var data = {};
    data.id = 'getAllReq';
    $.get("http://buzapchasti.ru/mobile/request.php", data, function (result) {
        console.log(result.data);
        for (var i in result.data) {
            var obj = result.data[i];
            RequestDataArray.push(obj);
            $("#RequestsList ul").append("<li onclick=\"ShowFullInfo('" + i + "')\"><h1>" + obj.marka + " " + obj.model + " " + obj.year + " " + obj.Vdvc + " " + getShortKpp(obj.Tkpp) + "</h1><span class='NameAndCity'>" + obj.username + ", " + obj.city + "</span><br><span class='SparesAndServices'>" + getServicesAndSpares(obj.сountspares, obj.countservices) + "</span><span class='orderDate'>" + obj.date + "</span><img src='img/arrow-right.png'></li>");
        }
    }, "json");
//    $("#swipe").hide();
}
function getServicesAndSpares(spares, services) {
    var res = "";
    if (spares > 0) {
        res = "Запчастей " + res + spares;
    }
    if (services > 0) {
        res = res + ", " + "Услуг " + services;
    }
    return res;
}
function getShortKpp(kpp) {
    var res = "";
    switch (kpp) {
        case "Автоматическая":
            res = "AT";
            break;
        case "Механическая":
            res = "MT";
            break;
        case 'Роботизированная с двумя сцеплениями':
            res = 'SAT';
            break;
        case 'Роботизированная с одним сцеплением':
            res = 'SAT';
            break;
        case 'Роботизированная':
            res = 'SAT';
            break;
        case 'Вариатор':
            res = 'CVT';
            break;
        case 'Прямая передача':
            res = 'SST';
            break;
        case 'Роботизированная секвентальная':
            res = 'SAT';
            break;
        default:
            res = "";
    }
    return res;
}
function ShowFullInfo(id) {
    console.log(id);
    var data = JSON.parse(RequestDataArray[id].description);
    var cont = $("#RequestsList");
//    CheckChat();
    cont.load("fullInfoRequest.html #fullInfoAboutRequest", function () {
        /*=========*/
//        if (!checkHostChat()) {
        $("button.startChat").click(function () {
            console.log("chat");
            if (userData.authorization) {
                chatLoad($("button.startChat").attr('data-request-id'));
            }
            else {
                $('[data-number="6"]').click();
            }
        });
//        }
//        else{
//             chatLoad($("button.startChat").attr('data-request-id'));
//        }
//        $("#fullInfoAboutRequest").css({'height': $(window).height() - $("header").height() - $("#subMenu").height()});
        $("#RequestsList").css({'height': '100%', 'overflow-y': 'visible'});
        console.log("page fullInfoAboutRequest loaded");
        var obj = RequestDataArray[id];
        $(".shfullInfoAboutRequest span").text(obj.marka + " " + obj.model + " " + obj.year + " " + obj.Vdvc + " " + getShortKpp(obj.Tkpp));
//        InitSubMenuButtons();
        data.year !== '' ? $(".charactik [data-modelinfo='year']").text("Год: " + data.year) : '';
        data.marka !== '' ? $(".charactik [data-modelinfo='marka']").text("Марка: " + data.marka) : '';
        data.model !== '' ? $(".charactik [data-modelinfo='model']").text("Модель: " + data.model) : '';
        data.Tdvc !== '' ? $(".charactik [data-modelinfo='Tdvc']").text("Тип ДВС: " + data.Tdvc) : '';
        data.Vdvc !== '' ? $(".charactik [data-modelinfo='Vdvc']").text("Объём ДВС: " + data.Vdvc) : '';
        data.Pdvc !== '' ? $(".charactik [data-modelinfo='Pdvc']").text("Мощьность: " + data.power) : '';
        data.privod !== '' ? $(".charactik [data-modelinfo='privod']").text("Привод: " + data.privod) : '';
        data.kuzov !== '' ? $(".charactik [data-modelinfo='kuzov']").text("Кузов: " + data.kuzov) : '';
        data.kpp !== '' ? $(".charactik [data-modelinfo='kpp']").text("КПП: " + data.kpp) : '';
        data.rinok_sbita !== '' ? $(".charactik [data-modelinfo='market']").text("Рынок сбыта: " + data.rinok_sbita) : '';
        data.vinkod !== '' ? $(".charactik [data-modelinfo='VIN']").text("VIN: " + data.vinkod) : '';

//        $(".charactik [data-modelinfo='power']").text("Мощность:" + data.power);
        var phoneValueAttr = data.phone.replace('(', '');
        phoneValueAttr = phoneValueAttr.replace(')', '');
        phoneValueAttr = phoneValueAttr.replace(/-/g, '');
        $(".infoSelf [data-row='name']").text("Имя:" + data.username);
        $(".infoSelf [data-row='city']").text("Город:" + data.city);
        $(".infoSelf [data-row='phone']").text("Телефон:" + data.phone);
        $(".infoSelf [data-row='phone']").attr("data-value", phoneValueAttr);

        $(".infoSelf [data-row='mail']").text("Телефон:" + data.mail);
        $("button.next").attr('data-request-id', obj.id);
//        $(".info [data-modelinfo='power']").text("Мощность:" + obj.description.substring(obj.description.indexOf("мощность ДВС") + "мощность ДВС:".length, obj.description.indexOf("Привод")));
//        $(".info [data-modelinfo='Vin']").text("VIN:"+obj.Vdvc);
        for (var i in data.name_part) {
            var t = data.name_part[i];
            var num = parseInt(i) + 1;
            $("[data-modelinfo='spares']").append("<li>" + num + "." + t + "</li>");
        }
        for (var i in data.service) {
            var t = data.service[i];
            var num = parseInt(i) + 1;
            $("[data-modelinfo='services']").append("<li>" + num + "." + t + "</li>");
        }

        if (checkHostChat()) {
            chatLoad($("button.startChat").attr('data-request-id'));
        }
    });
}
function clickBack() {
    $('[data-number=\"2\"]').click();
}
//проверяем есть ли диалог между этими пользователями если есть то грузим его, если нету грузим кнопку Отправить
function CheckChat(request_id, sender, getter) {
    var data = {};
    data.id = 'checkChat';
    data.request_id = request_id;
    data.sender = sender;
    data.getter = getter;
    $.get('http://buzapchasti.ru/mobile/chat.php', data, function (result) {
        if (result.data.length > 0) {
            var dataCh = {};
            dataCh.id = 'getchat';
            dataCh.request_id = result.data[0];
            $.get('http://buzapchasti.ru/mobile/chat.php', dataCh, function (result) {
                console.log(result);
                dialogId = dataCh.request_id;
                chatLoaded(dataCh.request_id, dialogId);

            }, 'json');
//            return true;
        }
        else {
            data.id = 'createNewDialog';
            $.get('http://buzapchasti.ru/mobile/chat.php', data, function (result) {
                console.log(result);
                dialogId = result.data;
//                dialogId = dataCh.request_id;
                chatLoaded(data.request_id, dialogId);
            }, 'json');
//            return false;
        }
    }, 'json');
}
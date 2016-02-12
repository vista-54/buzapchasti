/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function InitAuth() {
    var header = $("header");
    header.load("RequestsList.html .account");
    $('#OtherPageLoader').load("1.html #loginForm ", function () {
        $('.loginBtn').click(function () {
            console.log('btn login clicked');
            var data = {};
            data.id = 'login';
            data.login = $('input[name=login]').val();
            data.password = $('input[name=password]').val();
            $.get('http://buzapchasti.ru/mobile/login.php', data, function (result) {
                console.log(result);
                if (result.data) {
                    userData.login = result.data;
                    userData.authorization=true;
                    console.log(userData);
                    $('[data-number="2"]').click();
                }
                else {
                    alert("Неверный логин или пароль");
                }
            },'json');
        });
    });
}
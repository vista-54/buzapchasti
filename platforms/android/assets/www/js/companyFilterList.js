/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initCompanyFilterList() {

    $('#OtherPageLoader').load("1.html #filterFields", function () {

        $(".activateFilter").click(function () {
            var data = {
                id:'getCompanyList',
                marka: $('input[name=marka]').val(),
                model: $('input[name=model]').val(),
                region: $('input[name=region]').val()
            };
            $.get('http://buzapchasti.ru/mobile/request.php', data, function (result) {
                console.log(result);
            });




        });
    });
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function companyListLoad() {
    var header = $("header");
    header.load("RequestsList.html .companyList");
    $('#OtherPageLoader').load("1.html #companylist", function () {
        $('.filter img').click(function () {
            initCompanyFilterList();
        });

    });

}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initCompanyFilterList() {
    $('#OtherPageLoader').load("1.html #filterFields", function () {
        $(".activateFilter").click(function () {
            console.log("ActivateFilter");
        });
    });
}

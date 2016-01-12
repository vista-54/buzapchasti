/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function loadData() {
    od = "inditator=Spares";
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
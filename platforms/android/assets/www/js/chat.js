/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function chatLoad(reqId) {
    var data = {};

    data.req_id = parseInt($("button.next").attr('data-request-id'));
    data.sender = 'test';
    data.getter = $("[data-row='phone']").attr('data-value');
    CheckChat(data.req_id, data.sender, data.getter);
//        
//    }
//    else {


//    }
}
function chatLoaded(reqId, dialogId) {
    $("#chatContainer").load("chat.html #chat", function () {
        var submitBtn = $(".sendButton");
        submitBtn.attr('reqId', reqId);
        loadMessages(dialogId);

        submitBtn.click(function () {

            loadMessages(dialogId);
            var chatMess = $('#chat input').val('');
//            var date = new Date();
//            console.log("send clicked");

        });
    });
}
function loadMessages(dialogId) {
    var chatMess = $('#chat input').val();
    var data = {};
    data.id = 'addMessage';
    data.user = 'test';
    data.message = chatMess;
    data.dialog_id = dialogId;
    console.log(data);
//            data.requestID = submitBtn.attr('reqId');
//            data.currentDate = date.getTime();
//                $.get('')
    var chatCnt = $(".chatContainer");
    chatCnt.empty();
    $.get('http://buzapchasti.ru/mobile/chat.php', data, function (result) {
        console.log(result);
        for (var i in result.data) {
            var obj = result.data[i];
            chatCnt.append("<h1  class='msg'><span>" + obj.message + "</span></h1>");
//                    chatMess.val('');
        }
    }, 'json');
}

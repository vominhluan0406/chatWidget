var name = prompt('Nhập tên của bạn: ');
while (localStorage.getItem(name) == undefined) {
    alert('Tên không có trong dữ liệu!')
    name = prompt('Nhập tên của bạn: ');
}
var value = JSON.parse(localStorage.getItem(name));

// Tạo danh sách bạn bè
$(document).ready(function () {
    for (var i in value.friend) {
        var idCurrent = value.friend[i];//Key người hiện tại
        var valueID = JSON.parse(localStorage.getItem(idCurrent));//Value người hiện tại
        
        this.div = $('<div>', { id: idCurrent + "top" }).appendTo($('#top'));
        $('#' + idCurrent + "top").nameWidget({ name: idCurrent, img: valueID.image });

        function addChatBox(sender, mess, receiver,senVal,recVal) {
            return function () {
                if ($('#' + receiver + "bottom").length == 0) {  //Kiểm tra chatbox
                    $('<div>', { id: receiver + "bottom" }).appendTo($('#bottom'));
                    $('#' + receiver + "bottom").myWidget({
                        friend: receiver,
                        img: senVal.image,
                        currentUser: sender,
                        message: mess,
                        imgfriend: recVal.image
                    });
                }
            }
        }
        $('#' + idCurrent + "top").click(addChatBox(name, valueMessage, idCurrent, value,valueID));

    }
})
// $('#input2').click(function () {
//     var data = $('#input1').val();
//     $('#input1').val();
//     client.sendMessage({ currentUser: name, message: data, receiveUser: '' });
// });
var client = new WebSocketClient({
    onMessage: function (evt) {
        var data = JSON.parse(evt.data);
        var today = new Date();
        var time = today.getHours() + today.getMinutes() + today.getSeconds();
        var div = '<div class="' + time + '"></div>'
        $("#messageArea").append(div);
        if (data.ten === name) {
            $('.' + time + '').myWidget({ message: data.message, itMe: true });
        }
        else {
            $('.' + time + '').myWidget({ message: data.ten + " : " + data.message, itMe: false });
        }
    }
});
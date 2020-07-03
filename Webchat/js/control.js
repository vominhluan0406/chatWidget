var name = prompt('Nhập tên của bạn: ');
while (localStorage.getItem(name) == undefined) {
    alert('Tên không có trong dữ liệu!')
    name = prompt('Nhập tên của bạn: ');
}
document.getElementById('user').innerHTML = 'User: '+name;
var value = JSON.parse(localStorage.getItem(name)); //thông tin người dùng(image,friend)

var client = new WebSocketClient({
    onMessage: function (evt) {
        var data = JSON.parse(evt.data);
        console.log(data);
        $('#' +data.Sender+'_'+ data.Receive).myWidget({ message: [{ message: data.message, Sender: data.Sender }], new: data.new });
        $('#' +data.Receive+'_'+data.Sender).myWidget({ message: [{ message: data.message, Sender: data.Sender }], new: data.new });
    }
});

// Tạo danh sách bạn bè
$(document).ready(function () {

    //Click để gửi tin nhắn
    function sendMes(sender, receiver) {
        return function () {
            var mess = document.getElementById('inp1' + receiver).value; //nội dung
            document.getElementById('inp1' + receiver).value = '';

            //Tạo một dòng tin nhắn
            client.sendMessage({ message: mess, 'Sender': sender, new: true, Receive: receiver });
        }
    }
    for (var i in value.friend) {
        var idCurrent = value.friend[i];//Key người hiện tại
        var valueID = JSON.parse(localStorage.getItem(idCurrent));//Value người hiện tại
        var stringName = [name + " " + idCurrent, idCurrent + ' ' + name];

        // Lấy giá trị tin nhắn trong localStorage
        var message = localStorage.getItem(stringName[0]);

        if (message == undefined) {
            message = localStorage.getItem(stringName[1]);
        }

        message = JSON.parse(message);
        //Tạo một ô bạn bè
        this.div = $('<div>', { id: idCurrent + "top" }).appendTo($('#top'));
        $('#' + idCurrent + "top").nameWidget({ name: idCurrent, img: valueID.image });

        //Click để mở tin nhắn
        function addChatBox(sender, mess, receiver, senVal, receiverVal) {
            return function () {
                if ($('#' +sender+"_"+ receiver).length == 0) {  //Kiểm tra chatbox
                    $('<div>', { id: sender+"_"+ receiver}).appendTo($('#bottom'));
                    $('#' + sender+"_"+ receiver).myWidget({
                        friend: receiver,
                        img: senVal.image,
                        currentUser: sender,
                        message: mess,
                        imgfriend: receiverVal.image
                    });
                    $('#inp2' + receiver).click(sendMes(sender, receiver));
                }
            }
        }
        $('#' + idCurrent + "top").click(addChatBox(name, message, idCurrent, value, valueID));
    }
})
// $('#input2').click(function () {
//     var data = $('#input1').val();
//     $('#input1').val();
//     client.sendMessage({ currentUser: name, message: data, receiveUser: '' });
// });
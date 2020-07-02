$(function () {
    var path = 'data/data.txt';
    var name='';
    function Nhapten(){
        name = prompt('Name: '); //Tên người dùng
    }
    Nhapten();
    $.get(path, function (file) {
        var data = $.parseJSON(file)
        while(data[name]==undefined){
            alert('Tên không chính xác, nhập tên khác!');
            Nhapten();
        }
        console.log(data[name].historyMessage);
    }, 'text');
    $('#input2').click(function () {
        var data = $('#input1').val();
        $('#input1').val();
        client.sendMessage({ currentUser: name, message: data, receiveUser: '' });
    });
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
})
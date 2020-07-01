$(function () {
    var name = prompt('Name: ');
    var path = 'data/data.txt';
    var data = $.get(path);
    console.log(data);  
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
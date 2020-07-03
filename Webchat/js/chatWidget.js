$(function () {
    $.widget("custom.myWidget", {
        options: {
            img: '',
            imgfriend:'',
            message: [], //[{'massage':'....','Sender':'currentUser']
            currentUser: '',
            friend:'',
            new:false
        },
        _create: function () {
            this.element.addClass('messageArea');
            // Load tin nhan cu
            for (var m in this.options.message) {
                // console.log(this.options.message[m])
                this.div2 = $('<div>').appendTo(this.element);
                
                this.text = $('<p>', { text: this.options.message[m]['message'] }).appendTo(this.div2);
                if (this.options.message[m]['Sender'] == this.options.currentUser) {
                    this.img = $('<img>', { 'src': this.options.img }).appendTo(this.div2);
                    this.div2.addClass('container darker');
                    this.img.addClass('right');
                } else {
                    this.img = $('<img>', { 'src': this.options.imgfriend }).appendTo(this.div2);
                    this.div2.addClass('container');
                }
            }
            this.div1 = $('<div>', { id: 'input-Chat' }).appendTo(this.element);
            this.inp1 = $('<input>', { type: 'text', id: 'inp1'+this.options.friend }).appendTo(this.div1);
            this.inp2 = $('<input>', { type: 'button', value: 'Send', id: 'inp2'+this.options.friend }).appendTo(this.div1);
            this.inp1.addClass('input1');
            this.inp2.addClass('input2');
            this._refresh();
        },
        _refresh:function(){ //có tin nhắn mới
            if(this.options.new==true){
                this.div2 = $('<div>').appendTo(this.element).insertBefore('#input-Chat');
                this.text = $('<p>', { text: this.options.message[0]['message'] }).appendTo(this.div2);
                if (this.options.message[0]['Sender'] == this.options.currentUser) {
                    this.img = $('<img>', { 'src': this.options.img }).appendTo(this.div2);
                    this.div2.addClass('container darker');
                    this.img.addClass('right');
                } else {
                    this.img = $('<img>', { 'src': this.options.imgfriend }).appendTo(this.div2);
                    this.div2.addClass('container');
                }

            }
        },
        _setOptions: function () {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
            this._refresh();
        },

        // _setOption is called for each individual option that is changing
        _setOption: function (key, value) {
            this._super(key, value);
        }

    });
})

/*
 * Nguoi gui:
 <div class="container">
            <img src="img/person1.png" alt="Avatar">
            <p>Hello. How are you today?</p>
            <span class="time-right">11:00</span>
        </div>

    Nguoi nhan
    <div class="container darker">
            <img src="img/person1.png" alt="Avatar">
            <p>Hello. How are you today?</p>
            <span class="time-right">11:00</span>
        </div>
    Khung chat
        <div id="input-Chat">
        <input type="text" name="name" value="" id="input1" />
        <input type="button" name="name" value="Send" id="input2"sa/>
    </div>
 */
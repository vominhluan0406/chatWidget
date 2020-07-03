$(function () {
    $.widget("custom.nameWidget", {
        options: {
            name: '',
            img: ''
        },
        _create: function () {
            this.element.addClass('icon');
            this.btn=$('<button>').appendTo(this.element);
            this.img=$('<img>',{src:this.options.img}).appendTo(this.btn);
            this.text=$('<p>').appendTo(this.btn); 
            this.text.append(this.options.name);
        },
        _setOptions: function () {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
        },

        // _setOption is called for each individual option that is changing
        _setOption: function (key, value) {
            this._super(key, value);
        }
    });
});
// // <dir class="icon">
// <button>
// <img src="Webchat/img/person1.png" alt="" />
// <p>Neymar</p>
// </button>
// </dir>
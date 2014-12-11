/* jshint devel:true */

(function ($) {
	var test = Backbone.View.extend({
		el: $('.list-container'),

		events: {
			'click button#add': 'addItem'
		},

		initialize: function () {
			this.counter = 0;
			this.render();
		},

		render: function () {
			$(this.el).append("<button id='add'>Add list item</button>");
			$(this.el).append("<ul></ul>");
		},
		
		addItem: function () {
			console.log(this);
			this.counter++;
			$('ul', this.el).append("<li>hello world"+this.counter+"</li>");
		}
	});

	new test();
}(jQuery));
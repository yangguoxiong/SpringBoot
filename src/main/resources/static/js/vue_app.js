;(function ($) {
	var app = new Vue({
		el: "#vue_root",
		data: {
			name: "stark",
			sex: "man",
			json: "william"
		},
		methods: {
			getName: function () {
				return this.name;
			},
			submitClick: function (event) {
				NProgress.start();
				setTimeout(function () {
					NProgress.done();
				},3000);
			},
			toHomePage: function (event) {
				NProgress.start();
				setTimeout(function () {
					window.location.href = "/";
					NProgress.done();
				},10);
			}
		}

	});
}) (jQuery);
$(function () {
	$("#showLoading").on("click", function () {
		//这个Loading变量在global中定义了就可以使用了.
		Loading.show();
	});
});
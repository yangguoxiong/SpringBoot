$(function () {
    $(".th-add-contact-info .checkbox-label").click(function() {
        if ($(".th-add-contact-info .checkbox-label").find("input[type='checkbox']").prop('checked')) {
            console.log("checked");
            $(this).siblings(".add-contact-info-form").addClass("hidden");
            $(this).siblings(".checkbox-text").children(".checkbox-title").addClass("highlight-green");
        } else {
            $(this).siblings(".add-contact-info-form").removeClass("hidden");
            $(this).siblings(".checkbox-text").children(".checkbox-title").removeClass("highlight-green");
        }
    });
});
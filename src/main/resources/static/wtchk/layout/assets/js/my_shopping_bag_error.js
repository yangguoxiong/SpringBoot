$(function() {
    $(".globalWrapper").addClass("show-mobile-menu-3");
    $(".mobile-menu-3 span").text("購物袋");

    $(".bill_information .title .icon-icon_arrow").click(function() {
        if ($(this).parent().parent().hasClass("active")) {
            $(this).parent().parent().find(".drop-box").slideUp();
            $(this).parent().parent().removeClass("active");
        } else {
            $(this).parent().parent().find(".drop-box").slideDown();
            $(this).parent().parent().addClass("active")
        }
    })
    $(".bill_information .title .close-btn").click(function() {
        $(".bill_information-box").removeClass("show_mobile");
    })
    $(".bill_information-overflow .total_price .icon-information-icon").click(function() {
        $(".bill_information-box").addClass("show_mobile");
    })
    $("body").on("click", ".myBasketTableProduct .productRelated", function() {
        $(this).parent().parent().toggleClass("show_myBasketTableSubProduct");
    })
    $("body").on("click", ".myBasketTableProduct .hide-all", function() {
        $(this).parent().parent().parent().removeClass("show_myBasketTableSubProduct");
    })
    $("body").on("click", ".myBasketTableProduct .Show_More_Promotion", function() {
        $(this).parent().addClass("show_all");
    })
    $(".buyBar .count").on("click", ".add", function() {
        var value = $(this).parent().find("input").val();
        if (value < 99) {
            value++;
            $(this).parent().find("input").val(value);
        }
        if (value < 99) {
            $(this).parent().find(".sub").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".buyBar .count").on("click", ".sub", function() {
        var value = $(this).parent().find("input").val();
        if (value > 0) {
            value--;
            $(this).parent().find("input").val(value);
        }
        if (value > 0) {
            $(this).parent().find(".add").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".buyBar .count").on("change", "select", function() {
        var value = $(this).val();
        $(this).parent().find('input').val(value);
    });
    $(".delivery_way .way1").on("change", function() {
        if ($(this).find("option:selected").data("way") == "two") {
            $(".delivery_way .way2").removeClass("hide");
            $(".paymentContentTopBottomBox .remind-box ul , .bill_information .remind-box ul").addClass("hide");
            $(".paymentContentTopBottomBox .remind-box span , .bill_information .remind-box span").removeClass("hide");
            $(".freight_status .one").addClass("hide");
            $(".freight_status .two").removeClass("hide");
            $(".owe").addClass("hide");
        } else {
            $(".delivery_way .way2").addClass("hide");
            $(".paymentContentTopBottomBox .remind-box span , .bill_information .remind-box span").addClass("hide");
            $(".paymentContentTopBottomBox .remind-box ul , .bill_information .remind-box ul").removeClass("hide");
            $(".freight_status .two").addClass("hide");
            $(".freight_status .one").removeClass("hide");
            $(".owe").removeClass("hide");
        }
    })
    $("body").on("click", ".myBasketContent .productRemove .icon-delete", function() {
        $(this).parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click", ".myBasketContent .productInfoControl .Save_for_later", function() {
        $(".part-next-time .myBasketTable").append($(this).parent().parent().parent().prop('outerHTML'));
        $(this).parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click", ".myBasketContent .productInfoControl .Move_to_bag", function() {
        $("." + $(this).parent().parent().parent().data("delivery") + " .myBasketTable").append($(this).parent().parent().parent().prop('outerHTML'));
        $(this).parent().parent().parent().remove();
        removeEmptyTable();
    })
    $("body").on("click", ".mobileProductPromotion", function() {
        $(this).parent().toggleClass("show_all");
    })
    $("body").on("click", ".part-next-time .Show_more", function() {
        $(this).parent().toggleClass("show-all");
    })

    function removeEmptyTable() {
        $(".myBasketTable").each(function() {
            if ($(this).find(".myBasketTableProduct").length > 0) {
                $(this).parent(".myBasketContent").removeClass("hide");
            } else {
                $(this).parent(".myBasketContent").addClass("hide");
            }
        })
    }
})
//20171127   szy
$(function () {  
    var scriptsArray = new Array();
    $.cachedScript = function (url, options) { for (var s in scriptsArray) { if (scriptsArray[s] == url) { return { done: function (method) { if (typeof method == "function") { method() } } } } } options = $.extend(options || {}, { dataType: "script", url: url, cache: true }); scriptsArray.push(url); return $.ajax(options) };
    //筛选隐藏显示更多
    $(".showMore").click(function (event) {
        event.preventDefault();
        var ticon = $(this).find("i");
        tspan = $(this).find("span");
        if ($(this).hasClass("zk")) {
            $(this).siblings(".showCon").css("height", "30px");
            ticon.removeClass("icon-shang1");
            ticon.addClass("icon-xia1");
            tspan.html("更多");
            $(this).removeClass("zk")
        } else {
            $(this).siblings(".showCon").css("height", "auto");
            ticon.removeClass("icon-xia1");
            ticon.addClass("icon-shang1");
            tspan.html("隐藏");
            $(this).addClass("zk")
        }
    });
});

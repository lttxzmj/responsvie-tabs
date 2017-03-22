var timeoutid;
$(function() {
    $('.tabfisrst li').each(function(index) {
        var liNode = $(this);
        $(this).mouseover(function() {
            timeoutid = setTimeout(function() {
                $('div.content').removeClass('content');
                $('.tabfisrst li.tabin').removeClass('tabin');
                $('div').eq(index).addClass('content');
                liNode.addClass('tabin');
            }, 300);
        }).mouseout(function() {
            clearTimeout(timeoutid);
        })
    })
});

var t = $('#t');

function tick() {
    var d = new Date();
    var h = ('0' + d.getHours()).slice(-2);
    var m = ('0' + d.getMinutes()).slice(-2);
    var s = ('0' + d.getSeconds()).slice(-2);
    // var m = d.getMinutes();
    // var s = d.getSeconds();

    var t_to_show = h + " " + m + " " + s;
    t.text(t_to_show);
    document.title = t_to_show;
}

$(document).ready(function() {
    (function(){
            tick();
            setTimeout(arguments.callee, 500);
    })();
});

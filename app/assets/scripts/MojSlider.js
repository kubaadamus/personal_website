var main = document.getElementById('cube');







$(document).ready(function(){
    $(main).mouseup(function(){
        $(main).text(WindowOffset);
    });
    $(main).mousedown(function(){
        $(main).text(WindowOffset);
    });
});
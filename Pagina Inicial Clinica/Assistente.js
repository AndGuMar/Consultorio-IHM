window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var assistente = document.getElementById("assistente");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        assistente.style.bottom = "20px";
    } else {
        assistente.style.bottom = "-10px";
    }
}
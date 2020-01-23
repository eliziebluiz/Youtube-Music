document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector("#video");
    var canvas = document.querySelector("#c");
    var context = canvas.getContext("2d");

    var cont = 0;
    var draw = function() {
        if (video.paused || video.ended) return;
        var x = 0;
        var y = 0;
        context.drawImage(video, x, y, canvas.width, canvas.height);
        var imageData = context.getImageData(x, y, canvas.width, canvas.height);
        context.putImageData(imageData, x, y);
        var image = new Image();
        image.src=canvas.toDataURL("image/png");
        image.width = 120;
        if(cont++ % 200 == 0){
            var imgs=document.querySelector("#imgs");
            imgs.appendChild(image);
        }    
        requestAnimationFrame(draw);
    }

    video.addEventListener("play", function() {
        if (video.paused || video.ended) return;
        draw();
    });
});

/**
 * Função inicio
 *      Função que organiza a lista de videos
 **/
inicio();

function inicio(){
    var corrente = 0;
    var video = $("#video");
    var playlist = $("#videos");
    var tracks= playlist.find("li a");
    var len= tracks.length-1;
    video[0].play();
    playlist.find("a").click(function(e){ 
        e.preventDefault();
        link = $(this);
        corrente = link.parent().index();
        exe(link, video[0]);
    });
    video[0].addEventListener("ended", function(e){
        exe($(link), video[0]);
    });
}

function exe(link, player){
    player.src=link.attr("href");
    par=link.parent();
    par.addClass("active").siblings.removeClasss("active");
    player.load();
    player.play();
}

/**
 * Funções efeito
 *      Funções que organizam as entradas e saidas de efeitos do reprodutor. 
 **/

function eft1() {
    document.getElementById("video").classList.remove('efeito2');
    document.getElementById("video").classList.remove('efeito3');
    document.getElementById("video").classList.remove('efeito4');
    document.getElementById("video").classList.remove('efeito5');
    document.getElementById("video").classList.add('efeito1');
}

function eft2() {
    document.getElementById("video").classList.remove('efeito1');
    document.getElementById("video").classList.remove('efeito3');
    document.getElementById("video").classList.remove('efeito4');
    document.getElementById("video").classList.remove('efeito5');
    document.getElementById("video").classList.add('efeito2');
}

function eft3() {
    document.getElementById("video").classList.remove('efeito1');
    document.getElementById("video").classList.remove('efeito2');
    document.getElementById("video").classList.remove('efeito4');
    document.getElementById("video").classList.remove('efeito5');
    document.getElementById("video").classList.add('efeito3');
}

function eft4() {
    document.getElementById("video").classList.remove('efeito1');
    document.getElementById("video").classList.remove('efeito2');
    document.getElementById("video").classList.remove('efeito3');
    document.getElementById("video").classList.remove('efeito5');
    document.getElementById("video").classList.add('efeito4');
}

function eft5() {
    document.getElementById("video").classList.remove('efeito1');
    document.getElementById("video").classList.remove('efeito2');
    document.getElementById("video").classList.remove('efeito3');
    document.getElementById("video").classList.remove('efeito4');
    document.getElementById("video").classList.add('efeito5');
}

function desfazerTudo(){
    document.getElementById("video").classList.remove('efeito1');
    document.getElementById("video").classList.remove('efeito2');
    document.getElementById("video").classList.remove('efeito3');
    document.getElementById("video").classList.remove('efeito4');
    document.getElementById("video").classList.remove('efeito5');
}

let musica = document.querySelector('audio');


//Eventos
document.querySelector('.pause').addEventListener('click', tocarMusica);

document.querySelector('.stop').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

musica.addEventListener('loadeddata', duration);


//Funções
function tocarMusica (){
    musica.play();
    document.querySelector('.stop').style.display = 'block';
    document.querySelector('.pause').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.stop').style.display = 'none';
    document.querySelector('.pause').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
}

function duration(){
    let duracaoMusica = document.querySelector('.inicio');
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(music.duration));
}

function segundosParaMinutos(segundos) {
    let campoMinuto = Math.floor (segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinuto+':'+campoSegundos;
}

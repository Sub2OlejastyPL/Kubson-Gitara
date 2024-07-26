const videoSrc = localStorage.getItem('vSrc') + '.mp4';
const videoName = localStorage.getItem('vAuth');
const videoAuth = localStorage.getItem('vName');

console.log(videoSrc, videoName, videoAuth);

const video = document.querySelector('video');
const vname = document.querySelector('.video-title');
const vauth = document.querySelector('.video-title-author');

function videoStart() {
    video.src = 'Kubson_gitara/' + videoSrc;
    vname.innerText = videoName;
    vauth.innerText = videoAuth;

    video.play();
}

document.addEventListener('DOMContentLoaded', videoStart());


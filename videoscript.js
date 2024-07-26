const videoTab = videoList;
const container = document.querySelector('.container');
const videoSec = document.querySelector('.videos');

const renderMiniVideos = (items) => {
    videoSec.innerHTML = '';

    for (i = 0; i < items.length; i++) {
        const newVideo = document.createElement('div');
        newVideo.className = 'video-item';
        newVideo.innerHTML = `
        <img src="miniatures/${items[i].miniature}.png" alt="video-img">
        <span class="video-title">${items[i].sName}</span>
        <p class="video-title-author">${items[i].sAuthor}</p>
        <button class="open-btn" value="${items[i].id}">Otwórz</button>`;

        videoSec.appendChild(newVideo);
    };

    const openBtn = document.querySelectorAll('button');
    
    openBtn.forEach(btn => btn.addEventListener('click', function(e){
        let id = e.target.value;

        let idItem = videoTab.at(id);

        localStorage.setItem('vSrc', idItem.videoSrc);
        localStorage.setItem('vName', idItem.sName);
        localStorage.setItem('vAuth', idItem.sAuthor);

        window.location.href = 'openvideo.html';
    }))
};


 

document.addEventListener('DOMContentLoaded', renderMiniVideos(videoTab));
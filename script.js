const logo = document.getElementById('logo');
const streamBtn = document.getElementById('streamBtn');
const videoBtn = document.getElementById('videoBtn');
const shopBtn = document.getElementById('shopBtn');
const fbBtn = document.getElementById('fbProblem');
const ytBtn = document.getElementById('ytProblem');

function navBtn() {
    logo.addEventListener('click', function() {
        window.location.href = 'index.html';
    })
    streamBtn.addEventListener('click', function() {
        window.location.href = 'stream.html';
    })
    videoBtn.addEventListener('click', function() {
        window.location.href = 'video.html';
    })
    shopBtn.addEventListener('click', function() {
        window.location.href = 'shop.html';
    })
    fbBtn.addEventListener('click', function() {
        window.open('https://www.facebook.com/profile.php?id=100086598939379', '_blank');
    })
    ytBtn.addEventListener('click', function() {
        window.open('https://www.youtube.com/@Kubson_Gitara-pp7jm', '_blank');
    })
}

// to na sam koniec musi
document.addEventListener('DOMContentLoaded', navBtn());
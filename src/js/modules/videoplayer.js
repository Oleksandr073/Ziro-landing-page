export default (function () {
    const videoPlayer = document.querySelector('.video__item');
    const playButton = document.querySelector('.video__button');

    playButton.addEventListener('click', event => {
        if (videoPlayer.paused) {
            videoPlayer.setAttribute('controls', '');
            videoPlayer.play();
        }
    });

    videoPlayer.addEventListener('pause', event => {
        playButton.style.display = '';
    });

    videoPlayer.addEventListener('play', event => {
        playButton.style.display = 'none';
    });

})();
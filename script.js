function checkInput() {
    var input = document.getElementById('inputField').value;

    if (!isNaN(input)) {
        checkNumber(parseInt(input, 10));
    } else {
        checkString(input);
    }
}

function checkNumber(number) {
    var digits = number.toString().split('').map(Number);
    var sum = digits.reduce((acc, val) => acc + val, 0);

    if (sum === 7) {
        showPopup('Thala for a Reason');
        playVideo('thalaVideo');
    } else {
        showPopup('moye moye');
        playVideo('moyeVideo');
    }
}

function checkString(word) {
    if (word.length === 7) {
        showPopup('Thala for a Reason');
        playVideo('thalaVideo');
    } else {
        showPopup('moye moye');
        playVideo('moyeVideo');
    }
}

function showPopup(message) {
    var popup = document.getElementById('result-popup');
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(function () {
        popup.style.display = 'none';
    }, 3000); // Display for 3 seconds
}

function playVideo(videoId) {
    var videoOverlay = document.getElementById('video-overlay');
    var thalaVideo = document.getElementById('thalaVideo');
    var moyeVideo = document.getElementById('moyeVideo');

    // Pause both videos before playing the appropriate one
    thalaVideo.pause();
    moyeVideo.pause();

    if (videoId === 'thalaVideo') {
        thalaVideo.style.display = 'block';
        moyeVideo.style.display = 'none';
        videoOverlay.style.display = 'flex';
        thalaVideo.play();
        thalaVideo.onended = function () {
            videoOverlay.style.display = 'none';
        };
    } else {
        thalaVideo.style.display = 'none';
        moyeVideo.style.display = 'block';
        videoOverlay.style.display = 'flex';
        moyeVideo.play();
        moyeVideo.onended = function () {
            videoOverlay.style.display = 'none';
        };
    }
}
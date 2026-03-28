$(document).ready(function() {
    const video = $('#mainVideo')[0];

    // 1. Play/Pause Logic
    $('#playPauseBtn, #mainVideo').on('click', function() {
        if (video.paused) {
            video.play();
            $('#playPauseBtn').fadeOut();
        } else {
            video.pause();
            $('#playPauseBtn').text('▶').fadeIn();
        }
    });

    // 2. Like Button Toggle
    $('.like-btn').on('click', function() {
        $(this).toggleClass('active');
        const isLiked = $(this).hasClass('active');
        $(this).text(isLiked ? '❤️' : '🤍');
        
        // Simple scale animation
        $(this).css('transform', 'scale(1.3)');
        setTimeout(() => $(this).css('transform', 'scale(1)'), 200);
    });

    // 3. Follow Button Toggle
    $('.follow-btn').on('click', function() {
        if ($(this).hasClass('btn-outline-danger')) {
            $(this).removeClass('btn-outline-danger').addClass('btn-light').text('Following');
        } else {
            $(this).addClass('btn-outline-danger').removeClass('btn-light').text('Follow');
        }
    });

    // 4. Auto-play attempt on load
    video.play().catch(error => {
        console.log("Autoplay blocked, waiting for user interaction.");
    });
});

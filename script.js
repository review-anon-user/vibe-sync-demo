// Demo Page Script
// This file can be used for interactive features

document.addEventListener('DOMContentLoaded', function () {
    console.log('Demo page loaded');

    // You can add interactive features here:
    // - Video synchronization
    // - Filter/sorting comparison pairs
    // - Metrics display
    // - Analytics tracking

    // Example: Pause all videos when any video starts playing
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', function () {
            // Optional: Pause other videos when one is playing
            // videos.forEach(v => {
            //     if (v !== video) v.pause();
            // });
        });
    });
});

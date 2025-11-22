import { useEffect, useState } from 'react';
import './Home.scss';

function Home({ videoRef, onVideoLoaded }) {

    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        videoEl.pause();
        videoEl.currentTime = 0;

        const checkBufferAndPlay = () => {
            const HAS_ENOUGH_DATA = 4;

            if (videoEl.readyState >= HAS_ENOUGH_DATA) {
                // Fully buffered — now delay + play
                videoEl.play()
                .then(() => {
                    console.log('Video playing smoothly.');
                })
                .catch(err => {
                    console.error('Error playing video:', err);
                });

                setTimeout(() => {
                    // Play the video first



                    if (onVideoLoaded) onVideoLoaded();
                }, 1000);
            } else {
                // Try again in a bit
                setTimeout(checkBufferAndPlay, 200);
            }
        };

        checkBufferAndPlay();

        // return () => {
        //     console.log("pausing")
        //     videoEl.pause();
        // };
    }, [videoRef, onVideoLoaded]);

    return (
        <div className="home-section">
            <video
                ref={videoRef}
                className="home-video"
                muted
                loop
                playsInline
                preload="auto"
                style={{
                    clipPath: 'circle(75% at 50% 50%)',
                    transition: 'opacity 0.5s ease', // Smooth transition for opacity change
                }}
            >
                <source src="https://saulefilms.info/img/watch-shorts/videos/test.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Home;

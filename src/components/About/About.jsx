import { useRef, useEffect } from 'react';
import './About.scss';
import { setupPageAnimations } from '../../utils/animations';


const qaImage = new URL('../../assets/images/about/qa.png', import.meta.url).href;
const screeningImage = new URL('../../assets/images/about/screening.png', import.meta.url).href;
const openMicImage = new URL('../../assets/images/about/openmic.png', import.meta.url).href;
const fomImage = new URL('../../assets/images/about/fom.png', import.meta.url).href;
const networkImage = new URL('../../assets/images/about/network.png', import.meta.url).href;

function About({ contentRef, videoRef, containerRef }) {
    const imagesContainerRef = useRef(null);

    useEffect(() => {
        // Set up the animation when components are mounted
        if (videoRef && contentRef && containerRef) {
            const timelines = setupPageAnimations(
                videoRef.current,
                contentRef.current,
                containerRef.current
            );

            return () => {
                // Kill the animations to prevent memory leaks
                if (Array.isArray(timelines)) {
                    timelines.forEach(tl => tl && tl.kill());
                } else if (timelines) {
                    timelines.kill();
                }
            };
        }
    }, [videoRef, contentRef, containerRef]);

    return (
        <div className="about-section">
            <div ref={contentRef} className="about-content">
                <h1>Watch Shorts is a short film festival based in London offering regular film screenings for filmmakers</h1>
            </div>

            <div className="images-section">
                <div ref={imagesContainerRef} className="images-container">
                    <div className="image-item">
                        <img src={qaImage} alt="About" />
                        <div className="image-caption">ABOUT</div>
                    </div>
                    <div className="image-item">
                        <img src={qaImage} alt="Events" />
                        <div className="image-caption">EVENTS</div>
                    </div>
                    <div className="image-item">
                        <img src={qaImage} alt="Gallery" />
                        <div className="image-caption">GALLERY</div>
                    </div>
                    <div className="image-item">
                        <img src={screeningImage} alt="Testimonials" />
                        <div className="image-caption">TESTIMONIALS</div>
                    </div>
                    <div className="image-item">
                        <img src={openMicImage} alt="Selections and winners" />
                        <div className="image-caption">SELECTIONS AND WINNERS</div>
                    </div>
                    <div className="image-item">
                        <img src={fomImage} alt="Filmmaker of the Month" />
                        <div className="image-caption">FILMMAKER OF THE MONTH</div>
                    </div>
                    <div className="image-item">
                        <img src={networkImage} alt="FAQ" />
                        <div className="image-caption">FAQ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
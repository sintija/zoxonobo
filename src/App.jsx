import { useState, useEffect, useRef } from "react";
import "./App.scss";

import IntroScreen from "./components/IntroScreen/IntroScreen";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import EventInfo from "./components/Events/Events";
// Import animations
import { setupPageAnimations } from "./utils/animations";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [progress] = useState(0);

	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const aboutContentRef = useRef(null);
	const eventInfoRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!isLoaded) return;

		// Initialize animation with a small delay for DOM
		const timer = setTimeout(() => {
			if (videoRef.current && aboutContentRef.current && containerRef.current) {
				setupPageAnimations(
					videoRef.current,
					aboutContentRef.current,
					containerRef.current,
					eventInfoRef.current
				);
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [isLoaded]);

	return (
		<div className="app" style={{ overflow: "hidden" }}>
			<>
				<Navigation />
				<div className="scroll-spacer"></div>
				<div ref={containerRef} className="content-container">
					<div className="about-wrapper">
						<About contentRef={aboutContentRef} />
					</div>
					<div className="home-wrapper">
						<Home videoRef={videoRef} onVideoLoaded={() => setIsLoaded(true)} />
					</div>
					<div className="event-info-wrapper">
						<EventInfo contentRef={eventInfoRef} />
					</div>
				</div>
				<IntroScreen isLoaded={isLoaded} progress={progress} />
			</>
		</div>
	);
}

export default App;

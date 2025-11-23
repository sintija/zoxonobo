import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animationConfig, getBreakpoint } from "./animationConfig";

gsap.registerPlugin(ScrollTrigger);

export const setupPageAnimations = (
	videoElement,
	aboutElement,
	containerElement,
	eventInfoElement
) => {
	if (!videoElement || !aboutElement || !containerElement) return;

	// Get current breakpoint
	const currentBreakpoint = getBreakpoint();
	console.log(
		`Current breakpoint: ${currentBreakpoint}, width: ${window.innerWidth}px`
	);

	const aboutSection = aboutElement.closest(".about-section");
	const imageItems = aboutSection.querySelectorAll(".image-item");
	const imagesSection = aboutSection.querySelector(".images-section");
	const imagesContainer = aboutSection.querySelector(".images-container");

	// Initial states setup
	gsap.set(aboutElement, {
		scale: animationConfig.initialScale[currentBreakpoint],
	});
	gsap.set(videoElement, { clipPath: "circle(75% at 50% 50%)" });

	gsap.set(imageItems, {
		y: 50,
		opacity: 0.2,
		scale: function (index) {
			const el = imageItems[index];
			return gsap.getProperty(el, "scale") * 0.85;
		},
	});

	// FIRST ANIMATION - Circle transition
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".scroll-spacer",
			start: "top top",
			end: "+=50%",
			scrub: 0.5,
			markers: true,
			id: "first-animation",
		},
	});

	tl.set(aboutSection, { opacity: 1, visibility: "visible" }, 0);

	// Circle closes
	tl.to(
		videoElement,
		{
			clipPath: "circle(0% at 50% 50%)",
			duration: 0.8,
			ease: "power3.inOut",
		},
		0
	);

	// Text scales
	tl.to(
		aboutElement,
		{
			scale: 1,
			duration: 0.8,
			ease: "power1.out",
		},
		0
	);

	// Images fade in
	tl.to(
		imageItems,
		{
			y: 0,
			opacity: 1,
			scale: function (index) {
				const el = imageItems[index];
				return gsap.getProperty(el, "scale") / 0.85;
			},
			duration: 0.7,
			stagger: 0.03,
			ease: "power1.inOut",
		},
		0.1
	);

	// SECOND ANIMATION - Moving elements into view
	const secondTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".scroll-spacer",
			start: "25% top",
			end: "+=70%",
			scrub: 1.5,
			markers: true,
			id: "second-animation",
		},
	});

	secondTl.to(
		aboutElement,
		{
			y: animationConfig.secondAnimation[currentBreakpoint].aboutY,
			opacity: animationConfig.secondAnimation[currentBreakpoint].aboutOpacity,
			filter: animationConfig.secondAnimation[currentBreakpoint].aboutBlur,
			duration: 5,
			ease: "power1.out",
		},
		0
	);

	secondTl.to(
		imagesSection,
		{
			y: animationConfig.secondAnimation[currentBreakpoint].imagesY,
			duration: 5,
			ease: "power1.out",
		},
		0
	);

	// Third Animation - Horizontal Scroll
	const thirdTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".scroll-spacer",
			start: animationConfig.thirdAnimation[currentBreakpoint].start,
			end: animationConfig.thirdAnimation[currentBreakpoint].end,
			scrub: animationConfig.thirdAnimation[currentBreakpoint].scrub,
			markers: true,
			id: "third-animation",
		},
	});

	thirdTl.fromTo(
		imagesContainer,
		{ x: "0" },
		{
			x: animationConfig.thirdAnimation[currentBreakpoint].x,
			duration: 3,
			ease: animationConfig.thirdAnimation[currentBreakpoint].ease,
		}
	);

	// Fourth Animation - Event Info Transition
	const fourthTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".scroll-spacer",
			start: animationConfig.fourthAnimation[currentBreakpoint].start,
			end: animationConfig.fourthAnimation[currentBreakpoint].end,
			scrub: 1,
			markers: true,
			id: "event-info-animation",
		},
	});

	fourthTl.to(
		imagesSection,
		{
			opacity: 0,
			duration: 0.8,
			ease: "power2.inOut",
			immediateRender: false,
		},
		0
	);

	const eventContainer = eventInfoElement.closest(".event-info-container");

	// Festival info fades in
	fourthTl.to(
		eventContainer,
		{
			opacity: 1,
			visibility: "visible",
			duration: 0.8,
			ease: "power2.inOut",
		},
		0.3
	);

	if (eventInfoElement) {
		const heading = eventInfoElement.querySelector("h2");
		const eventSections = eventInfoElement.querySelectorAll(".events-section");

		gsap.set(heading, { opacity: 0 });
		gsap.set(eventSections, { opacity: 0 });

		fourthTl.to(
			heading,
			{
				opacity: 1,
				duration: 0.5,
				ease: "power1.inOut",
			},
			0.6
		);

		fourthTl.to(
			eventSections,
			{
				opacity: 1,
				duration: 0.6,
				stagger: 0.2,
				ease: "power1.inOut",
			},
			0.8
		);
	}

	// Refresh ScrollTrigger after all animations are setup
	ScrollTrigger.refresh();

	return {
		timelines: [tl, secondTl, thirdTl, fourthTl],
		cleanup: () => {
			[tl, secondTl, thirdTl, fourthTl].forEach((timeline) => {
				if (timeline) timeline.kill();
			});
			ScrollTrigger.getAll().forEach((trigger) => {
				if (trigger) trigger.kill();
			});
		},
	};
};

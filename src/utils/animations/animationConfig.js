export const animationConfig = {
    initialScale: {
        mobile: 2,
        desktop: 3
    },
    secondAnimation: {
        mobile: {
            aboutY: "-10vh",
            aboutOpacity: 1,
            aboutBlur: "blur(0)",
            imagesY: "-12vh"
        },
        desktop: {
            aboutY: "-70vh",
            aboutOpacity: 0,
            aboutBlur: "blur(3px)",
            imagesY: "-60vh"
        }
    },
    thirdAnimation: {
        mobile: {
            start: "10% top",
            end: "+=300%",
            scrub: 2,
            x: "-820%",
            ease: "power1.inOut"
        },
        desktop: {
            start: "50% top",
            end: "+=200%",
            scrub: 1,
            x: "-90%",
            ease: "power2.inOut"
        }
    },
    fourthAnimation: {
        mobile: {
            start: "bottom+=20% bottom",
            end: "+=100%"
        },
        desktop: {
            start: "bottom+=40% bottom",
            end: "+=100%"
        }
    }
};

export const getBreakpoint = (width = window.innerWidth) => {
    return width <= 768 ? 'mobile' : 'desktop';
};
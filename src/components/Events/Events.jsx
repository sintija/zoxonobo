import { useEffect } from "react";
import "./events.scss";

const haloweenImg = new URL(
	"../../assets/images/events/haloween.jpeg",
	import.meta.url
).href;

function Events({ contentRef }) {
	// MORE EVENTS FOR SCROLLING - 10 TOTAL
	const upcomingEvents = [
		{
			id: 1,
			date: "4th June",
			title: "ARTHOUSE CROUCH END",
			description:
				"Join us for our next pre-screening on November 27th. Enjoy the short films, followed by networking.",
			buttonText: "GET TICKET",
			collageImage: haloweenImg,
		},
		{
			id: 2,
			date: "15th June",
			title: "SUMMER FILM SHOWCASE",
			description:
				"A special summer event featuring award-winning shorts from around the world. Q&A with filmmakers.",
			buttonText: "GET TICKET",
			collageImage: haloweenImg,
		},
		{
			id: 3,
			date: "28th June",
			title: "DOCUMENTARY NIGHT",
			description:
				"An evening dedicated to powerful documentary short films exploring social and environmental themes.",
			buttonText: "GET TICKET",
			collageImage: haloweenImg,
		},
	];

	const pastEvents = [
		{
			id: 4,
			date: "4th June",
			title: "ARTHOUSE CROUCH END",
			description:
				"Join us for our next pre-screening on November 27th. Enjoy the short films, followed by networking.",
			collageImage: haloweenImg,
		},
		{
			id: 5,
			date: "18th May",
			title: "SPRING FESTIVAL",
			description:
				"Our spring festival showcased emerging filmmakers from London and beyond. Networking drinks included.",
			collageImage: haloweenImg,
		},
		{
			id: 6,
			date: "2nd May",
			title: "HORROR SHORTS SPECIAL",
			description:
				"A spine-chilling evening of horror short films perfect for the Halloween season.",
			collageImage: haloweenImg,
		},
		{
			id: 7,
			date: "15th April",
			title: "COMEDY SHORTS NIGHT",
			description:
				"An evening of laughter featuring the best comedy short films from independent filmmakers.",
			collageImage: haloweenImg,
		},
		{
			id: 8,
			date: "1st April",
			title: "ANIMATION SHOWCASE",
			description:
				"Celebrating the art of animation with stunning short films from around the globe.",
			collageImage: haloweenImg,
		},
		{
			id: 9,
			date: "15th March",
			title: "INTERNATIONAL WOMEN'S DAY SPECIAL",
			description:
				"Celebrating female filmmakers with an evening of powerful short films by women directors.",
			collageImage: haloweenImg,
		},
		{
			id: 10,
			date: "1st March",
			title: "BLACK HISTORY MONTH SHOWCASE",
			description:
				"Highlighting Black voices in cinema with a curated selection of impactful short films.",
			collageImage: haloweenImg,
		},
	];

	const EventCard = ({ event, isPast }) => (
		<div className="event-card">
			<div className="event-collage">
				<img src={event.collageImage} alt={event.title} />
			</div>
			<div className="event-details">
				<h3 className="event-date">{event.date}</h3>
				<h2 className="event-title">{event.title}</h2>
				<p className="event-description">{event.description}</p>
				{!isPast && (
					<button className="event-button">{event.buttonText}</button>
				)}
			</div>
		</div>
	);

	useEffect(() => {
		const eventsContent = contentRef?.current;
		if (!eventsContent) return;

		const handleWheel = (e) => {
			e.preventDefault();
			e.stopPropagation();

			// Manually scroll the container
			eventsContent.scrollTop += e.deltaY;
		};

		// Use passive: false to allow preventDefault
		eventsContent.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			eventsContent.removeEventListener("wheel", handleWheel);
		};
	}, [contentRef]);

	return (
		<div className="event-info-container">
			<div ref={contentRef} className="events-content">
				<h2>EVENTS</h2>

				<div className="events-section">
					<h3 className="section-title">upcoming</h3>
					<div className="events-list">
						{upcomingEvents.map((event) => (
							<EventCard key={event.id} event={event} isPast={false} />
						))}
					</div>
				</div>

				<div className="events-section">
					<h3 className="section-title">past</h3>
					<div className="events-list">
						{pastEvents.map((event) => (
							<EventCard key={event.id} event={event} isPast={true} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Events;

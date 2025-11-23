import "./events.scss";

const haloweenImg = new URL(
	"../../assets/images/events/haloween.jpeg",
	import.meta.url
).href;

function Events({ contentRef }) {
	// Sample event data
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
	];

	const pastEvents = [
		{
			id: 2,
			date: "4th June",
			title: "ARTHOUSE CROUCH END",
			description:
				"Join us for our next pre-screening on November 27th. Enjoy the short films, followed by networking.",
			collageImage: haloweenImg,
		},

		{
			id: 2,
			date: "4th June",
			title: "ARTHOUSE CROUCH END",
			description:
				"Join us for our next pre-screening on November 27th. Enjoy the short films, followed by networking.",
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

// Find your Portfolio component and modify it to display events
function Events() {
  const events = [
    {
      id: 1,
      title: "CentralCee Concert",
      date: "30/04/2025",
      image: "/path/to/concert-image.jpg",
      description: "Live performance of CentralCee at [Venue Name]."
    },
    // Add more events as needed
  ];

  return (
    <section id="upcoming-events" className="upcoming-events-section">
      <h2 className="heading">Upcoming Events</h2>
      <div className="events-container">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-image-container">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
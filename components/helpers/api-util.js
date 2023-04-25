export async function getAllEvents() {
  const response = await fetch("http://localhost:3000/api/events");
  const data = await response.json();

  const events = data.events;
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventData(slug) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.slug === slug);
}

export async function getFilteredEvents(eventFilter) {
  const allEvents = await getAllEvents();
  const { year, month, category } = eventFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    const eventCategory = event.category;
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month - 1 &&
      eventCategory === category
    );
  });

  return filteredEvents;
}

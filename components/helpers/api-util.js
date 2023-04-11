export async function getAllEvents() {
  const response = await fetch(
    "https://eventour-app-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
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

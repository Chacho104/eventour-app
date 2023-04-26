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

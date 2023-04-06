const DUMMY_EVENTS = [
  {
    id: "e1",
    category: "Programming/Careers",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2023-05-12",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    category: "Health and Wellness",
    title: "Mental health awareness campaign",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2023-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    category: "Networking",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-10",
    image: "images/networking-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    category: "Music and clubbing",
    title: "Riverside Orchestra live performance",
    description:
      "Blow off some steam with this fun-filled music event. Dance your heart out all night with great renditions from the Riverside Orchestra.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-18",
    image: "images/riverside-orchestra.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    category: "Exhibition",
    title: "Vintage German cars from the 30's",
    description:
      "Come view the best cars from the 30's. Viewing is absolutely free of charge!",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2023-05-12",
    image: "images/vintage-exhibition.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    category: "Workshops and seminars",
    title: "Marketing workshop by Tom Jakes",
    description:
      "Come learn modern and effective marketing tips from a best selling modern marketing author, Tom Jakes.",
    location: "New Wall Street 5, 98765 New Work",
    date: "2023-04-25",
    image: "images/marketing-workshop.jpg",
    isFeatured: true,
  },
  {
    id: "e7",
    category: "Workshops and seminars",
    title: "Corporate investment dinner",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-10",
    image: "images/investment-dinner.jpg",
    isFeatured: true,
  },
  {
    id: "e8",
    category: "Music and Clubbing",
    title: "Music event for fun lovers",
    description:
      "Blow off some steam with this fun-filled music event. Dance your heart out all night with great hits from your favorite artists.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-06-10",
    image: "images/music-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

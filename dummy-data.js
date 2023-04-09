const DUMMY_EVENTS = [
  {
    id: "e1",
    category: "Career development",
    title: "The future of JavaScript and its frameworks",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhere",
    date: "2023-05-12",
    time: "16:00 - 19:00",
    price: "0.00",
    contact: "+ (254) 743423309",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    category: "Health and wellness",
    title: "Mental health awareness campaign",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2023-05-30",
    time: "14:00 - 17:00",
    price: "0.00",
    contact: "+ (254) 743423309",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    category: "Networking",
    title: "Effective networking 101: meet and greet",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-10",
    time: "16:00 - 19:00",
    price: "0.00",
    contact: "+ (254) 745423309",
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
    time: "20:00 - 23:00",
    price: "20.00",
    contact: "+ (254) 734423309",
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
    time: "11:00 - 16:00",
    price: "0.00",
    contact: "+ (254) 743423323",
    image: "images/vintage-exhibition.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    category: "Workshop",
    title: "Marketing workshop by Tom Jakes",
    description:
      "Come learn modern and effective marketing tips from a best selling modern marketing author, Tom Jakes.",
    location: "New Wall Street 5, 98765 New Work",
    date: "2023-04-25",
    time: "19:00 - 22:00",
    price: "25.00",
    contact: "+ (254) 743426609",
    image: "images/marketing-workshop.jpg",
    isFeatured: true,
  },
  {
    id: "e7",
    category: "Seminar",
    title: "Corporate investment dinner",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-10",
    time: "18:00 - 21:00",
    price: "15.00",
    contact: "+ (254) 743623319",
    image: "images/investment-dinner.jpg",
    isFeatured: true,
  },
  {
    id: "e8",
    category: "Music and clubbing",
    title: "Music event for fun lovers",
    description:
      "Blow off some steam with this fun-filled music event. Dance your heart out all night with great hits from your favorite artists.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-06-10",
    time: "22:00 - 04:00",
    price: "10.00",
    contact: "+ (254) 733423300",
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

export function getFilteredEvents(eventFilter) {
  const { year, month, category } = eventFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
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

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

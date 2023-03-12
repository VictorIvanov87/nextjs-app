export const getAllEvents = async () => {
  try {
    const res = await fetch(
      "https://events-nextjs-7097d-default-rtdb.europe-west1.firebasedatabase.app/events.json"
    );
    const data = await res.json();
    const events = [];

    for (const event in data) {
      events.push({
        id: event,
        ...data[event],
      });
    }

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event: any) => event.isFeatured);
};

export const getEventById = async (id: string) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

export const getFilteredEvents = async ({ year, month }: any) => {
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event: any) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

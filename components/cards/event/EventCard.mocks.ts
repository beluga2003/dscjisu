import { IEventCard } from './EventCard';

const base: IEventCard = {
  name: "Host Your code With Github",
  description: "Learn how to host your code with github",
  eventpic: "/events/host-your-code-with-github.png",
  locationUrl: "",
  date: "29th October 2022",
  eventLink: "",
  id: "",
  isCompleted: false,
  isActive: true,
  type: "hands-on",
  locationName: "Online",
  slug: "host-your-code-with-github",
};

export const mockEventCardProps = {
  base,
};

import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./EventItem.module.css";

interface EventItemProps {
  event: any;
}

const EventItem = ({ event }: EventItemProps) => {
  const humanReadbleDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = event.location.replace(",", "\n");
  const exploreLink = `/events/${event.id}`;

  return (
    <li>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={100}
        height={100}
      />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{humanReadbleDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

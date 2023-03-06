import React from "react";
import Image from "next/image";

import classes from "./EventItem.module.css";
import Button from "../UI/Button.component";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "./../icons/AddressIcon";
import ArrowRightIcon from "./../icons/ArrowRightIOcon";

interface EventItemProps {
  event: any;
}

const EventItem = ({ event }: EventItemProps) => {
  const humanReadbleDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = event.location.replace(", ", "\n");
  const exploreLink = `/events/${event.id}`;

  return (
    <li className={classes.item}>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={100}
        height={100}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadbleDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            Explore Event
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

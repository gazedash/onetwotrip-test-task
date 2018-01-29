// @flow
import React from "react";

type FlightProps = {
  id: number,
  direction: {
    from: string,
    to: string
  },
  departure: Date,
  arrival: Date,
  carrier: string,
  selected: string,
  formatDate: (uglyDate: Date) => string
};

const prettyDate = (uglyDate: Date | string) => {
  const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  if (typeof uglyDate === "string") {
    uglyDate = new Date(uglyDate);
  }
  const hours = uglyDate.getHours();
  const minutes = uglyDate.getMinutes();

  const month = monthes[uglyDate.getMonth()];
  const day = uglyDate.getUTCDate();

  const time = `${hours}:${minutes}`;
  const date = `${month}, ${day}`;

  return `${date} ${time}`;
};

const Flight = ({
  direction: { from, to },
  departure,
  arrival,
  carrier,
  formatDate = prettyDate
}: FlightProps) => {
  return (
    <div>
      <h5>
        {from} - {to}
      </h5>
      {`Departs ${formatDate(departure)} Arrives ${formatDate(arrival)}`}

      <h5>{carrier}</h5>
    </div>
  );
};

type WidgetProps = {
  carriers: string[],
  onSelect: (id: number) => void,
  flights: FlightProps[]
};

export const Widget = ({
  carriers = [],
  selected,
  onSelect = (id: number) => {},
  flights = []
}: WidgetProps) => {
  return (
    <div>
      {carriers.length ? (
        <select value={selected} onChange={onSelect}>
          {carriers.map(carrier => <option key={carrier}>{carrier}</option>)}
        </select>
      ) : null}
      <div>
        {flights.length ? "Flights" : "No flights available"}
        {flights.map(flight => <Flight key={flight.id} {...flight} />)}
      </div>
    </div>
  );
};

export default Widget;
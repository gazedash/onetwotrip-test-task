// @flow
import * as React from "react";
import {
  select,
  option,
  FlightRoot,
  FlightDest,
  FlightCarrier,
  FlightDate,
  Title
} from "../StyledComponents";

export type FlightProps = {
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

export const prettyDate = (uglyDate: Date | string) => {
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

export const Flight = ({
  direction: { from, to },
  departure,
  arrival,
  carrier,
  formatDate = prettyDate
}: FlightProps) => {
  return (
    <FlightRoot>
      <FlightDest>
        {from} - {to}
      </FlightDest>
      <div>
        Departs <FlightDate>{formatDate(departure)}</FlightDate> Arrives{" "}
        <FlightDate>{formatDate(arrival)}</FlightDate>
      </div>

      <FlightCarrier>{carrier}</FlightCarrier>
    </FlightRoot>
  );
};

export type WidgetProps = {
  carriers: string[],
  selected: string,
  onSelect: (id: number) => void,
  flights: FlightProps[],
  selectComponent: (props: *) => React$Element<*>,
  flightComponent: (props: FlightProps) => React$Element<*>,
  optionComponent: (props: *) => React$Element<*>,
  titleComponent: (props: *) => React$Element<*>
};

export const Widget = ({
  carriers = [],
  selected,
  onSelect = (id: number) => {},
  flights = [],
  selectComponent: Select = select,
  optionComponent: Option = option,
  flightComponent: FlightItem = Flight,
  titleComponent: TitleItem = Title
}: WidgetProps) => {
  return (
    <div>
      {carriers.length ? (
        <Select value={selected} onChange={onSelect}>
          {carriers.map(carrier => <Option key={carrier}>{carrier}</Option>)}
        </Select>
      ) : null}
      <div>
        <TitleItem>{flights.length ? "Flights" : "No flights available"}</TitleItem>
        {flights.map(flight => <FlightItem key={flight.id} {...flight} />)}
      </div>
    </div>
  );
};

export default Widget;

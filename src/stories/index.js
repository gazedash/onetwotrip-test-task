import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WidgetContainer from "../containers/Widget";
import { Widget } from "../components/Widget";
import Provider from "../store/provider";
import styled from "styled-components";

import { carriersState, flightsState } from "../store/reducers";

const CustomFlight = ({
  direction: { from, to },
  arrival,
  departure,
  carrier
}) => {
  return <div>{`${from} - ${to} ${arrival} - ${departure} ${carrier}`}</div>;
};

const CustomSelect = styled.select`
  background: red;
`;
const CustomOption = styled.option`
  background: blue;
`;

const CustomTitle = styled.div`
  color: green;
`;

storiesOf("Widget", module)
  .add("empty", () => <Widget />)
  .add("w/ carriers, no flights", () => <Widget carriers={carriersState} />)
  .add("w/ carriers, custom select, option & title", () => (
    <Widget
      optionComponent={CustomOption}
      selectComponent={CustomSelect}
      titleComponent={CustomTitle}
      carriers={carriersState}
    />
  ))
  .add("w/o carriers", () => <Widget flights={flightsState} />)
  .add("w/o carriers, custom Flight items", () => (
    <Widget flightComponent={CustomFlight} flights={flightsState} />
  ))
  .addDecorator(story => <Provider story={story()} />)
  .add("full data, connected to store", () => <WidgetContainer />);

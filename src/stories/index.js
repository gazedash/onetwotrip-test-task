import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WidgetContainer from "../containers/Widget";
import { Widget } from "../components/Widget";
import Provider from "../store/provider";

import {carriersState, flightsState} from "../store/reducers"

storiesOf("Widget", module)
  .add("empty", () => <Widget />)
  .add("w/ carriers, no flights", () => <Widget carriers={carriersState} />)
  .add("w/o carriers", () => <Widget flights={flightsState} />)
  .addDecorator(story => <Provider story={story()} />)
  .add("full data, connected to store", () => <WidgetContainer />);

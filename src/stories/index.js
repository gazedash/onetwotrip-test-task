import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Widget from "../containers/Widget";
import Provider from "../store/provider";

storiesOf("Widget", module)
  .addDecorator(story => <Provider story={story()} />)
  .add("empty", () => <Widget />)
  .add("w/ carriers, no flights", () => <Widget />)
  .add("w/o carriers", () => <Widget />)
  .add("full data", () => <Widget />);

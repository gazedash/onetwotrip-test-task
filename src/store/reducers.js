// @flow
import { combineReducers } from "redux";
import actions from "./actions";
import data from "../../data.json";

const flightsState = data.flights;
const defaultSelectedCarrier = "All carriers";
const carriersState = [
  defaultSelectedCarrier,
  ...Array.from(new Set(flightsState.map(item => item.carrier)))
];

const carriers = (state = carriersState) => state;
const flights = (state = flightsState, action) => {
  switch (action.type) {
    case actions.onCarrierSelect().type:
      const carrier = action.payload;
      if (carrier === defaultSelectedCarrier) {
        return flightsState;
      }
      return flightsState.filter(item => item.carrier === carrier);
    default:
      return state;
  }
};

const selectedCarrier = (state = defaultSelectedCarrier, action) => {
  switch (action.type) {
    case actions.onCarrierSelect().type:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ carriers, flights, selectedCarrier });

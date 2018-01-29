// @flow
import { createAction } from "redux-actions";

export const onCarrierSelect = createAction("CARRIER_SELECT");

const actions = {
  onCarrierSelect,
}
export default actions;
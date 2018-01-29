// @flow
import { connect } from "react-redux";
import Widget from "../components/Widget";
import actions from "../store/actions";

function mapStateToProps (state) {
    const { carriers, flights, selected } = state;
    return { carriers, flights, selected };
}

function mapDispatchToProps (dispatch) {
    return {
        onSelect: (e) => {
            const { value } = e.target;
            dispatch(actions.onCarrierSelect(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
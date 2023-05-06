import Hello from "../components/Hello";
import * as actions from "../actions/";
import { connect } from "react-redux";

export function mapStateToProps(store) {
  const {
    enthusiasm: { enthusiasmLevel, languageName },
  } = store;
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

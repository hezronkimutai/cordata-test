import Hello from "../components/OpenApiClient";
import * as actions from "../actions";
import { connect } from "react-redux";

export function mapStateToProps(store) {
  const {
    openapi: { choices },
  } = store;
  return { choices };
}

export function mapDispatchToProps(dispatch) {
  return {
    makeOpenApiReq: (input) => dispatch(actions.makeOpenApiReq(input)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

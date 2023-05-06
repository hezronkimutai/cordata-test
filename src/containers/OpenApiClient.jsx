import Hello from "../components/OpenApiClient";
import { makeOpenApiReqImages } from "../actions/getImages";
import { connect } from "react-redux";

export function mapStateToProps(store) {
  const { openapi } = store;
  return { ...openapi };
}

export function mapDispatchToProps(dispatch) {
  return {
    makeOpenApiReqImages: (baseTag, input) =>
      dispatch(makeOpenApiReqImages(baseTag, input)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

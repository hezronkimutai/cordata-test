import Hello from "../components/CordataClient";
import { generateImageTags, setLoading } from "../store/actions";
import { connect } from "react-redux";

export function mapStateToProps(store) {
  const { cordata } = store;
  return { ...cordata };
}

export function mapDispatchToProps(dispatch) {
  return {
    generateImageTags: (baseTag, input) =>
      dispatch(generateImageTags(baseTag, input)),
    setLoading: (loading) => dispatch(setLoading(loading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

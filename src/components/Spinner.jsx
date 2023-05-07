const Spinner = ({ loading }) => {
  return (
    (loading && (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    )) ||
    ""
  );
};
export default Spinner;

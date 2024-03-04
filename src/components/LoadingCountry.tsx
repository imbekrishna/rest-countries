const LoadingCountry = () => {
  return (
    <div className="country">
      <div className="country--flag loading--shimmer" />
      <div className="country--detail">
        <h2 className="loading--shimmer">&nbsp;</h2>
        <p className="loading--shimmer">&nbsp;</p>
        <p style={{ marginBlock: '5px' }} className="loading--shimmer">
          &nbsp;
        </p>
        <p className="loading--shimmer">&nbsp;</p>
      </div>
    </div>
  );
};
export default LoadingCountry;

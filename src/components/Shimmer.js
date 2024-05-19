const Shimmer = () => {
  return (
    <>
      <div className="shimmer-search-block">
        <div className="shimmer-search-bar"></div>
        <div className="shimmer-search-button"></div>
      </div>
      <div className="shimmer-card-block">
        {[...Array(10).keys()].map((number, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <h1 className="shimmer-header"></h1>
            <h4 className="shimmer-cusines"></h4>
            <p className="shimmer-rating"></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;

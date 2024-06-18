const Shimmer = () => {
  return (
    <>
      <div className="flex justify-end gap-4 pt-4 px-8">
        <div className="w-80 h-10 bg-slate-200 animate-pulse"></div>
        <div className="rounded-lg bg-slate-200 h-10 w-20 animate-pulse"></div>
      </div>
      <div className="flex gap-8 flex-wrap items-center justify-center p-8">
        {[...Array(10).keys()].map((number, index) => (
          <div
            className="shadow-xl h-[19.25rem] w-64 flex flex-col items-center justify-between animate-pulse"
            key={index}
          >
            <div className="w-64 h-40 bg-slate-200 rounded-md"></div>
            <h1 className="h-6 w-60 bg-slate-200 rounded-md my-4"></h1>
            <h4 className="h-8 w-60 m-0 bg-slate-200 rounded-md mb-4"></h4>
            <p className="h-4 w-12 bg-slate-200 rounded-md mb-4"></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;

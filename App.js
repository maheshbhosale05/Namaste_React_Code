const heading1 = React.createElement(
    "h1",
    { className: "heading", id: "title" },
    "Namste EveryOne!!"
  );
  const heading2 = React.createElement(
    "h1",
    { className: "heading", id: "title" },
    "Let's Start ReactJs Journey"
  );

  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
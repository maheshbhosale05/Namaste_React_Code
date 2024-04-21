import React from "react";
import ReactDOM from "react-dom/client"


// const heading1 = React.createElement(
//     "h1",
//     { className: "heading", id: "title1" },
//     "Namste EveryOne!!"
//   );
//   const heading2 = React.createElement(
//     "h1",
//     { className: "heading", id: "title2" },
//     "Let's Start ReactJs Journey"
//   );

//   const container = React.createElement("div", { id: "container" }, [
//     heading1,
//     heading2,
//   ]);


  const heading1 = (
    <h1 className="heading" id="title1">Namste EveryOne!!</h1>
  )

  const Heading = () => (
    <h1>Let's start reactjs journey</h1>
  )

  const container = (
    <div id="container">
    {heading1}
    <Heading />
    </div>
  )
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
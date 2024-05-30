import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../Profile";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor method call for About");
    this.intervalTimer;
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  componentDidMount() {
    console.log("componentDidMount method call for About");
    this.incrementCounter();
    this.intervalTimer = setInterval(
      () => console.log("setInterval call"),
      2000
    );
  }

  componentWillUnmount() {
    // Very import to clear your shit when you leave compoents
    clearInterval(this.intervalTimer);
  }

  render() {
    console.log("render method call for About");
    return (
      <div>
        <h1>If you want to know more about us...</h1>
        <h1>contact on +91 7719056451</h1>
        <Outlet />
        <Profile isAsync />
      </div>
    );
  }
}
export default AboutPage;

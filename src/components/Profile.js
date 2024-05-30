import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor method call for Profile");
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  timeOutFunction() {
    setTimeout(() => console.log("setTimeOut call"), 2000);
  }

  async componentDidMount() {
    let jsonData;
    if (this.props.isAsync) {
      const data = await fetch(`https://api.github.com/users/maheshbhosale05`);
      jsonData = await data.json();
    }

    console.log("componentDidMount method call for Profile", jsonData);
    this.incrementCounter();
  }

  render(props) {
    console.log("render method call for Profile");
    return (
      <div>
        <h1>Hey, Mahesh Bhosale Here</h1>
        <p>{this.state.counter}</p>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
      </div>
    );
  }
}

export default Profile;

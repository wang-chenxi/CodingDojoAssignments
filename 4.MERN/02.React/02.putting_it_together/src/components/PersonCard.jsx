import { className } from "postcss-selector-parser";
import react, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
    };
  }

  addAge = () => {
    let newAge = this.state.age;
    this.setState({
      age: ++newAge,
    });
  };

  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="card mb-5">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className="btn btn-primary" onClick={this.addAge}>
          Birthday Button for {firstName}
        </button>
      </div>
    );
  }
}

export default PersonCard;

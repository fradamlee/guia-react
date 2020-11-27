
// imr
import React from "react";

// ccc
class SimpleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default SimpleClass;

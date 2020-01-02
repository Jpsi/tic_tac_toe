import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue() {
    if (this.state.value == null) {
      this.setState({value: "X"});
    } else {
      this.setState({value: null})
    }
  }

  render() {
    return (
      <button className="square" onClick={this.changeValue}>
      {this.state.value}
      </button>
    );
  }
}

export default Square
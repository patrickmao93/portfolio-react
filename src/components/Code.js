import React from "react";

class Line extends React.Component {
  render() {
    return (
      <span className={`line ${this.props.color} w-${this.props.length}`} />
    );
  }
}

class Code extends React.Component {
  state = {
    lines: []
  };
  componentDidMount() {}

  generateLines(amount) {
    const colors = ["blue", "purple", "green", "yellow", "white", "red"];
    const lines = [];
    for (let i = 0; i < amount; i++) {
      const color = colors[Math.floor(Math.random() * 6)];
      const length = Math.ceil(Math.random() * 5);
      lines.push(<Line key={i} color={color} length={length} />);
    }
    return lines;
  }

  render() {
    return <div className="code">{this.generateLines(100)}</div>;
  }
}

export default Code;

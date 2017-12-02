import React from 'react';

class Box extends React.PureComponent {
  render() {
    return (
      <div className={`box ${this.props.className}`}>{this.props.children}</div>
    );
  }
}

export default Box;
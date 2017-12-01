import React from 'react';

class App extends React.PureComponent {


  render() {
    return (
      <div className="application">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;

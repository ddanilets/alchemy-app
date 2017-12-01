import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Hero from './Hero';
class Game extends React.PureComponent {

  render() {
    return (
      <div className="game">
        <div className="panel">
          <Hero hero={this.props.enemy} />
          <Hero hero={this.props.self} />
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    enemy: state.game.enemy,
    self: state.game.self,
  };
})(Game);

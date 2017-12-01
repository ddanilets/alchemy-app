import React from 'react';
import { connect } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import Hero from './Hero';
class Game extends React.PureComponent {

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="game">
          <div className="panel">
            <Hero hero={this.props.enemy} />
            <Hero hero={this.props.self} />
          </div>
          <Sidebar />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default connect((state) => {
  return {
    enemy: state.game.enemy,
    self: state.game.self,
  };
})(Game);

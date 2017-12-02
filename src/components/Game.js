import React from 'react';
import { connect } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import Hero from './Hero';
import { init } from '../redux/game/actions';

class Game extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const shouldMirror = this.props.enemy.id === this.props.self.id ? 'mirror' : '';
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="game">
          <div className="panel">
            <Hero hero={this.props.enemy} />
            <Hero hero={this.props.self} mirror={shouldMirror} />
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
}, { init })(Game);

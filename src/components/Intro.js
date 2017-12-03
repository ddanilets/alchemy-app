import React from 'react';
import { connect } from 'react-redux';
import { createGame } from '../redux/game/actions';
import fraction from './fractions';

class Intro extends React.PureComponent {
  constructor() {
    super();
  }

  createGame(id) {
    this.props.createGame(fraction.filter((el) => {
      return el.id === id;
    })[0]);
  }
  render() {
    return (
      <div className="fractions">
        {fraction.map((el, key) => {
          return <div key={key} className="fraction" onClick={() => { this.createGame(el.id); }}>{el.id}</div>;
        })}
      </div>
    );
  }
}

export default connect(null, { createGame })(Intro);

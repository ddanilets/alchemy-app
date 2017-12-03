import React from 'react';
import { connect } from 'react-redux';
import { createGame } from '../redux/game/actions';
import fractions from './fractions';

class Intro extends React.PureComponent {
  constructor() {
    super();

    this.createGame = ::this.createGame;
    this.renderFraction = ::this.renderFraction;
  }

  createGame(id) {
    this.props.createGame(fractions.filter((el) => {
      return el.id === id;
    })[0]);
  }

  renderFraction(fraction, key) {
    return (
      <div className={`fraction ${fraction.imageName}`} key={key} onClick={() => {
        this.createGame(fraction.id);
      }}
      >
        <div className={`fraction-image ${fraction.imageName}`} />
        <div className={`fraction-description ${fraction.imageName}`}>{fraction.description}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="fs-container fractions-container">
        {fractions.map(this.renderFraction)}
      </div>
    );
  }
}

export default connect(null, { createGame })(Intro);

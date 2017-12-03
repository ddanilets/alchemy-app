import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Defeat extends React.PureComponent {
  constructor() {
    super();

    this.navigate = ::this.navigate;
  }

  navigate() {
    this.props.push('/start');
  }

  render() {
    return (
      <div className="fs-container">
        <button className="menu-button" onClick={this.navigate}>
          Меню
        </button>
        <div className="title">
          Поражение!
        </div>
        <div className="loot-box" />
      </div>
    );
  }
}

export default connect(null, { push })(Defeat);

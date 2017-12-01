import React from 'react';

class HpBar extends React.PureComponent {
  getHpHeight() {
    return `${300 * (this.props.currentHp / this.props.maxHp)}px`;
  }

  render() {
    return (
      <div className="hp-bar">
        {this.props.currentHp} HP
        <div className="hp-column">
          <div className="hp-column-inner" style={{ height: this.getHpHeight() }} />
        </div>
      </div>
    );
  }
}

export default HpBar;

import React from 'react';

class HpBar extends React.PureComponent {
  getHpWidth() {
    return `${485 * (this.props.currentHp / this.props.maxHp)}px`;
  }

  render() {
    if (this.props.currentHp) {
      return (
        <div className={`hp-bar ${this.props.className}`}>
          <div className="hp-row">
            <div className="hp-row-inner" style={{ width: this.getHpWidth() }} />
          </div>
        </div>
      );
    }
    return null;
  }
}

export default HpBar;

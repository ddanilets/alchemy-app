import React from 'react';

class HpBar extends React.PureComponent {
  getHpWidth(scale) {
    return `${485 * (scale / (this.props.maxHp + this.props.armor))}px`;
  }

  render() {
    if (this.props.currentHp) {
      return (
        <div className={`hp-bar ${this.props.className}`}>
          <div className="hp-row">
            <div className="hp-row-inner">
              <div className="line" style={{ width: this.getHpWidth(this.props.currentHp) }} />
              <div className="line armor" style={{ width: this.getHpWidth(this.props.armor) }} />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default HpBar;

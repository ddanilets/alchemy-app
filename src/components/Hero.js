import React from 'react';
import HpBar from './HpBar';

class Hero extends React.PureComponent {
  render() {
    return (
      <div className="hero">
        <HpBar currentHp={this.props.hero.currentHp} maxHp={this.props.hero.maxHp} />
        <div className={`hero-image ${this.props.hero.id} ${this.props.mirror}`} />
      </div>
    );
  }
}

export default Hero;

import React from 'react';
import HpBar from './HpBar';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { endTurn } from '../redux/game/actions';
import stringsMapping from './stringsMapping';

const boxTarget = {
  drop() {
    return { name: 'Hero' };
  },
};
@DropTarget('potion', boxTarget, (c, monitor) => ({
  connectDropTarget: c.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Hero extends React.PureComponent {
  constructor() {
    super();

    this.endTurn = ::this.endTurn;
  }

  endTurn() {
    this.props.endTurn();
  }

  render() {
    const disabled = this.props.canEndTurn ? '' : 'disabled';
    return this.props.connectDropTarget(
      <div className="hero">
        <HpBar
          currentHp={this.props.hero.currentHp}
          maxHp={this.props.hero.maxHp}
          className={this.props.displayButton ? 'bottom' : 'top'}
        />
        <div className={`hero-image ${this.props.hero.imageName} ${this.props.mirror}`} />
        {this.props.displayButton &&
          <button className={`end-btn ${disabled}`} onClick={this.endTurn}>
            { !this.props.canEndTurn &&
            <div className="clock">
              <div className="cup top">
                <div className="clock-sand" />
              </div>
              <div className="cup">
                <div className="clock-sand delayed" />
              </div>
            </div>
            }
            <span className="text">Закончить ход</span>
          </button>
        }
        <div className={this.props.displayButton ? ' effects bottom' : 'effects   top'}>
          {this.props.potions.map((el) => {
            return stringsMapping(el);
          })}
        </div>

      </div>
    );
  }
}

export default connect((state) => {
  return {
    canEndTurn: state.game.canEndTurn,
  };
}, { endTurn })(Hero);

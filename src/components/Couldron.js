import React from 'react';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { cookPotion } from '../redux/game/actions';

const boxTarget = {
  drop() {
    return { name: 'Couldron' };
  },
};
@DropTarget('ingridient', boxTarget, (c, monitor) => ({
  connectDropTarget: c.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Couldron extends React.PureComponent {
  constructor() {
    super();

    this.cookPotion = ::this.cookPotion;
  }

  cookPotion() {
    this.props.cookPotion();
  }

  renderContents() {
    return (
      <div className="contents">
        {this.props.data.contents.map((el) => {
          return (
            <div className="ingridient">{el.name}</div>
          );
        })}
      </div>
    );
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(
      <div className={"couldron-wrapper"}>
        <button onClick={this.cookPotion}>Готовить</button>
        <div className="couldron-inline-wrapper" >
          <div className={`couldron ${this.props.couldronType} ${isActive ? 'drop' : ''}`}>
            {this.renderContents()}
            <div className="bubble bubble-small-1" />
            <div className="bubble bubble-small-2" />
            <div className="bubble bubble-small-3" />
            <div className="bubble bubble-small-4" />
            <div className="bubble bubble-medium-1" />
            <div className="bubble bubble-medium-2" />
            <div className="bubble bubble-medium-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    data: state.game.couldron,
  };
}, { cookPotion })(Couldron);

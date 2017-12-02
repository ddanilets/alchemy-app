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

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(
      <div className={"couldron-wrapper"}>
        <div className="couldron-inline-wrapper" >
          <div className={`couldron ${this.props.couldronType} ${isActive ? 'drop' : ''}`} />
        </div>
        <button onClick={this.cookPotion}>Cook!</button>
      </div>
    );
  }
}

export default connect(null, { cookPotion })(Couldron);

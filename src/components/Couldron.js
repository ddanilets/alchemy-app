import React from 'react';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop() {
    return { name: 'Couldron' };
  },
};
@DropTarget('ingridient', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Couldron extends React.PureComponent {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(
      <div className={`couldron ${this.props.couldronType} ${isActive ? 'drop' : ''}`} />
    );
  }
}

export default Couldron;

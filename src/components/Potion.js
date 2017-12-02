import React from 'react';
import { DragSource } from 'react-dnd';
import { getPotionColor } from '../utils/utils';

const boxSource = {
  beginDrag(props) {
    return {
      dropItem: props.onDrop,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`); // eslint-disable-line no-alert
    }
  },
};

@DragSource('potion', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Potion extends React.PureComponent {
  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div
        className={`potion ${isDragging ? 'dragging' : ''}`}
        style={{ backgroundColor: getPotionColor(this.props), opacity: isDragging ? 0 : 1 }}
      >
        <div className="text">
          {this.props.name}
        </div>
      </div>
    );
  }
}


export default Potion;

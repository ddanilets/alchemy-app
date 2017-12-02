import React from 'react';
import { DragSource } from 'react-dnd';
import { getPotionColor } from '../utils/utils';
import Circle from '../static/svg/circle';
import Thin from '../static/svg/thin';
import Triangle from '../static/svg/triangle';

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
  constructor() {
    super();
    const r = Math.random();
    if (r <= 0.33) {
      this.icon = Circle;
    } else if (r <= 0.66) {
      this.icon = Thin;
    } else {
      this.icon = Triangle;
    }
  }
  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div
        className={`potion ${isDragging ? 'dragging' : ''}`}
        style={{ backgroundColor: getPotionColor(this.props), opacity: isDragging ? 0 : 1 }}
      >
        <this.icon color="#000" />
        <div className="text">
          {this.props.name}
        </div>
      </div>
    );
  }
}


export default Potion;

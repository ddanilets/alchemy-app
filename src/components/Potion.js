import React from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { playPotion } from '../redux/game/actions';
import { getPotionColor } from '../utils/utils';
import Circle from '../static/svg/circle';
import Thin from '../static/svg/thin';
import Triangle from '../static/svg/triangle';

const boxSource = {
  beginDrag(props) {
    return {
      playPotion: props.playPotion,
      id: props.id,
      uniqueId: props.uniqueId,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      item.playPotion({ id: item.id, uniqueId: item.uniqueId });
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

    const r2 = Math.random();
    if (r2 <= 0.33) {
      this.flag = 'red';
    } else if (r <= 0.66) {
      this.flag = 'blue';
    } else {
      this.flag = 'green';
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
        <div className={`text ${this.flag}`}>
          {this.props.name}
        </div>
      </div>
    );
  }
}


export default connect(null, { playPotion } )(Potion);

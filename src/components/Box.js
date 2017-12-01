import React from 'react';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
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
function getBox(type) {
  return @DragSource(type, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))
  class Box extends React.PureComponent {
    render() {
      const { isDragging, connectDragSource } = this.props;
      return connectDragSource(
        <div
          className={`${this.props.className} ${isDragging ? 'dragging' : ''}`}
          style={Object.assign({}, this.props.style, { opacity: isDragging ? 0 : 1 })}
        >
          <div className="text">
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}


export default getBox;

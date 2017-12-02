import React from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { dropIngridient } from '../redux/game/actions';

const boxSource = {
  beginDrag(props) {
    return {
      dropItem: props.dropIngridient,
      id: props.id,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      item.dropItem(item.id);
    }
  },
};

@DragSource('ingridient', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Ingridient extends React.PureComponent {
  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div
        className={`ingridient ${this.props.id} ${isDragging ? 'dragging' : ''}`}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <div className="text">
          {this.props.name}
        </div>
      </div>
    );
  }
}


export default connect(null, { dropIngridient })(Ingridient);

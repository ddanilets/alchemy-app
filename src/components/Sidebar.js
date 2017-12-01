import React from 'react';
import { connect } from 'react-redux';
import RecipeBook from './RecipeBook';
import { getPotionColor } from '../utils/utils';

class Sidebar extends React.PureComponent {
  static renderPotion(potion, key) {
    return (
      <div key={key} className="potion" style={{ backgroundColor: getPotionColor(potion) }}>
        {potion.name}
      </div>
    );
  }

  static renderIngridient(ingridient, key) {
    return <div key={key} className={`ingridient ${ingridient.id}`}>{ingridient.name}</div>;
  }

  render() {
    return (
      <div className="sidebar">
        <RecipeBook />
        <div className={`couldron ${this.props.couldronType}`} />
        <div className="potion-list">
          {this.props.potions.map(Sidebar.renderPotion)}
        </div>
        <div className="ingridient-list">
          {this.props.ingridients.map(Sidebar.renderIngridient)}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    couldronType: state.game.couldron.name,
    potions: state.game.potions,
    ingridients: state.game.ingridients,
  };
})(Sidebar);

import React from 'react';
import { connect } from 'react-redux';
import RecipeBook from './RecipeBook';
import Couldron from './Couldron';
import getBox from './Box';
import { getPotionColor } from '../utils/utils';

class Sidebar extends React.PureComponent {
  static renderPotion(potion, key) {
    const Box = getBox('potion');
    return (
      <Box key={key} className="potion" style={{ backgroundColor: getPotionColor(potion) }}>
        {potion.name}
      </Box>
    );
  }

  static renderIngridient(ingridient, key) {
    const Box = getBox('ingridient');
    return (
      <Box key={key} className={`ingridient ${ingridient.id}`}>
        {ingridient.name}
      </Box>
    );
  }

  render() {
    return (
      <div className="sidebar">
        <RecipeBook />
        <Couldron couldronType={this.props.couldronType} />
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

import React from 'react';
import { connect } from 'react-redux';
import RecipeBook from './RecipeBook';
import Couldron from './Couldron';
import Potion from './Potion';
import Ingridient from './Ingridient';
import Box from './Box';

class Sidebar extends React.PureComponent {
  static renderPotion(potion) {
    return <Potion {...potion} />;
  }

  static renderIngridient(ingridient) {
    return <Ingridient {...ingridient} />;
  }

  static renderEmptiness(count, renderer, target, className) {
    return new Array(count).fill(null).map((_, id) => {
      return target[id] || null;
    }).map((el, key) => {
      return (
        <Box key={key} className={className}>
          {
            el && renderer(el)
          }
        </Box>
      );
    });
  }

  render() {
    return (
      <div className="sidebar">
        <RecipeBook />
        <Couldron couldronType={this.props.couldronType} />
        <div className="potion-list">
          {Sidebar.renderEmptiness(4, Sidebar.renderPotion, this.props.potions, 'potion-wrapper')}
        </div>
        <div className="ingridient-list">
          {Sidebar.renderEmptiness(9,
            Sidebar.renderIngridient, this.props.ingridients, 'ingridient-wrapper')}
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    couldronType: state.game.couldron.name,
    potions: state.game.potions,
    ingridients: state.game.self.ingridients,
  };
})(Sidebar);

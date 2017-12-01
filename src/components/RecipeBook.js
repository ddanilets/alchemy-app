import React from 'react';
import { connect } from 'react-redux';
import { getPotionColor } from '../utils/utils';

class RecipeBook extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBookOpened: false,
    };
    this.toggleBook = ::this.toggleBook;
  }

  toggleBook() {
    this.setState({
      isBookOpened: !this.state.isBookOpened,
    });
  }

  static getIngridient(ingridient) {
    return ingridient.name;
  }

  static renderIngridient(a, b) {
    return `${a} + ${b}`;
  }

  static getPotion(potion) {
    return (
      <span className="potion" style={{ backgroundColor: getPotionColor(potion) }}>
      {potion.name}
      </span>
    );
  }

  static getRecipeIngridients(recipe) {
    return recipe.ingridients.map(RecipeBook.getIngridient).reduce(RecipeBook.renderIngridient);
  }

  static renderRecipe(recipe, key) {
    return (
      <div className="recipe" key={key}>
        {RecipeBook.getRecipeIngridients(recipe)} = {RecipeBook.getPotion(recipe.potion)}
      </div>
    );
  }

  render() {
    return (
      <div className="recipe-book">
        <button onClick={this.toggleBook}>Recipes</button>
        {
          this.state.isBookOpened &&
            <div className="recipes">
              {this.props.recipes.map(RecipeBook.renderRecipe)}
            </div>
        }
      </div>
    );
  }
}

export default connect((state) => {
  return {
    recipes: state.game.recipes,
  };
})(RecipeBook);

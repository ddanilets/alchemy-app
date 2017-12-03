import React from 'react';
import { connect } from 'react-redux';
import { getPotionColor } from '../utils/utils';

class RecipeBook extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBookOpened: false,
      search: null,
    };
    this.toggleBook = ::this.toggleBook;
    this.updateSearch = ::this.updateSearch;
  }

  toggleBook() {
    this.setState({
      isBookOpened: !this.state.isBookOpened,
      search: null,
    });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  getFilteredRecipes() {
    if (this.state.search === '' || !this.state.search) {
      return this.props.recipes;
    }
    return this.props.recipes.filter((recipe) => {
      return recipe.potion.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
          recipe.ingridients.map((ingridient) => {
            return ingridient.name;
          }).reduce((a, b) => {
            return `${a} ${b}`;
          }).toLowerCase().includes(this.state.search.toLowerCase());
    });
  }

  static renderIngridient(ingridient, key, arr) {
    if (key !== arr.length - 1) {
      return (
        <span className="ingridient" key={key}>
          <span className="image-wrapper">
            <span className={`${ingridient.imageName} image`} />
          </span>
          <span className="name">{ingridient.name}</span>
          <span className="plus">+</span>
        </span>
      );
    }
    return (
      <span className="ingridient" key={key}>
        <span className="image-wrapper">
          <span className={`${ingridient.imageName} image`} />
        </span>
        <span className="name">{ingridient.name}</span>
        </span>
    );
  }


  static getPotion(potion) {
    return (
      <span className="potion" style={{ backgroundColor: getPotionColor(potion) }}>
      {potion.name}
      <div className="description">{potion.description}</div>
      </span>
    );
  }

  static getRecipeIngridients(recipe) {
    return recipe.ingridients.map(RecipeBook.renderIngridient);
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
        <button onClick={this.toggleBook}>Рецепты</button>
        {
          this.state.isBookOpened &&
            <div>
              <div className="recipes">
                {this.getFilteredRecipes().map(RecipeBook.renderRecipe)}
              </div>
              <div className="recipes-bottom">
                <div className="cross-icon" onClick={this.toggleBook} />
              </div>
              <div className="recipes-top">
              <div className="input-wrapper">
                <input type="text" onChange={this.updateSearch} />
              </div>
              </div>
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

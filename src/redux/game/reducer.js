import * as constants from './constants';
import initialState from './initialState';
import { valueEqual } from '../../utils/utils';

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  const { type, payload } = action;
  switch (type) {
    case constants.CHANGE_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    case constants.DROP_INGRIDIENT: {
      return {
        ...state,
        ingridients: newState.ingridients.filter((ingridient) => {
          return ingridient.id !== payload;
        }),
        couldron: {
          ...state.couldron,
          contents: state.couldron.contents.concat(state.ingridients.filter((ingridient) => {
            return ingridient.id === payload;
          })),
        },
      };
    }
    case constants.COOK_POTION: {
      const mappedRecipes = state.recipes.filter((recipe) => {
        const mappedIngridients = recipe.ingridients.map((el) => { return el.id; });
        return valueEqual(state.couldron.contents.map(
          (item) => { return item.id; }), mappedIngridients);
      });
      if (mappedRecipes.length > 0) {
        return {
          ...state,
          potions: state.potions.concat(mappedRecipes[0].potion),
          couldron: {
            ...state.couldron,
            contents: [],
          },
        };
      }
      return {
        ...state,
        couldron: {
          ...state.couldron,
          contents: [],
        },
      };
    }
    default: {
      return state;
    }
  }
}

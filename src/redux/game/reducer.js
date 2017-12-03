import uuid from 'node-uuid';
import * as constants from './constants';
import initialState from './initialState';
import { valueEqual } from '../../utils/utils';

export default function (state = initialState, action) {
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
        self: {
          ...state.self,
          ingridients: state.self.ingridients.filter((ingridient) => {
            return ingridient.id !== payload;
          }),
        },
        couldron: {
          ...state.couldron,
          contents: state.couldron.contents.concat(state.self.ingridients.filter((ingridient) => {
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
          potions: state.potions.concat({ ...mappedRecipes[0].potion, uniqueId: uuid.v4() }),
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
    case constants.GAME_INIT: {
      return {
        ...state,
        ...payload,
      };
    }
    case constants.PLAY_POTION: {
      return {
        ...state,
        playedPotions: state.playedPotions.concat(payload),
        potions: state.potions.filter((potion) => {
          return potion.uniqueId !== payload.uniqueId;
        }),
      };
    }
    case constants.END_TURN: {
      return {
        ...state,
        ...payload,
        canEndTurn: true,
      };
    }
    case constants.DISABLE_END_TURN: {
      return {
        ...state,
        canEndTurn: false,
      };
    }
    case constants.ENABLE_END_TURN: {
      return {
        ...state,
        canEndTurn: true,
      };
    }
    default: {
      return state;
    }
  }
}

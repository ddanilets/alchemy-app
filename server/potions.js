import * as effectTypes from './effectTypes';
import * as targets from './targets';
import applyEffect from './effects';
class PotionList {
  constructor() {
    this._potions = [
      {
        id: 1,
        name: 'Аццкий фаербол',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            power: 10,
            target: targets.ENEMY,
          },
          {
            getType: () => effectTypes.HEAL,
            power: 10,
            target: targets.SELF,
          },
        ],
      },
    ];
  }

  getPotion(id) {
    return this._potions.filter((el) => {
      return el.id === id;
    })[0];
  }
}

const list = new PotionList();

export default list;

export function applyEffects(potion, caster, opponent) {
  potion.effects.forEach((effect) => {
    applyEffect(effect, caster, opponent);
  });
}
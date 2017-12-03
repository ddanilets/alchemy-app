import * as effectTypes from './effectTypes';
import * as targets from './targets';
import { applyEffect } from './effects';
class PotionList {
  constructor() {
    this._potions = [
      {
        id: 0,
        name: '"Я вижу твою слабость!"',
        description: 'Третий глаз открыт! Вы видите один слот для зелий противника, и получаете 20% уворота. Минусы - очков на три глаза нет.',
        effects: [
          {
            getType: () => effectTypes.SLOT_REVEAL,
            target: targets.ENEMY,
          },
          {
            getType: () => effectTypes.EVASION,
            power: 0.2,
            target: targets.SELF,
          },
        ],
      },
      {
        id: 1,
        name: 'Обратный флирт',
        description: 'Поцелуй меня в мой блестящий ...! Применяете одно случайное зелье противника против него же',
        effects: [
          {
            getType: () => effectTypes.MIRRORING,
            target: targets.SELF,
          },
        ],
      },
      {
        id: 2,
        name: 'Мантия невидимка',
        description: 'Эту стороны мантии я постирала волшебным порошком, а эту углём Магия Черного. Получите невидимость до следующего хода + сильный антидот',
        effects: [
          {
            getType: () => effectTypes.INVISIBILITY,
            target: targets.SELF,
          },
          {
            getType: () => effectTypes.ANTI_PDOT_HEAL,
            target: targets.SELF,
          },
        ],
      },
      {
        id: 3,
        name: 'Зелье обворожения',
        description: 'ОСТРОЖНО! Не путать с зельем Обморожения! Перенаправление случайного зелья противника + блокирует один слот для зелий противника',
        effects: [
          {
            getType: () => effectTypes.REDIRECT,
            target: targets.SELF,
          },
          {
            getType: () => effectTypes.BLOCK_POTION,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 4,
        name: 'Маленький нарядный энт',
        description: 'Уоооо! Посмотри какая лапочка. Противник засмотрелся и промазал. 35% шанс уворота от случайного зелья противника',
        effects: [
          {
            getType: () => Math.random() < 0.35 ? effectTypes.EVASION_PERCENTAGE : '',
            target: targets.SELF,
          },
        ],
      },
      {
        id: 5,
        name: 'Помада-файербол',
        description: 'Пиу-пиу! В умелых руках дажа помада может стрелять файерболами (если она сделана из языка дракона). 30 прямого урона',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 30,
          },
        ],
      },
      {
        id: 6,
        name: 'Газель земли',
        description: 'Лунная призма и не такое умеет. Противник засыпан и раздавлен. 15 прямого урона + блокирует один слот для зелий противника',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 15,
          },
          {
            getType: () => effectTypes.BLOCK_POTION,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 7,
        name: 'Танцы с бубном',
        description: 'Особый языческий (с языком) ритуал. Следующие 3 хода противник получает по 5 урона. Сильный яд',
        effects: [
          {
            getType: () => effectTypes.PDOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 3,
          },
        ],
      },
      {
        id: 8,
        name: 'Особый подорожник',
        description: 'Просто приложи его. Да, он измазан в крови единорога, оказалось что подорожник не помогает от огнестрела. Восстанови 25 здоровья',
        effects: [
          {
            getType: () => effectTypes.HEAL,
            target: targets.SELF,
            power: 25,
          },
        ],
      },
      {
        id: 9,
        name: 'Банный день',
        description: 'Банька всегда помогает. Главное чтобы лесной дух не привел братву. Восстанавливай 3 здоровья каждый ход. Получи слабый антидот',
        effects: [
          {
            getType: () => effectTypes.HOT,
            target: targets.SELF,
            power: 5,
            duration: 3,
          },
          {
            getType: () => effectTypes.ANTI_DOT_HEAL,
            target: targets.SELF,
          },
        ],
      },
      {
        id: 10,
        name: 'Призмострел',
        description: 'Зрелище шикарное! Горящие булыжники летят из калейдоскопа. 15 Урона',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 15,
          },
        ],
      },
      {
        id: 11,
        name: 'Таблеточки от лесника',
        description: 'Врачи убийцы! Лечат-калечат! Лечите и калечьте - антидот + 5 урона в течении 2 ходов.',
        effects: [
          {
            getType: () => effectTypes.ANTI_DOT_HEAL,
            target: targets.SELF,
          },
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.ENEMY,
            duration: 2,
            power: 5,
          },
        ],
      },
      {
        id: 12,
        name: 'Настоечка',
        description: 'Бухаем и сразу отдыхаем! Восстанови 10 здоровья. Восстанавливай еще по 5 на протяжении 2 ходов',
        effects: [
          {
            getType: () => effectTypes.HEAL,
            target: targets.SELF,
            power: 10,
          },
          {
            getType: () => effectTypes.HOT,
            target: targets.SELF,
            duration: 2,
            power: 5,
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

import * as targets from '../../server/targets';
import * as effectTypes from '../../server/effectTypes';

export default function(effect) {
  switch (effect.type) {
    case effectTypes.PURE_DMG:
      return `Нанесено ${effect.power} ед. урона`;
    case effectTypes.DOT_DMG:
      return `Эффект - яд. Урон - ${effect.power} ед. Длительность - ${effect.duration}`;
    case effectTypes.HOT:
      return `Эффект - лечение. Восстанавливает - ${effect.power} ед. Длительность - ${effect.duration}`;
    case effectTypes.PDOT_DMG:
      return `Эффект - сильный яд. Урон - ${effect.power} ед. Длительность - ${effect.duration}`;
    case effectTypes.LIFESTEAL:
      return `Эффект - лайфстил. Кража - ${effect.power} ед. Длительность - ${effect.duration}`;
    case effectTypes.ARMOR_UP:
      return `Восстановлено ${effect.power} ед. брони`;
    case effectTypes.BLOCK_INVENTORY:
      return 'Заблокирован слот ингридиентов';
    case effectTypes.BLOCK_POTION:
      return 'Заблокирован слот зелий';
    case effectTypes.BLOCK_COULDRON:
      return 'Заблокирован макс. объем котла';
    case effectTypes.HEAL:
      return `Восстановлено ${effect.power} ед. здоровья`;
    case effectTypes.ANTI_DOT_HEAL:
      return 'Снятие эффектов яда';
    case effectTypes.ANTI_PDOT_HEAL:
      return 'Снятие эффектов сильного яда';
    case effectTypes.REDIRECT:
      return 'Перенаправление зелья';
    case effectTypes.CLEAR_COULDRON:
      return 'Чистка котла';
    case effectTypes.CLEAR_POTION:
      return 'Чистка слота зелий';
    case effectTypes.MIRRORING:
      return 'Отражение эффекта зелья';
    case effectTypes.INVISIBILITY:
      return 'Невидимость';
    case effectTypes.SLOT_REVEAL:
      return 'Просмотр вражеского слота зелий';
    case effectTypes.MISSING_TURN:
      return 'Пропуск хода';
    case effectTypes.HP_SACRIFICE:
      return `Жертва ${effect.power} ед. здоровья, получено ${effect.multiplier * 100}% к урону`;
    case effectTypes.EVASION:
      return `Постоянный уворот силой в ${effect.power * 100}%`;
    case effectTypes.EVASION_PERCENTAGE:
      return 'Шанс увернутся от случайного заклинания';
    case effectTypes.REDUCE_TIME:
      return `Время хода уменьшено на ${effect.power} сек.`;
    default:
      return 'Эффект не сработал!';
  }
}

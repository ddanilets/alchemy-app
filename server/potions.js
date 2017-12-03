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
      {
        id: 13,
        name: 'Парадокс с Раксорикуса',
        description: 'Это существо, и не существо одновременно. Что это ? Правильно, минус 30 секунд к ходу противника, и в придачу 20 урона',
        effects: [
          {
            getType: () => effectTypes.REDUCE_TIME,
            target: targets.ENEMY,
            power: 30,
          },
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 20,
          },
        ],
      },
      {
        id: 14,
        name: 'Враганнигиляция',
        description: 'Жаль что такой хороший человек проиграл. 20 Урона + 10 урона каждый ход на протяжении 3 ходов (сильный яд)',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 20,
          },
          {
            getType: () => effectTypes.PDOT_DMG,
            target: targets.ENEMY,
            power: 10,
            duration: 3,
          },
        ],
      },
      {
        id: 15,
        name: 'Темная звезда',
        description: 'Звезда состоящая из латунных доспехов! Возьми себе один. 25 Брони',
        effects: [
          {
            getType: () => effectTypes.ARMOR_UP,
            target: targets.SELF,
            power: 25,
          },
        ],
      },
      {
        id: 16,
        name: 'Жижа для галактического вейпа',
        description: 'Парю где хочу, законом не запрещено. Сильный антидот. Наносит по 5 урона 3 хода',
        effects: [
          {
            getType: () => effectTypes.ANTI_PDOT_HEAL,
            target: targets.SELF,
          },
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 3,
          },
        ],
      },
      {
        id: 17,
        name: 'ОРБИТальный удар',
        description: 'Не берите жвачку у незнакомцев. 10 урона + Блокирует слот для ингридиента + блокирует слот в котле',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 10,
          },
          {
            getType: () => effectTypes.BLOCK_COULDRON,
            target: targets.ENEMY,
          },
          {
            getType: () => effectTypes.BLOCK_INVENTORY,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 18,
        name: 'Типа грибы, типа грибы, е',
        description: 'Говорящие грибы, сами съедят противника. Сильный яд - 5 урона на протяжении 5 ходов',
        effects: [
          {
            getType: () => effectTypes.PDOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 5,
          },
        ],
      },
      {
        id: 19,
        name: 'Межгалактический экспресс',
        description: '...увезет твоего противника в черную дыру. Места только плацкартные. Яд - 5 урона на протяжении 5 ходов + 20 Урона',
        effects: [
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 5,
          },
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 20,
          },
        ],
      },
      {
        id: 20,
        name: 'Лазерная установка без лазера',
        description: 'Зато больно бъет по башке. 15 Урона',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 15,
          },
        ],
      },
      {
        id: 21,
        name: 'Звезда жизни',
        description: 'Огромная станция построенная по приказу императора. Продает аскорбинки. Восстанавливает 10 здоровья и 10 брони',
        effects: [
          {
            getType: () => effectTypes.HEAL,
            target: targets.SELF,
            power: 10,
          },
          {
            getType: () => effectTypes.ARMOR_UP,
            target: targets.SELF,
            power: 10,
          },
        ],
      },
      {
        id: 22,
        name: 'Тахионный излучатель Джимбо',
        description: 'На самом деле револьвер. Стреляющий метеоритами. Наносит 5 урона и еще 5 на протяжении 2 ходов. Слабый яд',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 5,
          },
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.SELF,
            power: 5,
            duration: 2,
          },
        ],
      },
      {
        id: 23,
        name: 'Аптечка минус первой помощи',
        description: 'Не шутите с паралельными вселенными. Восстанавливает 10 единиц здоровья. Антидот',
        effects: [
          {
            getType: () => effectTypes.HEAL,
            target: targets.SELF,
            power: 10,
          },
          {
            getType: () => effectTypes.ANTI_DOT_HEAL,
            target: targets.SELF,
          },
        ],
      },
      {
        id: 24,
        name: 'Факин щит',
        description: 'Я отполировал свой щит. Восстанавливает 10 единиц брони',
        effects: [
          {
            getType: () => effectTypes.ARMOR_UP,
            target: targets.SELF,
            power: 10,
          },
        ],
      },
      {
        id: 25,
        name: 'Армагеддон',
        description: 'Твоему противнику поможет только Брюс Уиллис. 20 чистого урона, болкирует слот для зелий, убивает отца на астероиде.',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 20,
          },
          {
            getType: () => effectTypes.BLOCK_POTION,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 26,
        name: 'Ядерный удар!',
        description: 'Друзья в Пентагоне передают тебе привет. Противник получает 30 прямого урона, все твои вероятности увеличиваются на 15%',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: targets.ENEMY,
            power: 30,
          },
        ],
      },
      {
        id: 27,
        name: 'Коктейль Молотова',
        description: 'Говорили же тебе не играть с огнём, выбрось "игрушку". Противник будет получать 5 урона следующие 5 ходов, сильный яд',
        effects: [
          {
            getType: () => effectTypes.PDOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 5,
          },
        ],
      },
      {
        id: 28,
        name: 'Нитроглицерин',
        description: 'Тебе химичка говорила, что ты бездарь? Где феерверки?! С вероятностью 50% противник получит 25 прямого урона (тройка по химии), а ты чистишь свой котёл',
        effects: [
          {
            getType: () => Math.random() > 0.5 ? effectTypes.PURE_DMG : '',
            target: targets.ENEMY,
            power: 25,
          },
        ],
      },
      {
        id: 29,
        name: 'Алко-баттл',
        description: 'Алкоголизм, это не спорт, тут здоровье нужно, хватит ли его у тебя? С вероятнотью 50% противник пропустит следующий ход',
        effects: [
          {
            getType: () => Math.random() > 0.5 ? effectTypes.MISSING_TURN : '',
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 30,
        name: 'Пыль в глаза',
        description: 'Или ты мастер неожиданных атак, или домработница. С вероятностью 50% увернешься от следующего зелья соперника с прямым уроном',
        effects: [
          {
            getType: () => Math.random() > 0.5 ? effectTypes.EVASION_PERCENTAGE : '',
            target: targets.SELF,
          },
        ],
      },
      {
        id: 31,
        name: 'Реальный большой взрыв',
        description: 'Неизвестно, был ли он раньше, непонятно, будет ли сейчас. С вероятностью в 50% противник получит 40 прямого урона',
        effects: [
          {
            getType: () => Math.random() > 0.5 ? effectTypes.PURE_DMG : '',
            target: targets.ENEMY,
            power: 40,
          },
        ],
      },
      {
        id: 32,
        name: 'Медикаменты',
        description: 'Просроченные. Отечественные. С вероятностью 50% восстановишь 25 здоровья и получишь сильный антидот',
        effects: [
          {
            getType: () => Math.random() > 0.5 ? effectTypes.HEAL : '',
            target: targets.SELF,
            power: 25,
          },
          {
            getType: () => Math.random() > 0.5 ? effectTypes.ANTI_PDOT_HEAL : '',
            target: targets.SELF,
          },
        ],
      },
      {
        id: 33,
        name: '5 Мешков картошки',
        description: 'Ты продал картошку своему главному конкуренту (ЗАЧЕМ???)! Освобождаешь свой слот для зелья и блокируешь слот для зелья соперника',
        effects: [
          {
            getType: () => effectTypes.CLEAR_POTION,
            target: targets.SELF,
          },
          {
            getType: () => effectTypes.BLOCK_POTION,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 34,
        name: 'Чай для черных риелторов',
        description: 'Ублюдки, мать твою, хотели мою квартиру забрать, а ну идите сюда. 5 урона в течении 3 ходов, и блокирует слот для ингридиентов',
        effects: [
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 3,
          },
          {
            getType: () => effectTypes.BLOCK_INVENTORY,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 35,
        name: 'Фугас',
        description: 'Остался еще от деда. Взорватся уже не может, но все еще воняет дедом. Наносит 5 урона на протяжении 3 ходов, и блокирует слот котла',
        effects: [
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 3,
          },
          {
            getType: () => effectTypes.BLOCK_COULDRON,
            target: targets.ENEMY,
          },
        ],
      },
      {
        id: 36,
        name: 'ГАРЯЧАЯ КАРТОШКА',
        description: 'С кетчупом самое то. Наносит 5 урона. Непонятно только кому - шансы 50/50',
        effects: [
          {
            getType: () => effectTypes.PURE_DMG,
            target: Math.random() > 0.5 ? targets.ENEMY : targets.SELF,
            power: 5,
          },
        ],
      },
      {
        id: 37,
        name: 'Водочка с закуской',
        description: 'Может нам уже хватит сражатся? 5 урона на протяжении 3 ходов (Твари палёнку подсунули!)',
        effects: [
          {
            getType: () => effectTypes.DOT_DMG,
            target: targets.ENEMY,
            power: 5,
            duration: 3,
          },
        ],
      },
      {
        id: 38,
        name: 'Таблетки "Шахтерские"',
        description: 'Лечат конечно, но для тебя целый день потом становится ЧЕРНЫМ. 10 здоровья + антидот',
        effects: [
          {
            getType: () => effectTypes.ANTI_DOT_HEAL,
            target: targets.SELF,
          },
          {
            getType: () => effectTypes.HEAL,
            target: targets.SELF,
            power: 10,
          },
        ],
      },

    ];
  }

  getPotion(id) {
    return this._potions.filter((el) => {
        return el.id === id;
      })[0] || {
        getType: () => {
          return '';
        }
      };
  }
}

const list = new PotionList();

export default list;

export function applyEffects(potion, caster, opponent) {
  potion.effects.forEach((effect) => {
    applyEffect(effect, caster, opponent);
  });
}

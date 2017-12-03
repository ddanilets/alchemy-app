export default {
  potions: [],
  ingridients: [],
  self: {
    ingridients: [],
  },
  enemy: {},
  couldron: {
    name: 'Classic',
    contents: [],
  },
  recipes: [
    {
      ingridients: [
        {
          id: 26,
          name: 'Глаз предка',
          imageName: 'ancestor',
        },
        {
          id: 22,
          name: 'Колдовская пыль',
          imageName: 'magic-dust',
        },
        {
          id: 19,
          name: 'Лист священного дерева',
          imageName: 'holy-leaf',
        },
        {
          id: 2,
          name: 'Земля',
          imageName: 'ground',
        },
        {
          id: 5,
          name: 'Песок',
          imageName: 'sand',
        },
      ],
      potion: {
        id: 0,
        name: '"Я вижу твою слабость!"',
        description: 'Третий глаз открыт! Вы видите один слот для зелий противника, и получаете 20% уворота. Минусы - очков на три глаза нет.',
      },
    },
    {
      ingridients: [
        {
          id: 24,
          name: 'Любовная стрела',
          imageName: 'arrow',
        },
        {
          id: 22,
          name: 'Колдовская пыль',
          imageName: 'magic-dust',
        },
        {
          id: 21,
          name: 'Язык дракона',
          imageName: 'ground',
        },
      ],
      potion: {
        id: 1,
        name: 'Обратный флирт',
        description: 'Поцелуй меня в мой блестящий ...! Применяете одно случайное зелье противника против него же',
      },
    },
    {
      ingridients: [
        {
          id: 25,
          name: 'Шелк',
          imageName: 'silk',
        },
        {
          id: 22,
          name: 'Колдовская пыль',
          imageName: 'magic-dust',
        },
        {
          id: 3,
          name: 'Уголь',
          imageName: 'coal',
        },
      ],
      potion: {
        id: 2,
        name: 'Мантия невидимка',
        description: 'Эту стороны мантии я постирала волшебным порошком, а эту углём Магия Черного. Получите невидимость до следующего хода + сильный антидот',
      },
    },
    {
      ingridients: [
        {
          id: 24,
          name: 'Любовная стрела',
          imageName: 'arrow',
        },
        {
          id: 25,
          name: 'Шелк',
          imageName: 'silk',
        },
        {
          id: 19,
          name: 'Лист священного дерева',
          imageName: 'holy-leaf',
        },
        {
          id: 0,
          name: 'Вода',
          imageName: 'water',
        },
      ],
      potion: {
        id: 3,
        name: 'Зелье обворожения',
        description: 'ОСТРОЖНО! Не путать с зельем Обморожения! Перенаправление случайного зелья противника + блокирует один слот для зелий противника',
      },
    },
    {
      ingridients: [
        {
          id: 25,
          name: 'Шелк',
          imageName: 'silk',
        },
        {
          id: 19,
          name: 'Лист священного дерева',
          imageName: 'holy-leaf',
        },
        {
          id: 22,
          name: 'Колдовская пыль',
          imageName: 'magic-dust',
        },
      ],
      potion: {
        id: 4,
        name: 'Маленький нарядный энт',
        description: 'Уоооо! Посмотри какая лапочка. Противник засмотрелся и промазал. 35% шанс уворота от случайного зелья противника',
      },
    },
    {
      ingridients: [
        {
          id: 24,
          name: 'Любовная стрела',
          imageName: 'arrow',
        },
        {
          id: 21,
          name: 'Язык дракона',
          imageName: 'dragon',
        },
        {
          id: 20,
          name: 'Лунная призма',
          imageName: 'moon-prism',
        },
        {
          id: 1,
          name: 'Огонь',
          imageName: 'fire',
        },
      ],
      potion: {
        id: 5,
        name: 'Помада-файербол',
        description: 'Пиу-пиу! В умелых руках дажа помада может стрелять файерболами (если она сделана из языка дракона). 30 прямого урона',
      },
    },
    {
      ingridients: [
        {
          id: 21,
          name: 'Язык дракона',
          imageName: 'dragon',
        },
        {
          id: 20,
          name: 'Лунная призма',
          imageName: 'moon-prism',
        },
        {
          id: 2,
          name: 'Земля',
          imageName: 'ground',
        },
      ],
      potion: {
        id: 6,
        name: 'Газель земли',
        description: 'Лунная призма и не такое умеет. Противник засыпан и раздавлен. 15 прямого урона + блокирует один слот для зелий противника',
      },
    },
    {
      ingridients: [
        {
          id: 23,
          name: 'Лесной дух',
          imageName: 'Лесной дух',
        },
        {
          id: 21,
          name: 'Язык дракона',
          imageName: 'dragon',
        },
        {
          id: 18,
          name: 'Кровь единорога',
          imageName: 'unicorn',
        },
      ],
      potion: {
        id: 7,
        name: 'Танцы с бубном',
        description: 'Особый языческий (с языком) ритуал. Следующие 3 хода противник получает по 5 урона. Сильный яд',
      },
    },
    {
      ingridients: [
        {
          id: 23,
          name: 'Лесной дух',
          imageName: 'Лесной дух',
        },
        {
          id: 19,
          name: 'Лист священного дерева',
          imageName: 'holy-leaf',
        },
        {
          id: 3,
          name: 'Уголь',
          imageName: 'coal',
        },
      ],
      potion: {
        id: 8,
        name: 'Особый подорожник',
        description: 'Просто приложи его. Да, он измазан в крови единорога, оказалось что подорожник не помогает от огнестрела. Восстанови 25 здоровья',
      },
    },
    {
      ingridients: [
        {
          id: 23,
          name: 'Лесной дух',
          imageName: 'Лесной дух',
        },
        {
          id: 18,
          name: 'Кровь единорога',
          imageName: 'unicorn',
        },
        {
          id: 8,
          name: 'Подорожник',
          imageName: 'leaf',
        },
      ],
      potion: {
        id: 9,
        name: 'Банный день',
        description: 'Банька всегда помогает. Главное чтобы лесной дух не привел братву. Восстанавливай 3 здоровья каждый ход. Получи слабый антидот',
      },
    },
    {
      ingridients: [
        {
          id: 20,
          name: 'Лунная призма',
          imageName: 'moon-prism',
        },
        {
          id: 1,
          name: 'Огонь',
          imageName: 'fire',
        },
        {
          id: 2,
          name: 'Земля',
          imageName: 'ground',
        },
      ],
      potion: {
        id: 10,
        name: 'Призмострел',
        description: 'Зрелище шикарное! Горящие булыжники летят из калейдоскопа. 15 Урона',
      },
    },
    {
      ingridients: [
        {
          id: 19,
          name: 'Лист священного дерева',
          imageName: 'holy-leaf',
        },
        {
          id: 7,
          name: 'Грибочки',
          imageName: 'shrooms',
        },
        {
          id: 3,
          name: 'Уголь',
          imageName: 'coal',
        },
      ],
      potion: {
        id: 11,
        name: 'Таблеточки от лесника',
        description: 'Врачи убийцы! Лечат-калечат! Лечите и калечьте - антидот + 5 урона в течении 2 ходов.',
      },
    },
    {
      ingridients: [
        {
          id: 18,
          name: 'Кровь единорога',
          imageName: 'unicorn',
        },
        {
          id: 8,
          name: 'Подорожник',
          imageName: 'leaf',
        },
        {
          id: 0,
          name: 'Вода',
          imageName: 'water',
        },
      ],
      potion: {
        id: 12,
        name: 'Настоечка',
        description: 'Бухаем и сразу отдыхаем! Восстанови 10 здоровья. Восстанавливай еще по 5 на протяжении 2 ходов',
      },
    },
  ],
  bag: [],
  selectedFraction: {
    id: 1,
    health: 75,
    imageName: 'elf',
  },
  playedPotions: [],
  canEndTurn: true,
  usedPotions: [],

};

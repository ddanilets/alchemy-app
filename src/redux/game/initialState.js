export default {
  ingridients: [],
  self: {
    ingridients: [],
  },
  potions: [],
  enemy: {},
  couldron: {
    name: 'Classic',
    contents: [],
  },
  recipes: [],
  bag: [],
  selectedFraction: {
    id: 1,
    health: 75,
    imageName: 'elf',
  },
  playedPotions: [],
  canEndTurn: true,
  usedPotions: {
    player1: {},
    player2: {},
  },
  canInitGame: true,
};

const humanRecipes = [
  {
    ingridients: [
      {
        id: 17,
        name: 'Уран',
        imageName: 'nuke',
      },
      {
        id: 15,
        name: 'Бензин',
        imageName: 'petrol',
      },
      {
        id: 10,
        name: 'Воздух',
        imageName: 'holy-leaf',
      },
      {
        id: 6,
        name: 'Соль',
        imageName: 'salt',
      },
      {
        id: 1,
        name: 'Огонь',
        imageName: 'fire',
      },
    ],
    potion: {
      id: 26,
      name: 'Ядерный удар!',
      description: 'Друзья в Пентагоне передают тебе привет. Противник получает 30 прямого урона, все твои вероятности увеличиваются на 15%',
    },
  },
  {
    ingridients: [
      {
        id: 15,
        name: 'Бензин',
        imageName: 'petrol',
      },
      {
        id: 16,
        name: 'Ткань',
        imageName: 'fabric',
      },
      {
        id: 1,
        name: 'Огонь',
        imageName: 'fire',
      },
    ],
    potion: {
      id: 27,
      name: 'Коктейль Молотова',
      description: 'Говорили же тебе не играть с огнём, выбрось "игрушку". Противник будет получать 5 урона следующие 5 ходов, сильный яд',
    },
  },
  {
    ingridients: [
      {
        id: 12,
        name: 'Глицерин',
        imageName: 'glycerol',
      },
      {
        id: 10,
        name: 'Воздух',
        imageName: 'air',
      },
      {
        id: 6,
        name: 'Соль',
        imageName: 'salt',
      },
      {
        id: 3,
        name: 'Уголь',
        imageName: 'coal',
      },
    ],
    potion: {
      id: 28,
      name: 'Нитроглицерин',
      description: 'Тебе химичка говорила, что ты бездарь? Где феерверки?! С вероятностью 50% противник получит 25 прямого урона (тройка по химии), а ты чистишь свой котёл',
    },
  },
  {
    ingridients: [
      {
        id: 11,
        name: 'Спирт',
        imageName: 'alcohol',
      },
      {
        id: 14,
        name: 'Зарплата',
        imageName: 'salary',
      },
      {
        id: 9,
        name: 'Картошка',
        imageName: 'potato',
      },
      {
        id: 7,
        name: 'Грибочки',
        imageName: 'shrooms',
      },
    ],
    potion: {
      id: 29,
      name: 'Алко-баттл',
      description: 'Алкоголизм, это не спорт, тут здоровье нужно, хватит ли его у тебя? С вероятнотью 50% противник пропустит следующий ход',
    },
  },
  {
    ingridients: [
      {
        id: 13,
        name: 'Бытовая пыль',
        imageName: 'dust',
      },
      {
        id: 10,
        name: 'Воздух',
        imageName: 'air',
      },
      {
        id: 5,
        name: 'Песок',
        imageName: 'sand',
      },
    ],
    potion: {
      id: 30,
      name: 'Пыль в глаза',
      description: 'Или ты мастер неожиданных атак, или домработница. С вероятностью 50% увернешься от следующего зелья соперника с прямым уроном',
    },
  },
  {
    ingridients: [
      {
        id: 14,
        name: 'Зарплата',
        imageName: 'salary',
      },
      {
        id: 15,
        name: 'Бензин',
        imageName: 'petrol',
      },
      {
        id: 10,
        name: 'Воздух',
        imageName: 'holy-leaf',
      },
      {
        id: 12,
        name: 'Глицерин',
        imageName: 'glycerol',
      },
      {
        id: 2,
        name: 'Земля',
        imageName: 'ground',
      },
    ],
    potion: {
      id: 31,
      name: 'Реальный большой взрыв',
      description: 'Неизвестно, был ли он раньше, непонятно, будет ли сейчас. С вероятностью в 50% противник получит 40 прямого урона',
    },
  },
  {
    ingridients: [
      {
        id: 13,
        name: 'Бытовая пыль',
        imageName: 'dust',
      },
      {
        id: 14,
        name: 'Зарплата',
        imageName: 'salary',
      },
      {
        id: 8,
        name: 'Подорожник',
        imageName: 'leaf',
      },
    ],
    potion: {
      id: 32,
      name: 'Медикаменты',
      description: 'Просроченные. Отечественные. С вероятностью 50% восстановишь 25 здоровья и получишь сильный антидот',
    },
  },
  {
    ingridients: [
      {
        id: 16,
        name: 'Ткань',
        imageName: 'fabric',
      },
      {
        id: 9,
        name: 'Картошка',
        imageName: 'potato',
      },
      {
        id: 2,
        name: 'Земля',
        imageName: 'ground',
      },
    ],
    potion: {
      id: 33,
      name: '5 Мешков картошки',
      description: 'Ты продал картошку своему главному конкуренту (ЗАЧЕМ???)! Освобождаешь свой слот для зелья и блокируешь слот для зелья соперника',
    },
  },
  {
    ingridients: [
      {
        id: 13,
        name: 'Бытовая пыль',
        imageName: 'dust',
      },
      {
        id: 12,
        name: 'Глицерин',
        imageName: 'glycerol',
      },
      {
        id: 6,
        name: 'Соль',
        imageName: 'salt',
      },
      {
        id: 11,
        name: 'Спирт',
        imageName: 'alcohol',
      },
    ],
    potion: {
      id: 34,
      name: 'Чай для черных риелторов',
      description: 'Ублюдки, мать твою, хотели мою квартиру забрать, а ну идите сюда. 5 урона в течении 3 ходов, и блокирует слот для ингридиентов',
    },
  },
  {
    ingridients: [
      {
        id: 16,
        name: 'Ткань',
        imageName: 'fabric',
      },
      {
        id: 9,
        name: 'Картошка',
        imageName: 'potato',
      },
      {
        id: 12,
        name: 'Глицерин',
        imageName: 'glycerol',
      },
      {
        id: 4,
        name: 'Метал',
        imageName: 'metal',
      },
    ],
    potion: {
      id: 35,
      name: 'Фугас',
      description: 'Остался еще от деда. Взорватся уже не может, но все еще воняет дедом. Наносит 5 урона на протяжении 3 ходов, и блокирует слот котла',
    },
  },
  {
    ingridients: [
      {
        id: 9,
        name: 'Картошка',
        imageName: 'potato',
      },
      {
        id: 1,
        name: 'Огонь',
        imageName: 'fire',
      },
      {
        id: 5,
        name: 'Песок',
        imageName: 'sand',
      },
    ],
    potion: {
      id: 36,
      name: 'ГАРЯЧАЯ КАРТОШКА',
      description: 'С кетчупом самое то. Наносит 5 урона. Непонятно только кому - шансы 50/50',
    },
  },
  {
    ingridients: [
      {
        id: 11,
        name: 'Спирт',
        imageName: 'alcohol',
      },
      {
        id: 1,
        name: 'Грибочки',
        imageName: 'shrooms',
      },
      {
        id: 0,
        name: 'Вода',
        imageName: 'water',
      },
    ],
    potion: {
      id: 37,
      name: 'Водочка с закуской',
      description: 'Может нам уже хватит сражатся? 5 урона на протяжении 3 ходов (Твари палёнку подсунули!)',
    },
  },
  {
    ingridients: [
      {
        id: 10,
        name: 'Воздух',
        imageName: 'potato',
      },
      {
        id: 3,
        name: 'Уголь',
        imageName: 'coal',
      },
      {
        id: 8,
        name: 'Подорожник',
        imageName: 'leaf',
      },
    ],
    potion: {
      id: 38,
      name: 'Таблетки "Шахтерские"',
      description: 'Лечат конечно, но для тебя целый день потом становится ЧЕРНЫМ. 10 здоровья + антидот',
    },
  },
];
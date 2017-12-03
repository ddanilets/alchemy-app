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
          id: 0,
          name: 'Water',
          imageName: 'water',
        },
        {
          id: 1,
          name: 'Fire',
          imageName: 'fire',
        },
        {
          id: 2,
          name: 'Earth',
          imageName: 'ground',
        },
      ],
      potion: {
        id: 1,
        name: 'Аццкий фаербол',
        description: '10 Урона врагу, 10 хила себе, 10 из 10!',
      },
    },
    {
      ingridients: [
        {
          id: 0,
          name: 'Water',
          imageName: 'water',
        },
        {
          id: 1,
          name: 'Fire',
          imageName: 'fire',
        },
      ],
      potion: {
        id: 2,
        name: 'Potion of healing',
      },
    },
  ],
  bag: [],
  selectedFraction: {
    id: 2,
    health: 100,
    imageName: 'orc',
  },
  playedPotions: [],
  canEndTurn: true,
  usedPotions: [],

};

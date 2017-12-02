export default {
  potions: [],
  ingridients: [
    {
      id: 1,
      name: 'Water',
    },
    {
      id: 2,
      name: 'Fire',
    },
    {
      id: 3,
      name: 'Earth',
    },
    {
      id: 4,
      name: 'Water',
    },
    {
      id: 5,
      name: 'Water',
    },
    {
      id: 6,
      name: 'Water',
    },
    {
      id: 7,
      name: 'Water',
    },
    {
      id: 8,
      name: 'Water',
    },
    {
      id: 9,
      name: 'Water',
    },
  ],
  self: {
    maxHp: 100,
    currentHp: 63,
  },
  enemy: {
    maxHp: 120,
    currentHp: 50,
  },
  couldron: {
    name: 'Classic',
    contents: [],
  },
  recipes: [
    {
      ingridients: [
        {
          id: 1,
          name: 'Water',
        },
        {
          id: 2,
          name: 'Fire',
        },
        {
          id: 3,
          name: 'Earth',
        },
      ],
      potion: {
        id: 1,
        name: 'Potion of madness',
      },
    },
  ],
  bag: [],
};

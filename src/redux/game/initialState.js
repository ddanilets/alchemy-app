export default {
  potions: [],
  ingridients: [
    {
      id: 1,
      name: 'Water',
      imageName: 'water',
    },
    {
      id: 2,
      name: 'Fire',
      imageName: 'fire',
    },
    {
      id: 3,
      name: 'Earth',
      imageName: 'ground',
    },
    {
      id: 4,
      name: 'Water',
      imageName: 'water',
    },
    {
      id: 5,
      name: 'Water',
      imageName: 'water',
    },
    {
      id: 6,
      name: 'Water',
      imageName: 'water',
    },
    {
      id: 7,
      name: 'Water',
      imageName: 'water',
    },
    {
      id: 8,
      name: 'Water',
      imageName: 'water',
    },
    {
      id: 9,
      name: 'Water',
      imageName: 'water',
    },
  ],
  self: {
    maxHp: 100,
    currentHp: 63,
    id: 'elf',
  },
  enemy: {
    maxHp: 120,
    currentHp: 50,
    id: 'elf',
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
          imageName: 'water',
        },
        {
          id: 2,
          name: 'Fire',
          imageName: 'fire',
        },
        {
          id: 3,
          name: 'Earth',
          imageName: 'ground',
        },
      ],
      potion: {
        id: 1,
        name: 'Potion of madness',
      },
    },
    {
      ingridients: [
        {
          id: 1,
          name: 'Water',
          imageName: 'water',
        },
        {
          id: 2,
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
};

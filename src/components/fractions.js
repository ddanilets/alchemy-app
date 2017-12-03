export default [
  {
    id: 0,
    health: 100,
    imageName: 'human',
    description: 'Наш юный смузи пожиратель, типичный представитель своего времени, готов уже сейчас идти с тобой в бой. Юный гений расчехлил гироскутеры и завел армию своих дронов для борьбы со сказочными чудищами.',
    tile: 'human_tile',
    recipes: [
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
    ],
  },
  {
    id: 1,
    health: 75,
    tile: 'elf_tile',
    imageName: 'elf',
    description: 'Детское любопытство Элиниэль сыграло с ней злую шутку. Будучи еще маленькой девочкой, она упала в котел с приворотным зельем. Есть теория, что после этого она свихнулась и теперь готова очаровывать своих соперников обратным флиртом и бьет в самое сердечко стрелами любви.',
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
  },
  {
    id: 2,
    health: 125,
    tile: 'orc_tile',
    imageName: 'orc',
    description: 'Умритут Задиристый заслуженно носит свое имя. Этот парень гроза всех орочьих контор.  Какая ярость пылает в его глазах, когда он сдает годовые отчеты и выдает ежемесячные шкуры.  Наш орк настолько суров, что при виде его племена сами идут воевать, а кони готовы затоптать соперника насмерть.',
    recipes: [],
  },
  {
    id: 3,
    health: 50,
    tile: 'alien_tile',
    imageName: 'alien',
    armor: 50,
    description: 'О нем рассказывать долго не нужно: у Инопланетяныча самая простая миссия - замочить врагов. Процесс окисления уже начался, присоединиться или стать одним из глюков - решать только тебе!',
    recipes: [{
      ingridients: [
        {
          id: 44,
          name: 'Манипулятор времени',
          imageName: 'time',
        },
        {
          id: 40,
          name: 'Звездная пыль',
          imageName: 'stardust',
        },
        {
          id: 37,
          name: 'Квантовая частица',
          imageName: 'particle',
        },
        {
          id: 4,
          name: 'Метал',
          imageName: 'metal',
        },
        {
          id: 3,
          name: 'Уголь',
          imageName: 'coal',
        },
      ],
      potion: {
        id: 13,
        name: 'Парадокс с Раксорикуса',
        description: 'Это существо, и не существо одновременно. Что это ? Правильно, минус 30 секунд к ходу противника, и в придачу 20 урона',
      },
    },
      {
        ingridients: [
          {
            id: 39,
            name: 'Энергия звезды',
            imageName: 'star-energy',
          },
          {
            id: 42,
            name: 'Спутник',
            imageName: 'satellite',
          },
          {
            id: 43,
            name: 'Темная материя',
            imageName: 'dark-matter',
          },
          {
            id: 38,
            name: 'Кристаллы',
            imageName: 'crystal',
          },
          {
            id: 0,
            name: 'Вода',
            imageName: 'water',
          },
        ],
        potion: {
          id: 14,
          name: 'Враганнигиляция',
          description: 'Жаль что такой хороший человек проиграл. 20 Урона + 10 урона каждый ход на протяжении 3 ходов (сильный яд)',
        },
      },
      {
        ingridients: [
          {
            id: 40,
            name: 'Звездная пыль',
            imageName: 'stardust',
          },
          {
            id: 36,
            name: 'Кусочек метеорита',
            imageName: 'meteorite',
          },
          {
            id: 38,
            name: 'Кристаллы',
            imageName: 'crystal',
          },
          {
            id: 4,
            name: 'Метал',
            imageName: 'metal',
          },
        ],
        potion: {
          id: 15,
          name: 'Темная звезда',
          description: 'Звезда состоящая из латунных доспехов! Возьми себе один. 25 Брони',
        },
      },
      {
        ingridients: [
          {
            id: 41,
            name: 'Сингулярность',
            imageName: 'singularity',
          },
          {
            id: 42,
            name: 'Спутник',
            imageName: 'satellite',
          },
          {
            id: 37,
            name: 'Квантовая частица',
            imageName: 'crystal',
          },
        ],
        potion: {
          id: 16,
          name: 'Жижа для галактического вейпа',
          description: 'Парю где хочу, законом не запрещено. Сильный антидот. Наносит по 5 урона 3 хода',
        },
      },
      {
        ingridients: [
          {
            id: 41,
            name: 'Сингулярность',
            imageName: 'singularity',
          },
          {
            id: 43,
            name: 'Темная материя',
            imageName: 'dark-matter',
          },
          {
            id: 5,
            name: 'Песок',
            imageName: 'sand',
          },
          {
            id: 6,
            name: 'Соль',
            imageName: 'salt',
          },
        ],
        potion: {
          id: 17,
          name: 'ОРБИТальный удар',
          description: 'Не берите жвачку у незнакомцев. 10 урона + Блокирует слот для ингридиента + блокирует слот в котле',
        },
      },
      {
        ingridients: [
          {
            id: 39,
            name: 'Энергия звезды',
            imageName: 'star-energy',
          },
          {
            id: 41,
            name: 'Сингулярность',
            imageName: 'singularity',
          },
          {
            id: 7,
            name: 'Грибочки',
            imageName: 'shrooms',
          },
        ],
        potion: {
          id: 18,
          name: 'Типа грибы, типа грибы, е',
          description: 'Говорящие грибы, сами съедят противника. Сильный яд - 5 урона на протяжении 5 ходов',
        },
      },
      {
        ingridients: [
          {
            id: 40,
            name: 'Звездная пыль',
            imageName: 'stardust',
          },
          {
            id: 39,
            name: 'Энергия звезды',
            imageName: 'star-energy',
          },
          {
            id: 37,
            name: 'Квантовая частица',
            imageName: 'particle',
          },
          {
            id: 1,
            name: 'Огонь',
            imageName: 'fire',
          },
        ],
        potion: {
          id: 19,
          name: 'Межгалактический экспресс',
          description: '...увезет твоего противника в черную дыру. Места только плацкартные. Яд - 5 урона на протяжении 5 ходов + 20 Урона',
        },
      },
      {
        ingridients: [
          {
            id: 42,
            name: 'Спутник',
            imageName: 'satellite',
          },
          {
            id: 36,
            name: 'Кусочек метеорита',
            imageName: 'meteorite',
          },
          {
            id: 4,
            name: 'Метал',
            imageName: 'metal',
          },
        ],
        potion: {
          id: 20,
          name: 'Лазерная установка без лазера',
          description: 'Зато больно бъет по башке. 15 Урона',
        },
      },
      {
        ingridients: [
          {
            id: 37,
            name: 'Квантовая частица',
            imageName: 'particle',
          },
          {
            id: 40,
            name: 'Звездная пыль',
            imageName: 'stardust',
          },
          {
            id: 38,
            name: 'Кристаллы',
            imageName: 'crystal',
          },
          {
            id: 8,
            name: 'Подорожник',
            imageName: 'leaf',
          },
        ],
        potion: {
          id: 21,
          name: 'Звезда жизни',
          description: 'Огромная станция построенная по приказу императора. Продает аскорбинки. Восстанавливает 10 здоровья и 10 брони',
        },
      },
      {
        ingridients: [
          {
            id: 36,
            name: 'Кусочек метеорита',
            imageName: 'meteorite',
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
          id: 22,
          name: 'Тахионный излучатель Джимбо',
          description: 'На самом деле револьвер. Стреляющий метеоритами. Наносит 5 урона и еще 5 на протяжении 2 ходов. Слабый яд',
        },
      },
      {
        ingridients: [
          {
            id: 37,
            name: 'Квантовая частица',
            imageName: 'particle',
          },
          {
            id: 8,
            name: 'Подорожник',
            imageName: 'leaf',
          },
          {
            id: 3,
            name: 'Уголь',
            imageName: 'coal',
          },
        ],
        potion: {
          id: 23,
          name: 'Аптечка минус первой помощи',
          description: 'Не шутите с паралельными вселенными. Восстанавливает 10 единиц здоровья. Антидот',
        },
      },
      {
        ingridients: [
          {
            id: 38,
            name: 'Кристаллы',
            imageName: 'crystal',
          },
          {
            id: 4,
            name: 'Метал',
            imageName: 'metal',
          },
          {
            id: 2,
            name: 'Земля',
            imageName: 'ground',
          },
        ],
        potion: {
          id: 24,
          name: 'Факин щит',
          description: 'Я отполировал свой щит. Восстанавливает 10 единиц брони',
        },
      },
      {
        ingridients: [
          {
            id: 36,
            name: 'Кусочек метеорита',
            imageName: 'particle',
          },
          {
            id: 40,
            name: 'Звездная пыль',
            imageName: 'stardust',
          },
          {
            id: 43,
            name: 'Темная материя',
            imageName: 'dark-matter',
          },
          {
            id: 2,
            name: 'Земля',
            imageName: 'ground',
          },
        ],
        potion: {
          id: 25,
          name: 'Армагеддон',
          description: 'Твоему противнику поможет только Брюс Уиллис. 20 чистого урона, болкирует слот для зелий, убивает отца на астероиде.',
        },
      },
    ],
  },
];

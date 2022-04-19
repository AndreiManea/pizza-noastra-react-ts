const generateId = () => Math.random().toString(36).substr(2, 9);

export const products = [
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Casei',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos de Roșii, Mozarella, Șuncă De Praga, Ardei, Ciuperci, Prosciutto Crudo, Parmezan'
    ],
    mediumGrams: '700',
    largeGrams: '1450',
    mediumPrice: 43,
    largePrice: 80
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Quatro Formaggi',
    categories: {
      porc: false,
      pui: false,
      peste: false,
      vegetarian: true
    },
    img: 'hei',
    ingredients: [
      'Sos Alb, Mozzarella, Gorgonzola, Ricotta, Parmezan, Oregano, Ulei De Măsline'
    ],
    mediumGrams: '460',
    largeGrams: '980',
    mediumPrice: 31,
    largePrice: 57
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Deliziosa',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozzarella, Șuncă De Praga, Salam, Ananas, Cremă De Brânză'
    ],
    mediumGrams: '700',
    largeGrams: '1400',
    mediumPrice: 35,
    largePrice: 65
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Capriciosa',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Șuncă, Ciuperci, Măsline, Peperoni, Mozarella'
    ],
    mediumGrams: '650',
    largeGrams: '1350',
    mediumPrice: 33,
    largePrice: 60
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Carbonara',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Mozarella, Bacon, Smântână, Parmezan, Ou'],
    mediumGrams: '650',
    largeGrams: '1350',
    mediumPrice: 35,
    largePrice: 60
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Roma',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozarella, Șuncă De Praga, Cârnați, Salam, Usturoi, Gogoșari, Carciofi, Măsline'
    ],
    mediumGrams: '720',
    largeGrams: '1450',
    mediumPrice: 33,
    largePrice: 60
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Taraneasca',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozarella, Cârnați, Bacon, Ardei, Telemea, Ciuperci, Ceapă'
    ],
    mediumGrams: '690',
    largeGrams: '1400',
    mediumPrice: 33,
    largePrice: 59
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Cardinale',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozarella, Bacon, Salam Picant, Cremă De Brânză, Ciuperci, Măsline, Ardei Iuți'
    ],
    mediumGrams: '750',
    largeGrams: '1500',
    mediumPrice: 38,
    largePrice: 72
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Salami',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Salami Italia, Mozarella'],
    mediumGrams: '550',
    largeGrams: '1000',
    mediumPrice: 29,
    largePrice: 52
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Junior',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Mozarella, Șuncă De Praga, Ananas, Porumb'],
    mediumGrams: '680',
    largeGrams: '1400',
    mediumPrice: 29,
    largePrice: 55
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Cu Pui',
    categories: {
      porc: false,
      pui: true,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozzarela, Șuncă De Pui, Piept De Pui Afumat, Oregano'
    ],
    mediumGrams: '630',
    largeGrams: '1300',
    mediumPrice: 32,
    largePrice: 60
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Capricciosa Pui',
    categories: {
      porc: false,
      pui: true,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozarella, Șuncă De Pui, Ciuperci, Piept De Pui Afumat, Măsline'
    ],
    mediumGrams: '660',
    largeGrams: '1350',
    mediumPrice: 35,
    largePrice: 63
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Diavola',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Salam Picant, Ulei De Masilne Cu Ardei, Mozarella'
    ],
    mediumGrams: '560',
    largeGrams: '1150',
    mediumPrice: 32,
    largePrice: 60
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Prosciutto',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Prosciutto Praga, Mozarella'],
    mediumGrams: '560',
    largeGrams: '1150',
    mediumPrice: 28,
    largePrice: 50
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Prosciutto e Funghi',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Mozzarella, Prosciutto Praga, Ciuperci'],
    mediumGrams: '600',
    largeGrams: '1250',
    mediumPrice: 30,
    largePrice: 53
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Vegetariana 1',
    categories: {
      porc: false,
      pui: false,
      peste: false,
      vegetarian: true
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Mozarella, Masline, Porumb, Ardei, Ciuperci'],
    mediumGrams: '580',
    largeGrams: '1200',
    mediumPrice: 26,
    largePrice: 51
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Vegetariana 2',
    categories: {
      porc: false,
      pui: false,
      peste: false,
      vegetarian: true
    },
    img: 'hei',
    ingredients: [
      'Sos De Roșii, Mozarella, Mix Legume Mexicane, Usturoi, Ceapă, Mix Salată de Sezon, Rosii Cherry, Crema de branza'
    ],
    mediumGrams: '700',
    largeGrams: '1450',
    mediumPrice: 33,
    largePrice: 61
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Margherita',
    categories: {
      porc: false,
      pui: false,
      peste: false,
      vegetarian: true
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Mozarella, Busuioc'],
    mediumGrams: '400',
    largeGrams: '950',
    mediumPrice: 22,
    largePrice: 40
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Tonno E Cipolla',
    categories: {
      porc: false,
      pui: false,
      peste: true,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Sos De Roșii, Mozarella, Ton, Ceapă, Capere, Măsline'],
    mediumGrams: '640',
    largeGrams: '1350',
    mediumPrice: 35,
    largePrice: 65
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Quatro Stagioni',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Sos de Rosii, Mozzarella, Sunca de Praga, Salam, Ciuperci, Ardei'
    ],
    mediumGrams: '600',
    largeGrams: '1250',
    mediumPrice: 31,
    largePrice: 57
  },
  {
    id: generateId(),
    type: 'pizza',
    title: 'Pizza Noastra',
    categories: {
      porc: true,
      pui: false,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: ['Mozarella, Șuncă De Praga, Ciuperci, Usturoi'],
    mediumGrams: '550',
    largeGrams: '1150',
    mediumPrice: 29,
    largePrice: 55
  },

  {
    id: generateId(),
    type: 'burger',
    title: 'Burger de Pui',
    categories: {
      pui: true,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Chiflă, Sos Street Food, Chiftea Pui Crispy cu Cascaval, White Cheddar, Mix Salată de Sezon, Classic Cheddar'
    ],
    price: 30
  },
  {
    id: generateId(),
    type: 'burger',
    title: 'Burger Vegetarian',
    categories: {
      pui: false,
      vegetarian: true
    },
    img: 'hei',
    ingredients: [
      'Chiflă, Sos Street Food, Chiftea Vegetala, White Cheddar, Mix Salată de Sezon, Classic Cheddar'
    ],
    price: 30
  },
  {
    id: generateId(),
    type: 'salad',
    title: 'Salata cu Pui Crispy',
    categories: {
      pui: true,
      peste: false,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Salată Iceberg, Porumb, Ardei, Mix de Verdețuri, Roșii Cherry, Pui crispy, Castraveți, Telemea'
    ],
    price: 27
  },
  {
    id: generateId(),
    type: 'salad',
    title: 'Salata cu Ton',
    categories: {
      pui: false,
      peste: true,
      vegetarian: false
    },
    img: 'hei',
    ingredients: [
      'Salată Iceberg, Porumb, Ton, Mix de Verdețuri, Roșii Cherry, Ceapa, Castraveți, Telemea'
    ],
    price: 27
  },
  {
    id: generateId(),
    type: 'salad',
    title: 'Salata Simpla',
    categories: {
      pui: false,
      peste: false,
      vegetarian: true
    },
    img: 'hei',
    ingredients: [
      'Salată Iceberg, Porumb, Ardei, Mix de Verdețuri, Roșii Cherry, Masline, Castraveți, Telemea'
    ],
    price: 23
  },
  {
    id: generateId(),
    type: 'crispy',
    title: 'Meniu Crispy',
    categories: {
      pui: true,
      vegetarian: false
    },
    img: '/icons/crispy.svg',
    ingredient1: 'Crispy',
    weight1: 300,
    ingredient2: 'Cartofi Prajiti',
    weight2: 200,
    extra: 'Sos inclus',
    price: 35
  },
  {
    id: generateId(),
    type: 'crispy',
    title: 'Meniu Aripi',
    categories: {
      pui: true,
      vegetarian: false
    },
    img: '/icons/crispy.svg',
    ingredient1: 'Aripi',
    weight1: 300,
    ingredient2: 'Cartofi Prajiti',
    weight2: 200,
    extra: 'Sos inclus',
    price: 35
  },
  {
    id: generateId(),
    type: 'crispy',
    title: 'Meniu Mozzarella',
    categories: {
      pui: false,
      vegetarian: true
    },
    img: '/icons/crispy.svg',
    ingredient1: 'Mozzarella',
    weight1: 300,
    ingredient2: 'Cartofi Prajiti',
    weight2: 200,
    extra: 'Sos inclus',
    price: 30
  },
  {
    id: generateId(),
    type: 'crispy',
    bucket: true,
    title: 'Bucket Crispy/Aripi',
    categories: {
      pui: true,
      vegetarian: false
    },
    img: '/icons/bucket.svg',
    ingredient1: 'Crispy',
    weight1: 500,
    ingredient2: 'Aripi',
    weight2: 500,
    extra: 'Nu include sos sau cartofi prajiti',
    price: 60
  },
  {
    id: generateId(),
    type: 'crispy',
    title: 'Bucket Crispy/Mozzarella',
    bucket: true,
    categories: {
      pui: true,
      vegetarian: false
    },
    img: '/icons/bucket.svg',
    ingredient1: 'Crispy',
    weight1: 500,
    ingredient2: 'Mozzarella',
    weight2: 500,
    extra: 'Nu include sos sau cartofi prajiti',
    price: 60
  },
  {
    id: generateId(),
    type: 'crispy',
    title: 'Bucket Aripi/Mozzarella',
    bucket: true,
    categories: {
      pui: true,
      vegetarian: false
    },
    img: '/icons/bucket.svg',
    ingredient1: 'Aripi',
    weight1: 500,
    ingredient2: 'Mozzarella',
    weight2: 500,
    extra: 'Nu include sos sau cartofi prajiti',
    price: 60
  }
];

export const secondaryFilters = {
  pizza: ['porc', 'pui', 'peste', 'vegetarian'],
  crispy: ['pui', 'vegetarian'],
  salad: ['pui', 'peste', 'vegetarian'],
  burger: ['pui', 'vegetarian']
};

export const extras = [
  {
    id: generateId(),
    type: 'crispy',
    ingredient: 'Cartofi Prajiti',
    weight: 200,
    price: 5
  },
  {
    id: generateId(),
    type: 'crispy',
    ingredient: 'Sos Maioneza',
    weight: 80,
    price: 5
  },
  {
    id: generateId(),
    type: 'crispy',
    ingredient: 'Sos Usturoi',
    weight: 80,
    price: 5
  },
  {
    id: generateId(),
    type: 'crispy',
    ingredient: 'Sos Picant',
    weight: 80,
    price: 5
  },
  {
    id: generateId(),
    type: 'crispy',
    ingredient: 'Sos Verdeturi',
    weight: 80,
    price: 5
  },
  {
    id: generateId(),
    type: 'pizzaSauce',
    ingredient: 'Ketchup Dulce',
    priceBig: 5,
    priceMedium: 5
  },
  {
    id: generateId(),
    type: 'pizzaSauce',
    ingredient: 'Ketchup Picant',
    priceBig: 5,
    priceMedium: 5
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Prosciutto Crudo',
    priceBig: 10,
    priceMedium: 5
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Piept de Pui Afumat',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Sunca de Praga',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Bacon',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Carnati',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Sunca de Pui',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Salam',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Ton',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Mozzarella',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Masline',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Ciuperci',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Porumb',
    priceBig: 5,
    priceMedium: 3
  },
  {
    id: generateId(),
    type: 'pizza',
    ingredient: 'Anghinare',
    priceBig: 5,
    priceMedium: 3
  }
];

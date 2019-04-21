//  GLOBAL
var config = {
  server: {
    local: process.env.PORT ? false : true,
    port: process.env.PORT || 5353
  },
  results: {
    recipes: [{
      id: 0,
      picture: 'https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_2622edit.jpg',
      title: 'Pasta Carbonara',
      description: 'The no-food-in-the-house dinner of our dreams.',
      duration: '0D-1H-20M',
      difficulty: 'Medium',
      cuisine: 'Italian',
      ingredients: [
        {
          ingredientAmt: '1',
          ingredientUnit: 'pt',
          ingredientName: 'Spaghetti'
        },
        {
          ingredientAmt: '2',
          ingredientUnit: 'c',
          ingredientName: 'Eggs'
        },
        {
          ingredientAmt: '2',
          ingredientUnit: 'oz',
          ingredientName: 'Parmesan'
        }
      ],
      instructions: [
        'Boil water',
        'Whisk eggs',
        'Cook pasta for 10 minutes',
        'Add parmesan and eggs',
        'Cook for another 10 minutes',
        'Serve'
      ]
    },
    {
      id: 1,
      picture: 'https://www.bakedbyanintrovert.com/wp-content/uploads/2015/08/Lemon-Bars-Recipe-Image-1.jpg',
      title: 'Lemon Bars',
      description: 'Lemon bars on a shortbread base.',
      duration: '0D-0H-50M',
      difficulty: 'Easy',
      cuisine: 'English',
      ingredients: [
        {
          ingredientAmt: '1',
          ingredientUnit: 'c',
          ingredientName: 'Flour'
        },
        {
          ingredientAmt: '1',
          ingredientUnit: 'c',
          ingredientName: 'White Sugar'
        },
        {
          ingredientAmt: '1',
          ingredientUnit: 'tbsp',
          ingredientName: 'Lemon Zest'
        }
      ],
      instructions: [
        'Preheat oven to 350 degrees F',
        'Mix flour and sugar',
        'Bake for 20 minutes',
        'Add lemon zest',
        'Bake for another 25 minutes'
      ]
    }, {
      id: 2,
      picture: 'https://i.kym-cdn.com/entries/icons/original/000/011/269/potato.jpg',
      title: 'Fresh Potato',
      description: 'Izza big potato with lotz of sauze.',
      duration: '0D-2H-0M',
      difficulty: 'Hard',
      cuisine: 'Dutch',
      ingredients: [
        {
          ingredientAmt: '1',
          ingredientUnit: 'tbsp',
          ingredientName: 'Sauce'
        },
        {
          ingredientAmt: '2',
          ingredientUnit: 'c',
          ingredientName: 'Potato'
        }
      ],
      instructions: [
        'Cut up potato',
        'Apply sauce to potato'
      ]
    },
    {
      id: 3,
      picture: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/EA1A02_the-baked-potato_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371599862583.jpeg',
      title: 'Baked Potato',
      description: 'Izza baked potato with lotz of sauze.',
      duration: '0D-0H-30M',
      difficulty: 'Easy',
      cuisine: 'American',
      ingredients: [
        {
          ingredientAmt: '2',
          ingredientUnit: 'tbsp',
          ingredientName: 'Sauce'
        },
        {
          ingredientAmt: '2',
          ingredientUnit: 'c',
          ingredientName: 'Potato'
        }
      ],
      instructions: [
        'Cut up potato',
        'Apply sauce to potato',
        'Set oven to 350',
        'Put potato in oven for 20 minutes'
      ]
    },
    {
      id: 4,
      picture: 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201404-xl-panko-chicken-parmesan.jpg?itok=a2KJsevW',
      title: 'Chicken Parmesan',
      description: 'Chicken with a crispy crust and less sauce than traditional.',
      duration: '0D-0H-45M',
      difficulty: 'Medium',
      cuisine: 'Italian',
      ingredients: [
        {
          ingredientAmt: '2',
          ingredientUnit: 'tbsp',
          ingredientName: 'Sauce'
        },
        {
          ingredientAmt: '1',
          ingredientUnit: 'c',
          ingredientName: 'Mozzarella'
        },
        {
          ingredientAmt: '4',
          ingredientUnit: 'c',
          ingredientName: 'Chicken breast'
        }
      ],
      instructions: [
        'Preheat oven to 450 degrees F',
        'Coat chicken with sauce',
        'Bake for 30 minutes',
        'Sprinkle mozzarella on top of chicken'
      ]
    }
    ],
    myRecipe: [{
      id: 4,
      picture: 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201404-xl-panko-chicken-parmesan.jpg?itok=a2KJsevW',
      title: 'Chicken Parmesan',
      description: 'Chicken with a crispy crust and less sauce than traditional.',
      duration: '0D-0H-45M',
      difficulty: 'Medium',
      cuisine: 'Italian',
      ingredients: [
        {
          ingredientAmt: '2',
          ingredientUnit: 'tbsp',
          ingredientName: 'Sauce'
        },
        {
          ingredientAmt: '1',
          ingredientUnit: 'c',
          ingredientName: 'Mozzarella'
        },
        {
          ingredientAmt: '4',
          ingredientUnit: 'c',
          ingredientName: 'Chicken breast'
        }
      ],
      instructions: [
        'Preheat oven to 450 degrees F',
        'Coat chicken with sauce',
        'Bake for 30 minutes',
        'Sprinkle mozzarella on top of chicken'
      ]
    }
    ]
  }
}

module.exports = config

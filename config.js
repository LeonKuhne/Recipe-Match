//  GLOBAL
var config = {
  server: {
    local: process.env.PORT ? false : true,
    port: process.env.PORT || 5353
  },
  results: {
    recipe: [{
      id: 0,
      picture: 'pasta.png',
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
      picture: 'lemon.png',
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
    }
    ],
    ingredients: [{
      id: 0,
      picture: 'fresh.png',
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
      id: 1,
      picture: 'baked.png',
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
    }
    ],
    myRecipe: [{
      id: 0,
      picture: 'chicken.png',
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

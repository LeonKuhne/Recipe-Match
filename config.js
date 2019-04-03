//  GLOBAL
var config = {
  server: {
    local: process.env.PORT ? false : true,
    port: process.env.PORT || 5353
  },
  results: {
    recipe: [],
    ingredients: [{
      id: 0,
      picture: 'fresh.png',
      title: 'Fresh Potato',
      description: 'Izza big potato with lotz of sauze.',
      duration: '2 hours',
      difficulty: 'hard'
    },
    {
      id: 1,
      picture: 'baked.png',
      title: 'Baked Potato',
      description: 'Izza baked potato with lotz of sauze.',
      duration: '30 min',
      difficulty: 'easy'
    }
    ],
    myRecipe: []
  }
}

module.exports = config

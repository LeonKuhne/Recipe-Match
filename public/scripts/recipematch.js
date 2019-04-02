function redirect(url, delay=0){
  setTimeout(()=>{
    document.location.href = url;
  }, delay)
}

function loadHome(){
  // autofocus on homepage
  $('.ingredients-page').hover(()=>{
    $('.ingredients-page').addClass('selected-page')
    $('.ingredients-page').removeClass('deselected-page')
    $('.ingredients-search').focus()

    $('.recipes-page').removeClass('deselected-page')
  }, ()=>{
    $('.ingredients-page').removeClass('selected-page')
    $('.ingredients-page').addClass('deselected-page')
    $('.ingredients-search').focusout()
  })
  
  $('.recipes-page').hover(()=>{
    $('.recipes-page').addClass('selected-page')
    $('.recipes-page').removeClass('deselected-page')
    $('.recipe-search').focus()
    
    $('.ingredients-page').removeClass('deselected-page')
  }, ()=>{
    $('.recipes-page').removeClass('selected-page')
    $('.recipes-page').addClass('deselected-page')
    $('.recipe-search').focusout()
  })

  // links on homepage
  $('.ingredients-page').click(()=>{
    $('.ingredients-page').addClass('expand');
    redirect('/search/ingredients', 500)
  })

  $('.recipes-page').click(()=>{
    $('.recipes-page').addClass('expand');
    redirect('/search/recipes', 500)
  })

}

window.onload = () => {
  //$('.ingredients-search').selectize()
  $('.logo').click(()=>{
    redirect('/')
  })

  // only homepage
  if(document.location.pathname === '/') {
    loadHome() 
  }
  // recipe card click
  $('.recipe-card').click(()=>{
    // create a recipe card detailed view
    let recipeId = $(this).attr('recipe-id')
    
    // TODO get details for recipe with api call here
    
    $('.search-view').append('<div class="popup-bg"><div class="recipe-card-back" /></div>')
    return false;
  })

  $('.recipe-card-back').click(()=>{
    $('.popup-bg').remove()
  })
}

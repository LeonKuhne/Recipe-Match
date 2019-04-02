window.onload = () => {
  //$('.ingredients-search').selectize()
  $('.logo').click(()=>{
    document.location.href="/";
  })

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
    setTimeout(()=>{
      document.location.href="/search/ingredients";
    }, 500)
  })

  $('.recipes-page').click(()=>{
    $('.recipes-page').addClass('expand');
    setTimeout(()=>{
      document.location.href="/search/recipes";
    }, 500)
  })
}
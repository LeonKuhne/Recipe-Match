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
  }, ()=>{
    $('.ingredients-page').removeClass('selected-page')
    $('.ingredients-page').addClass('deselected-page')
    $('.ingredients-search').focusout()
  })
  $('.recipes-page').hover(()=>{
    $('.recipes-page').addClass('selected-page')
    $('.recipes-page').removeClass('deselected-page')
    $('.recipe-search').focus()
  }, ()=>{
    $('.recipes-page').removeClass('selected-page')
    $('.recipes-page').addClass('deselected-page')
    $('.recipe-search').focusout()
  })
}
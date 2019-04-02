window.onload = () => {
  //$('.ingredients-search').selectize()
  $('.logo').click(()=>{
    document.location.href="/";
  })

  // autofocus on homepage
  $('.ingredients-page').hover(()=>{
    $('.ingredients-search').focus()
  }, ()=>{
    $('.ingredients-search').focusout()
  })
  $('.recipes-page').hover(()=>{
    $('.recipe-search').focus()
  }, ()=>{
    $('.recipe-search').focusout()
  })
}
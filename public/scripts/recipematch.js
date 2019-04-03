function redirect(url, delay = 0) {
  setTimeout(() => {
    document.location.href = url;
  }, delay)
}

function addInput(element) {
  var inputList = element.firstElementChild;
  var lastInput = inputList.lastElementChild;
  var newInput = lastInput.cloneNode(true);
  var id = newInput.id.split("-");
  newInput.id = id[0] + "-" + (parseInt(id[1]) + 1);
  inputList.append(newInput);
}

function closeForm() {
  $('.popup-bg').remove();
}

function loadHome() {
  // autofocus on homepage
  $('.ingredients-page').hover(() => {
    $('.ingredients-page').addClass('selected-page')
    $('.ingredients-page').removeClass('deselected-page')
    $('.ingredients-search').focus()
    $('.ingredients-search').css('border-color', 'red')

    $('.recipes-page').removeClass('deselected-page')
  }, () => {
    $('.ingredients-page').removeClass('selected-page')
    $('.ingredients-page').addClass('deselected-page')
    $('.ingredients-search').focusout()
    $('.ingredients-search').css('border-color', 'black')
  })

  $('.recipes-page').hover(() => {
    $('.recipes-page').addClass('selected-page')
    $('.recipes-page').removeClass('deselected-page')
    $('.recipe-search').focus()
    $('.recipe-search').css('border-color', 'red')
    $('.ingredients-page').removeClass('deselected-page')
  }, () => {
    $('.recipes-page').removeClass('selected-page')
    $('.recipes-page').addClass('deselected-page')
    $('.recipe-search').focusout()
    $('.recipe-search').css('border-color', 'black')
  })

  // links on homepage
  $('.ingredients-page').click(() => {
    $('.ingredients-page').addClass('expand');
    redirect('/search/ingredients', 500)
  })

  $('.recipes-page').click(() => {
    $('.recipes-page').addClass('expand');
    redirect('/search/recipes', 500)
  })

}

window.onload = () => {
  //$('.ingredients-search').selectize()
  $('.logo').click(() => {
    redirect('/')
  })

  // only homepage
  if (document.location.pathname === '/') {
    loadHome();
  }

  // recipe card click
  $('.recipe-card').click(function (event) {
    // create a recipe card detailed view
    let recipeId = $(this).closest('.recipe-card').attr('id')

    // get the recipe data from the server
    let recipeData = $.get('/recipes/?recipeId=' + recipeId, () => {

      $('.search-view').append(`<div class="popup-bg"><div class="recipe-card-back">${
        JSON.stringify(recipeData)
        }</div></div>`)
      $('.popup-bg').click(() => {
        $('.popup-bg').remove()
      })
    })

    return false;
  })

  $('.addRecipeButton').click(() => {
    $.get('/add_form.html', (formData) => {
      $('.search-view').html(formData)
      $('#submit-form').click(() => {
        let newRecipeData = {
          picture: 'TODO',
          title: $('#recipeName').val(),
          description: $('#recipeDesc').val(),
          duration: 'TODO',
          difficulty: 'TODO'
          // TODO ...
          // this needs to be done for all data from the form
        }

        $.post("/recipes/add", newRecipeData)
        redirect('/search/my-recipes')
      })
    })

    return false;
  });

}

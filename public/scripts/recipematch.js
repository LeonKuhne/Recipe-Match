function redirect(url, delay = 0) {
  setTimeout(() => {
    document.location.href = url;
  }, delay)
}

function addInput(element, isInstruction) {
  var inputList = element.firstElementChild;
  var lastInput = inputList.lastElementChild;
  var newInput = lastInput.cloneNode(true);
  var id = newInput.id.split("-");
  newInput.id = id[0] + "-" + (parseInt(id[1]) + 1);
  newInput.firstElementChild
  inputList.append(newInput);
}

function uploadImg(element){
  console.log("clicketh");
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

    // TODO NEVER impl api call
    let recipeData;
    switch (recipeId) {
      case 'recipe-0':
        // fresh potato
        recipeData = {
          id: 0,
          picture: 'fresh.png',
          title: 'Fresh Potato',
          description: 'Izza big potato with lotz of sauze.',
          duration: '2 hours',
          difficulty: 'hard'
        }
        break;
      case 'recipe-1':
        // baked potato
        recipeData = {
          id: 1,
          picture: 'baked.png',
          title: 'Baked Potato',
          description: 'Izza baked potato with lotz of sauze.',
          duration: '30 min',
          difficulty: 'easy'
        }
        break;
      default:
        recipeData = {
          id: -1,
          picture: 'default.png',
          title: 'Default',
          description: 'Time to eat paper.',
          duration: '45 min',
          difficulty: 'easy'
        }
        break;
    }


    $('.search-view').append(`<div class="popup-bg"><div class="recipe-card-back">${
      JSON.stringify(recipeData)
      }</div></div>`)
    $('.popup-bg').click(() => {
      $('.popup-bg').remove()
    })

    return false;
  });

  $('.addRecipeButton').click(() => {
    $.get('/add_form.html', (formData) => {
      $('.search-view').html(formData)
    })

    return false;
  });

}

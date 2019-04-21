function redirect(url, delay = 0) {
  setTimeout(() => {
    document.location.href = url;
  }, delay)
}

function strip(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function getDifficulty(val) {
  if (val > 66) {
    return "Hard";
  } else if (val < 66 && val > 33) {
    return "Medium";
  } else {
    return "Easy";
  }
}

function addInput(element, isInstruction) {
  var inputList = element.firstElementChild;
  var lastInput = inputList.lastElementChild;
  var newInput = lastInput.cloneNode(true);
  var id = newInput.id.split("-");
  newInput.id = id[0] + "-" + (parseInt(id[1]) + 1);
  if (isInstruction) {
    var lastInstructionNum = lastInput.firstElementChild.innerHTML.split(".")[0];
    newInput.firstElementChild.innerHTML = parseInt(lastInstructionNum) + 1 + ".";
  }
  inputList.append(newInput);
}

function submitAddRecipe(recipeObj) {
  let newRecipeData = {
    picture: recipeImgName,
    title: recipeObj.name,
    description: recipeObj.desc,
    duration: recipeObj.time,
    difficulty: recipeObj.diff,
    cuisine: recipeObj.cuisine,
    ingredients: recipeObj.ingredients,
    instructions: recipeObj.instructions
  }

  $.post("/recipes/add", newRecipeData)
  redirect('/search/my-recipes', 500)
}

function confirmSave() {
  if (confirm("Save this recipe?")) {
    saveRecipe();
  }
}

function saveRecipe() {
  var recipeName = document.getElementById("recipeName").value;
  var recipeDesc = document.getElementById("recipeDesc").value;
  var recipeTimeDay = document.getElementById("inputDay").value;
  var recipeTimeHr = document.getElementById("inputHr").value;
  var recipeTimeM = document.getElementById("inputM").value;
  var recipeDiff = document.getElementById("diffRange").value;
  var recipeCuisine = document.getElementById("recipeCuisine").value;
  var ingredientList = document.getElementById("ingredientList").children;
  var instructionList = document.getElementById("instructionList").children;
  var ingredientsArray = [];
  var instructionsArray = [];
  for (var i = 0; i < ingredientList.length; i++) {
    var ingredient = ingredientList[i];
    ingredientsArray.push({
      ingredientAmt: ingredient.children[0].value,
      ingredientUnit: ingredient.children[1].value,
      ingredientName: ingredient.children[2].value
    });
  }

  for (var j = 0; j < instructionList.length; j++) {
    var instruction = instructionList[j];
    instructionsArray.push(instruction.lastElementChild.value);
  }

  var recipeInfo = {
    name: recipeName,
    desc: recipeDesc,
    time: recipeTimeDay + "D-" + recipeTimeHr + "H-" + recipeTimeM + "M",
    diff: getDifficulty(parseInt(recipeDiff)),
    cuisine: recipeCuisine,
    ingredients: ingredientsArray,
    instructions: instructionsArray
  };

  submitAddRecipe(recipeInfo);
}

function uploadImg(element) {
  console.log("clicketh");
}

function removeIngredient(div) {
  (div.parentNode).removeChild(div);
}

var recipeImgName="https://previews.123rf.com/images/seamartini/seamartini1607/seamartini160700121/59600549-vegetable-salad-ingredients-background-with-seamless-pattern-of-tomatoes-olives-and-onions-carrots-b.jpg";
function uploadRecipeImage(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var srcName=e.target.result;
        recipeImgName=srcName;
        var recipeImg=document.getElementById("recipeImg");
        var buttonContainer=document.getElementById("buttonContainer");
        var addRecipeImg=document.getElementById("addRecipeImg");
        addRecipeImg.style.height="320px";
        recipeImg.src=srcName;
        recipeImg.style.height="350px";
        recipeImg.style.width="385px";
        recipeImg.style.display="block";
        buttonContainer.style.display="none";
        //$('#recipeImg').attr('src', srcName);
      };
      reader.readAsDataURL(input.files[0]);
  }
}

function fillRecipeDetails(data){
  console.log(data, "dod"+data.duration);
  var recipeName = document.getElementById("recipe-detail-name");
  var recipeDesc = document.getElementById("recipe-detail-desc");
  var recipeDuration = document.getElementById("recipe-detail-duration");
  var recipeImg = document.getElementById("recipe-detail-img");
  var recipeDiff = document.getElementById("recipe-detail-diff");
  var recipeCuisine = document.getElementById("recipe-detail-cuisine");
  var recipeIngredients = document.getElementById("recipe-detail-ingredients");
  var recipeInstructions = document.getElementById("recipe-detail-instructions");
  recipeName.innerHTML=data.title;
  recipeDesc.innerHTML=data.description;
  recipeDuration.innerHTML=data.duration;
  recipeImg.src=data.picture;
  recipeDiff.innerHTML=data.difficulty;
  recipeCuisine.innerHTML=data.cuisine;
  var ingredients = data.ingredients;
  for(var i=0; i<ingredients.length; i++){
    var ingredientItem = document.createElement("LI");
    var ingredientObj = ingredients[i];
    var ingredientStr = ingredientObj.ingredientAmt + " " + ingredientObj.ingredientUnit+ " of "+ ingredientObj.ingredientName;
    ingredientItem.innerHTML= ingredientStr;
    recipeIngredients.appendChild(ingredientItem);
  }
  var instructions = data.instructions;
  for(var j=0; j<instructions.length; j++){
    var instructionItem = document.createElement("LI");
    instructionItem.innerHTML=instructions[j];
    recipeInstructions.appendChild(instructionItem);
  }
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
  $('.logo').click(() => {
    redirect('/')
  })

  // only homepage
  if (document.location.pathname === '/') {
    loadHome();
  } else {
    $('.search-bar').focus()
  }

  if (document.location.pathname === '/search/ingredients') {
    $('.nav-ingredients').addClass('active')
  } else if (document.location.pathname === '/search/recipes') {
    $('.nav-recipes').addClass('active')
  } else if (document.location.pathname === '/search/my-recipes') {
    $('.nav-my-recipes').addClass('active')
  }

  // get the query params from the url
  let queryParams = new URLSearchParams(window.location.search)

  if (queryParams.has('query') || document.location.pathname === '/search/my-recipes') {
    $('.search-bar').val(queryParams.get('query'))
    $('.search-bar-area').addClass('short')
    setTimeout(() => {
      $('.search-results').show()
    }, 500)
  } else {
    $('.search-results').hide()
  }

  // recipe card click
  $('.recipe-card').click(function (event) {
    // create a recipe card detailed view
    let recipeId = $(this).closest('.recipe-card').attr('id');
    $('#popupView').load("/recipe_details.html");
    // get the recipe data from the server
    $.get('/recipes?recipeId=' + recipeId, (recipeData) => {
      fillRecipeDetails(recipeData);
      // $('.search-view').append(`<div class="popup-bg"><div class="recipe-card-back">${
      //   JSON.stringify(recipeData)
      //   }</div></div>`)
      $('.popup-bg').click(() => {
        $('.popup-bg').remove()
      })
    })
    return false;
  })

  $('.addRecipeButton').click(() => {
    $('#popupView').load("/add_form.html");
    // $.get('/add_form.html', (formData) => {
    //   $('.search-view').html(formData)
    // })
    $('.popup-bg').click(() => {
      $('.popup-bg').remove()
    })
    return false;
  })

  $('.search-bar').keyup((e) => {
    let searchFieldText = $(e.target).val()

    // on the home page
    if (document.location.pathname === '/') {
      let searchPath = ''
      if($(e.target).hasClass('ingredients-search')) {
      	searchPath = '/search/recipes'
      } else if ($(e.target).hasClass('recipe-search')) {
      	searchPath = '/search/ingredients'
      } else if ($(e.target).hasClass('recipe-search')) {
      	searchPath = '/search/recipes'
      }
      redirect(searchPath + '?query=' + encodeURI(searchFieldText))
    }

    // listen for the enter key
    else if (e.keyCode == 13) {
      let searchText = ''

         // on the ingredients page
      if (document.location.pathname === '/search/ingredients') {
        $('.ingredients-items').children('.ingredients-item').each((index, elem) => {
          searchText += elem.innerText
          if (index + 1 != $('.ingredients-items').children('.ingredients-item').length) {
            searchText += ', '
          }
        })

        if (strip(searchFieldText) !== '') {
          if (searchText !== '') {
            searchText += ', '
          }
          searchText += searchFieldText
        }
      } else {
        searchText = searchFieldText
      }
      redirect(document.location.pathname + '?query=' + encodeURI(searchText))
    }
  })

  // turn search bar into ingredients search bar
  $('.ingredients-search').keyup((e) => {
    // spacebar was pressed
    if (e.keyCode == 32) {
      let searchText = $(e.target).val()
      if (strip(searchText) !== '') {
        $('.ingredients-items').append('<div class="ingredients-item" onclick="removeIngredient(this);">' + searchText + '</div>')
      }

      $('.ingredients-search').val('')
    }
  })

}

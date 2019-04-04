function redirect(url, delay = 0) {
  setTimeout(() => {
    document.location.href = url;
  }, delay)
}

function getDifficulty(val){
  if(val > 66){
    return "Hard";
  }else if(val < 66 && val > 33){
    return "Medium";
  }else{
    return "Easy";
  }
}

function addInput(element, isInstruction) {
  var inputList = element.firstElementChild;
  var lastInput = inputList.lastElementChild;
  var newInput = lastInput.cloneNode(true);
  var id = newInput.id.split("-");
  newInput.id = id[0] + "-" + (parseInt(id[1]) + 1);
  if(isInstruction){
      var lastInstructionNum = lastInput.firstElementChild.innerHTML.split(".")[0];
      newInput.firstElementChild.innerHTML= parseInt(lastInstructionNum) + 1 + ".";
  }
  inputList.append(newInput);
}

function saveRecipe(){
  var recipeName = document.getElementById("recipeName").value;
  var recipeDesc = document.getElementById("recipeDesc").value;
  var recipeTimeDay = document.getElementById("inputDay").value;
  var recipeTimeHr = document.getElementById("inputHr").value;
  var recipeTimeM = document.getElementById("inputM").value;
  var recipeDiff = document.getElementById("diffRange").value;
  var recipeCuisine = document.getElementById("recipeCuisine").value;
  var ingredientList = document.getElementById("ingredientList").children;
  var instructionList = document.getElementById("instructionList").children;
  var ingredientsArray=[];
  var instructionsArray = [];
  for(var i=0; i<ingredientList.length; i++){
    var ingredient = ingredientList[i];
    ingredientsArray.push({
      ingredientAmt:ingredient.children[0].value,
      ingredientUnit:ingredient.children[1].value,
      ingredientName:ingredient.children[2].value
    });
  }
  for(var j=0; j<instructionList.length; j++){
    var instruction = instructionList[j];
    instructionsArray.push(instruction.lastElementChild.value);
  }
  var recipeInfo = {
    name: recipeName,
    desc: recipeDesc,
    time: recipeTimeDay+"D-"+recipeTimeHr+"H-"+recipeTimeM+"M",
    diff: getDifficulty(parseInt(recipeDiff)),
    cuisine: recipeCuisine,
    ingredients: ingredientsArray,
    instructions: instructionsArray
  };
  submitAddRecipe(recipeInfo);
}

function uploadImg(element){
  console.log("clicketh");
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
  } else {
    $('.search-bar').focus()
  }

  if ($('.search-bar').val() !== '' || document.location.pathname === '/search/my-recipes') {
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
    let recipeId = $(this).closest('.recipe-card').attr('id')

    // get the recipe data from the server
    $.get('/recipes/?recipeId=' + recipeId, (recipeData) => {
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
    })

    return false;
  })

  $('.search-bar').keyup((e) => {
    // listen for the enter key
    if (e.keyCode == 13) {
      location.reload()
      $('.search-bar').val($(e.target).val())
    }
  })

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
  redirect('/search/my-recipes')
}

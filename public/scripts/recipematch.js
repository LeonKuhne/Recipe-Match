function redirect(url, delay=0){
  setTimeout(()=>{
    document.location.href = url;
  }, delay)
}

function addInput(element){
  var inputList = element.firstElementChild;
  var lastInput = inputList.lastElementChild;
  var newInput = lastInput.cloneNode(true);
  var id = newInput.id.split("-");
  newInput.id = id[0] + "-" + (parseInt(id[1]) + 1);
  inputList.append(newInput);
}

function closeForm(){
    $('.popup-bg').remove();
}

function loadHome(){
  // autofocus on homepage
  $('.ingredients-page').hover(()=>{
    $('.ingredients-page').addClass('selected-page')
    $('.ingredients-page').removeClass('deselected-page')
    $('.ingredients-search').focus()
    $('.ingredients-search').css('border-color', 'red')

    $('.recipes-page').removeClass('deselected-page')
  }, ()=>{
    $('.ingredients-page').removeClass('selected-page')
    $('.ingredients-page').addClass('deselected-page')
    $('.ingredients-search').focusout()
    $('.ingredients-search').css('border-color', 'black')
  })

  $('.recipes-page').hover(()=>{
    $('.recipes-page').addClass('selected-page')
    $('.recipes-page').removeClass('deselected-page')
    $('.recipe-search').focus()
    $('.recipe-search').css('border-color', 'red')
    $('.ingredients-page').removeClass('deselected-page')
  }, ()=>{
    $('.recipes-page').removeClass('selected-page')
    $('.recipes-page').addClass('deselected-page')
    $('.recipe-search').focusout()
    $('.recipe-search').css('border-color', 'black')
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
    loadHome();
  }

  // recipe card click
  $('.recipe-card').click(function(event){
    // create a recipe card detailed view
    let recipeId = $(this).closest('.recipe-card').attr('id')

    // TODO NEVER impl api call
    let recipeData;
    switch(recipeId) {
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
    $('.popup-bg').click(()=>{
      $('.popup-bg').remove()
    })

    return false;
  });

  $('.addRecipeButton').click(()=>{
    $('.search-view').append(
      `<div class="popup-bg">
        <div class="recipe-card-back">
          <div class="popupEl banner" id="addRecipeBanner">
            <button onclick="closeForm();" class = "formCloseButton">X</button>
            Add Recipe
          </div>
          <div class="popupEl banner" id="addRecipeImg">
            <div>Upload Image</div>
            <i id="uploadIcon" class="fas fa-upload fa-lg"></i>
          </div>
          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Name:</div>
              <input class="addRecipeInput" type="text" id="recipeName" placeholder="ex: Pad Thai">
            </div>
          </div>
          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Description:</div>
              <textarea class="addRecipeInput" style="resize:none" rows="5" cols="40" type="text" id="recipeDesc" placeholder="ex: Pad Thai is a stir-fried rice noodle dish commonly served as street food and at most restaurants in Thailand."></textarea>
            </div>
          </div>
          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Time:</div>
              <span class="numInputContainer">
                <input class="numInput" id="inputDay" type="number" value="0"> D
              </span>
              <span class="numInputContainer">
                <input class="numInput" id="inputHr" type="number" value="0"> H
              </span>
              <span class="numInputContainer">
                <input class="numInput" id="inputM" type="number" value="0"> M
              </span>
            </div>
          </div>
          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Difficulty:</div>
              <span class="difficultyLvl novice">Novice</span>
              <span class="difficultyLvl expert">Expert</span>
              <div>
                <input type="range" min="1" max="100" value="50" class="slider" id="diffRange">
              </div>
            </div>
          </div>
          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Cuisine:</div>
              <input class="addRecipeInput" type="text" id="recipeCuisine" placeholder="ex: Asian">
            </div>
          </div>
          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Ingredients:</div>
              <div class="inputEl" id="ingredientInputs">
                <div id="ingredientList">
                  <div id="ingredient-0" class="addableInput">
                    <span style="padding-right:5px;">
                      <input style="width:35px;" type="number" value="1">
                    </span>
                    <span style="padding-right:5px;">
                      <select>
                        <option value="tsp">tsp</option>
                        <option value="tbsp">tbsp</option>
                        <option value="fl-oz">fl-oz</option>
                        <option value="oz">oz</option>
                        <option value="c">c</option>
                        <option value="pt">pt</option>
                        <option value="qt">qt</option>
                        <option value="gal">gal</option>
                      </select>
                    </span>
                    <input class="addRecipeInput" style="width:110px;" type="text" placeholder="ex: salt">
                  </div>
                </div>
                <button onclick="addInput(this.parentElement);" class="addInputButton">+</button>
              </div>
            </div>
          </div>

          <div class = "popupEl formInputs">
            <div class="inputContainer">
              <div>Instructions:</div>
              <div id="instructionInputs">
                <div class="inputEl" id="instructionList">
                  <div id="instruction-0" class="addableInput">
                    <input class="addRecipeInput" type="text" id="recipeCuisine" placeholder="ex: mix 2 cups of eggs">
                  </div>
                </div>
                <button onclick="addInput(this.parentElement);" class="addInputButton">+</button>
              </div>
            </div>
          </div>

          <div class = "popupEl addRecipeSubmit">
            <button style="background:green; border:solid green">Save</button>
            <button style="background:red; border:solid red">Cancel</button>
          </div>
        </div>
       </div>`
    )
    return false;
  });

}

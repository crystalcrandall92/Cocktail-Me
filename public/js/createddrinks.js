var spiritInput = 2
var ingredientInput = 2


$('.add-spirit-btn').on("click", function(event){
    event.preventDefault()
    if (spiritInput <= 5) {
    $('.spiritAdder').append(`<div class='form-group newSpiritInput${spiritInput}'></div>
    <label for='examplespirit${spiritInput}'>Spirit ${spiritInput}</label>
    <input type="text" style="border:none" class="form-control" id="spirit${spiritInput}input"
                                placeholder="Enter next spirit here">`)
    spiritInput++
    } else {
        alert("You can't add any more spirits")
    }
})

$('.add-ingredient-btn').on("click", function(event){
    event.preventDefault()
    if (ingredientInput <= 5) {
    $('.ingredientAdder').append(`<div class='form-group newIngredientInput${ingredientInput}'></div>
    <label for='Enteringredient${ingredientInput}'>Ingredient ${ingredientInput}</label>
    <input type="text" style="border:none" class="form-control" id="ingredientinput"
                                placeholder="Enter next ingredient here">`)
    ingredientInput++
    } else {
        alert("You can't add any more ingredients")
    }
})

$(`#createDrinkBtn`).on("click", function(event) {
    var drinknameinput = $(`#drinknameinput`).val().trim()
    var directionsInput = $(`#directionsinput`).val().trim()
    event.preventDefault();
        ingredientsArray = []
        for(i = 1; i <= ingredientInput - 1; i++) {
            var ingredientinput = $(`#ingredient${i}input`)
            ingredientsArray.push(ingredientinput.val())
        }
        for(i = 1; i <= spiritInput - 1; i++) {
            var spiritinput = $(`#spirit${i}input`)
            ingredientsArray.push(spiritinput.val())
        }
    var newDrink = {
        name: drinknameinput,
        ingredients: JSON.stringify(ingredientsArray),
        instructions: directionsInput
    }
    console.log(newDrink)
    submitDrink(newDrink)
})

function submitDrink(drink) {
    console.log("hello", drink)
    $.post("/api/createddrinks", drink) 
}
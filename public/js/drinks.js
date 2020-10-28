var drinkName

$("#searchDrinkBtn").on("click", function (event) {
    event.preventDefault();
    drinkName = $("#drinkNameSearch").val();
    console.log(drinkName)
    $("#drinkNameSearch").val("");
    console.log("go")
    searchDrink(drinkName);

})

const DrinkContainer = $("#newDrinkSearch")

class Drink {
    constructor(obj) {
        this.name = obj.strDrink;
        this.glass = obj.strGlass;
        this.image = obj.strDrinkThumb;
        this.instructions = obj.strInstructions;
        this.ingredients = [];

        this.getIngredients(obj);
    }
    getIngredients(drink) {
        for (let i = 1; i <= 15; i++) {
            const ing = this.ingrKey(i);
            const msr = this.measureKey(i);

            if (!drink[ing]) break;

            this.ingredients.push({
                ingredient: drink[ing],
                measure: drink[msr]
            })
        }
    }
    ingrKey(number) {
        return "strIngredient" + number
    }
    measureKey(number) {
        return "strMeasure" + number
    }
}

function searchDrink(drinkName) {
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + drinkName)
        .then(function ({ drinks }) {
            console.log(drinks)
            DrinkContainer.empty();
            for (const drink of drinks) {
                const newDrink = new Drink(drink);

                const parent = $("<div>")
                const name = $("<h3>").text(newDrink.name)
                const img = $("<img>").attr("src", newDrink.image).css("height", "125px")
                const instructions = $("<p>").text(newDrink.instructions)

                const ingrList = $("<ul>")

                for (const ingr of newDrink.ingredients) {
                    const item = $("<li>").text(ingr.measure + ": " + ingr.ingredient)
                    ingrList.append(item)
                }

                parent.append(name, img, instructions, ingrList)
                DrinkContainer.append(parent)
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

$("#searchIngredientBtn").on("click", function (event) {
    event.preventDefault();
    drinkIng = $("#searchByIngredient").val();
    $("#searchByIngredient").val("");
    console.log("go")
    searchIng(drinkIng);

})
var ingSearchArray = [];

function searchIng(drinkIng) {
    console.log(drinkIng)
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=` + drinkIng)
        .then(function (res) {
            console.log(res)
            res.drinks.forEach(drink => ingSearchArray.push(drink.idDrink))
            console.log(ingSearchArray)
            for (i = 0; i < ingSearchArray.length; i++) {
                var drinkID = ingSearchArray[i]
                $.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + drinkID)
                    .then(function ({ drinks }) {
                        console.log(drinks)
                        DrinkContainer.empty();
                        for (const drink of drinks) {
                            const newDrink = new Drink(drink);
                            const parent = $("<div>")
                            const name = $("<h3>").text(newDrink.name)
                            const img = $("<img>").attr("src", newDrink.image).css("height", "125px")
                            const instructions = $("<p>").text(newDrink.instructions)
                            const ingrList = $("<ul>")
                            for (const ingr of newDrink.ingredients) {
                                const item = $("<li>").text(ingr.measure + ": " + ingr.ingredient)
                                ingrList.append(item)
                            }
                            parent.append(name, img, instructions, ingrList)
                            DrinkContainer.append(parent)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            };
        })
}


$("#RandomBtn").on("click", function (event) {
    event.preventDefault();
    console.log("go")
    randomDrink();

})

function randomDrink() {
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(function ({ drinks }) {
            console.log(drinks)
            DrinkContainer.empty();
            for (const drink of drinks) {
                const newDrink = new Drink(drink);

                const parent = $("<div>")
                const name = $("<h3>").text(newDrink.name)
                const img = $("<img>").attr("src", newDrink.image).css("height", "125px")
                const instructions = $("<p>").text(newDrink.instructions)

                const ingrList = $("<ul>")

                for (const ingr of newDrink.ingredients) {
                    const item = $("<li>").text(ingr.measure + ": " + ingr.ingredient)
                    ingrList.append(item)
                }

                parent.append(name, img, instructions, ingrList)
                DrinkContainer.append(parent)
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

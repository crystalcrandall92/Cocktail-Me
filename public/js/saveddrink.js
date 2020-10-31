var drinkContainer = $("#saveddrinksList")


$(document).ready(function () {
  getDrink()
})

function getDrink() {
  $.get("/api/getdrinks", function (res) {
    console.log(res)
    for (i = 0; i < res.length; i++) {
      drinkContainer.append(`<p> ${res[i].name}</p>`)
      var splitobject = (res[i].ingredients)
      var ingredientObj = JSON.parse(splitobject)
      console.log(ingredientObj.length)
      for (j = 0; j < ingredientObj.length; j++) {
        drinkContainer.append(`<p> ${ingredientObj[j]}</p>`)
      }
      drinkContainer.append(`<p> ${res[i].instructions}</p>`)
    }
  })
}
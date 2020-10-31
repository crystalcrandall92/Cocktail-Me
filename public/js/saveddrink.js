var saveddrinksList = $("#saveddrinksList")

$(document).ready(function () {
  getDrink()
})

function getDrink() {
  $.get("/api/getdrinks", function (res) {
    console.log(res)
    for (i = 0; i < res.length; i++) {
      saveddrinksList.append(`<h4> ${res[i].name}</h4>`)
      var splitobject = (res[i].ingredients)
      var ingredientObj = JSON.parse(splitobject)
      console.log(ingredientObj.length)
      for (j = 0; j < ingredientObj.length; j++) {
        saveddrinksList.append(`<p> ${ingredientObj[j]}</p>`)
      }
      saveddrinksList.append(`<p> ${res[i].instructions}</p>`)
    }
  })
}
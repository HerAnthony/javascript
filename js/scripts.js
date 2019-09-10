// create taco recipe using prototypes, first to create what will be needed for the recipe itself

function tacoRecipe(meat, seasonings, vegetables, tortilla) {
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

tacoRecipe.prototype.prepIngredients = function () {
    console.log(`Get two pounds of ${this.meat} and add to pan.  In a separate bowl collect ${this.seasonings}. Make sure to get your ${this.vegetables} ready to be washed and cut. Then warm your tortilla on the warmer to fry after meat is put in`);
}

tacoRecipe.prototype.forgottenIngredients = function () {
}


// junked and moved on
// function Meat(meat, seasonings) {
//     this.category = 'meat';
// }

// console.log(new Meat());






const asadaTaco = new tacoRecipe('ground beef', ['garlic powder', 'onion powder', 'salt & pepper'], ['lemon', 'tomatoes', 'lettuce'], 'corn tortilla');

const carnitas = new tacoRecipe('beef chunk', ['garlic powder', 'onion powder', 'salt & pepper'], ['lemon', 'tomatoes', 'lettuce'], 'corn tortilla');

console.log(carnitas.prepIngredients()), (asadaTaco.prepIngredients());